/** @type {import('next').NextImage} */
const nextConfig = {
  /* 1. Image Optimization */
  images: {
    // Allows you to use images from specific external domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        pathname: '**'
      }
    ]
  },

  /* 2. Enhanced Development Experience */
  logging: {
    fetches: {
      fullUrl: true // Shows you exactly what's happening with your API calls in the terminal
    }
  },

  /* 3. Production Readiness */
  reactStrictMode: true, // Helps catch common bugs early
  swcMinify: true // Uses the faster Rust-based compiler for smaller bundles
};

export default nextConfig;
