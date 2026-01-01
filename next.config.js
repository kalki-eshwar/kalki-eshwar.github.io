/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: '', // No subfolder for user site
  assetPrefix: '', // No asset prefix for user site
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    // Don't fail the build on ESLint errors during production builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Don't fail the build on TypeScript errors during production builds  
    ignoreBuildErrors: false, // Keep TypeScript checks enabled
  },
};

module.exports = nextConfig;