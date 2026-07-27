/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true'

const nextConfig = {
  output: isGithubPages ? 'export' : undefined,
  images: {
    unoptimized: isGithubPages,
  },
  basePath: isGithubPages ? '/heli-forklift-ph' : '',
  assetPrefix: isGithubPages ? '/heli-forklift-ph' : '',
  trailingSlash: isGithubPages,
}

module.exports = nextConfig
