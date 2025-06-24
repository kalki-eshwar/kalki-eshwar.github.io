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
};

module.exports = nextConfig;