/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
    
  },
  basePath: '/jwt-decoder',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
