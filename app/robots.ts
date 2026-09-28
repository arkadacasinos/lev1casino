import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
      },
    ],
    sitemap: 'https://lev1casino.vercel.app/sitemap.xml',
    host: 'https://lev1casino.vercel.app',
  }
}
