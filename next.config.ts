import path from 'path'

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  distDir: '.next',
  images: {
    domains: ['res.cloudinary.com'],
    unoptimized: false,
  },

  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    }

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.tsx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },

  experimental: {
    externalDir: false,
  },
}

export default nextConfig
