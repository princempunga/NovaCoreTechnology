// Tailwind CSS v4 is already handled by the @tailwindcss/vite plugin in
// vite.config.js, so no PostCSS plugins are actually needed here. This file
// exists only so Vite's PostCSS config search finds a config in the project
// root before it walks up further and (on some machines) picks up an
// unrelated postcss.config.mjs sitting elsewhere on the filesystem.
const config = {
  plugins: {},
}

export default config
