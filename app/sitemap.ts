import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://lev1casino.vercel.app/',
      lastModified: new Date('2026-09-28T00:00:00.000Z'),
      changeFrequency: 'daily',
      priority: 1,
    },
  ]
}
