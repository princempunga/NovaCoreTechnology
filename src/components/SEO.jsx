import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

export default function SEO({ 
  title, 
  description, 
  type = 'website', 
  image = '/og-image.png',
  canonical = window.location.href,
  index = true
}) {
  const { t } = useTranslation()
  const siteName = 'NovaCore Technology'
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} | ${t('seo.defaultTitle')}`
  const metaDescription = description || t('seo.defaultDescription')
  
  // Base URL for og:image - should be full path for social media crawlers
  const siteUrl = 'https://novacoretechnology.netlify.app'
  const ogImage = `${siteUrl}${image}`

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="robots" content={index ? 'index, follow' : 'noindex, nofollow'} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}
