/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/heli-forklift-ph' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/heli-forklift-ph' : '',
  trailingSlash: true,
}

module.exports = nextConfig

