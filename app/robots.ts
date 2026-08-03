import type { MetadataRoute } from 'next'

const siteUrl = process.env.GITHUB_PAGES === 'true'
  ? 'https://iamjmlim.github.io/heli-forklift-ph'
  : 'https://heliforkliftph.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
