// Post-build prerendering.
//
// This app is a client-rendered SPA (Vite + React), which means the HTML
// the server actually sends is an near-empty shell — real content only
// appears after the JS bundle runs. That's invisible to crawlers/bots that
// don't execute JavaScript (many link-preview bots, some search crawlers),
// so every page shared on social media or indexed without JS shows the
// same generic title/description no matter which route it is.
//
// This script runs after `vite build`. For each route it boots a headless
// Chromium, loads the built app, lets React (and react-helmet-async) render
// and set the real per-page <title>/meta tags, then writes the fully
// rendered HTML to disk as that route's static index.html. The JS bundle
// is untouched and still loads on top for real visitors, so the app stays
// a normal, fully interactive SPA — this only changes what a non-JS client
// (crawler, link preview, curl) sees on first response.

import { createServer } from 'node:http'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import puppeteer from 'puppeteer'
import * as cheerio from 'cheerio'

const DIST_DIR = path.resolve(import.meta.dirname, '..', 'dist')
const PORT = 4173
const PRODUCTION_URL = 'https://novacoretechnology.it.com'
const LOCAL_ORIGIN = `http://localhost:${PORT}`

// Every route the app serves, plus the dynamic portfolio case-study slugs.
const CASE_STUDY_SLUGS = ['mayele-booking', 'proconnect', 'penepene', 'ngt']
const ROUTES = [
  '/',
  '/about',
  '/services',
  '/portfolio',
  ...CASE_STUDY_SLUGS.map((slug) => `/portfolio/${slug}`),
  '/features',
  '/contact',
  '/privacy-policy',
  '/terms-of-service',
  '/cookie-policy',
]

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript',
  '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.mp4': 'video/mp4',
  '.json': 'application/json', '.ico': 'image/x-icon', '.webmanifest': 'application/manifest+json',
}

// The pristine, un-prerendered SPA shell — cached up front so that once we
// start overwriting dist/index.html (and dist/<route>/index.html) with
// prerendered snapshots, every route still boots from the same empty shell
// instead of accidentally inheriting a previous route's baked-in title/meta
// and content (which would leak between routes and pile up duplicate
// <title>/<meta> tags via react-helmet-async).
let pristineShell

function startStaticServer() {
  const server = createServer(async (req, res) => {
    try {
      const urlPath = decodeURIComponent(req.url.split('?')[0])
      const filePath = path.join(DIST_DIR, urlPath)
      const isRealAsset = urlPath !== '/' && existsSync(filePath) && !filePath.endsWith(path.sep)
      if (isRealAsset) {
        const ext = path.extname(filePath)
        const body = await readFile(filePath)
        res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' })
        res.end(body)
        return
      }
      // SPA fallback, same rule as public/_redirects (/* -> /index.html) —
      // always the pristine shell, never a route snapshot written so far.
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(pristineShell)
    } catch (err) {
      res.writeHead(404)
      res.end('Not found')
    }
  })
  return new Promise((resolve) => server.listen(PORT, () => resolve(server)))
}

// react-helmet-async runs on top of the static tags already baked into
// index.html by Vite, and in this pure client-rendered (non-SSR) setup it
// does not fully reconcile against them — the captured page ends up with
// both the generic static tag AND the page-specific Helmet one for title,
// description, og:*, twitter:* and the canonical link. Empirically (verified
// via document.title and raw DOM order): Helmet mutates the original
// <title> in place, so the *first* <title> is the correct page-specific one
// and any later one is the stale static leftover; for the meta/link tags it
// instead appends its own after the static ones, so there the *last*
// occurrence of each is the correct one. We keep whichever is right per tag
// and drop the rest.
const KEEP_FIRST_SELECTORS = ['title']
const KEEP_LAST_SELECTORS = [
  'meta[name="description"]',
  'meta[name="robots"]',
  'meta[property^="og:"]',
  'meta[name^="twitter:"]',
  'link[rel="canonical"]',
]

function keyFor($, el) {
  return el.tagName === 'meta' ? ($(el).attr('property') || $(el).attr('name')) : el.tagName
}

function dedupeHead(html) {
  const $ = cheerio.load(html)

  for (const selector of KEEP_FIRST_SELECTORS) {
    const matches = $('head').find(selector).toArray()
    const firstByKey = new Map()
    for (const el of matches) {
      const key = keyFor($, el)
      if (!firstByKey.has(key)) firstByKey.set(key, el)
    }
    for (const el of matches) {
      if (firstByKey.get(keyFor($, el)) !== el) $(el).remove()
    }
  }

  for (const selector of KEEP_LAST_SELECTORS) {
    const matches = $('head').find(selector).toArray()
    const lastByKey = new Map()
    for (const el of matches) lastByKey.set(keyFor($, el), el)
    for (const el of matches) {
      if (lastByKey.get(keyFor($, el)) !== el) $(el).remove()
    }
  }

  return $.html()
}

async function prerenderRoute(browser, route) {
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 900 })
  await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0', timeout: 30000 })

  // Nudge whileInView (framer-motion) animations by scrolling through the
  // page, so the captured snapshot is visually complete too, not just
  // textually complete.
  await page.evaluate(async () => {
    const step = Math.max(300, Math.floor(window.innerHeight * 0.8))
    let last = -1
    while (document.scrollingElement.scrollTop !== last) {
      last = document.scrollingElement.scrollTop
      window.scrollBy(0, step)
      await new Promise((r) => setTimeout(r, 120))
    }
    window.scrollTo(0, 0)
  })
  await new Promise((r) => setTimeout(r, 200))

  let html = dedupeHead(await page.content())
  // SEO.jsx builds the canonical/og:url/twitter:url from window.location.href,
  // which during this local prerender pass resolves to our throwaway static
  // server, not the real site — rewrite it to the actual production origin
  // before the file is ever written to disk.
  html = html.split(LOCAL_ORIGIN).join(PRODUCTION_URL)
  await page.close()
  return html
}

async function main() {
  pristineShell = await readFile(path.join(DIST_DIR, 'index.html'), 'utf-8')

  console.log(`[prerender] serving ${DIST_DIR} on :${PORT}`)
  const server = await startStaticServer()

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  let ok = 0
  for (const route of ROUTES) {
    try {
      const html = await prerenderRoute(browser, route)
      const outDir = route === '/' ? DIST_DIR : path.join(DIST_DIR, route)
      await mkdir(outDir, { recursive: true })
      await writeFile(path.join(outDir, 'index.html'), html, 'utf-8')
      console.log(`[prerender] ✓ ${route}`)
      ok++
    } catch (err) {
      console.error(`[prerender] ✗ ${route}:`, err.message)
    }
  }

  await browser.close()
  server.close()

  console.log(`[prerender] done: ${ok}/${ROUTES.length} routes`)
  if (ok !== ROUTES.length) {
    // Don't fail the whole build over prerendering — the CSR bundle still
    // works fine without it — but surface a non-zero exit so CI notices.
    process.exitCode = 1
  }
}

main()
