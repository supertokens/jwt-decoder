/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
    
  },
  basePath: '/jwt-encoder-decoder',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
