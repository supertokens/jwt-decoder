/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
    
  },
  basePath: '/jwt-decoder',
  // assetPrefix: '/jwt-decoder',
  // images: {
  //   path: '/jwt-decoder/_next/image',
  // },
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
