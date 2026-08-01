import type { MetadataRoute } from 'next'

const siteUrl = process.env.GITHUB_PAGES === 'true'
  ? 'https://iamjmlim.github.io/heli-forklift-ph'
  : (process.env.NEXT_PUBLIC_SITE_URL || 'https://heli-forklift-ph.vercel.app')

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl,               lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${siteUrl}/products`, lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${siteUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/about`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/contact`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/events`,   lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.7 },
  ]
}
