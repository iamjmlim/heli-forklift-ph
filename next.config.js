/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/heli-forklift-ph' : '',
  assetPrefix: isProd ? '/heli-forklift-ph' : '',
  trailingSlash: true,
}

module.exports = nextConfig

