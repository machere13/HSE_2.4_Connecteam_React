import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: process.env.NETLIFY ? 'export' : undefined,
  distDir: '.next',
  images: {
    domains: [],
    unoptimized: process.env.NETLIFY ? true : false
  },

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    }

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },

  experimental: {
    externalDir: false,
    optimizePackageImports: ['@heroicons/react']
  }
}

export default nextConfig