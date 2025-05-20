/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Change from 'standalone' to default for Vercel deployment
  // output: 'standalone',
  
  // Add trailing slashes to ensure consistent routing
  trailingSlash: true,
  
  // Ensure images are properly optimized
  images: {
    domains: ['vercel.com'],
    unoptimized: process.env.NODE_ENV !== 'production',
  },
};

module.exports = nextConfig;
