/** @type {import('next').NextConfig} */
const nextConfig = {
  // Completely disable all development indicators
  devIndicators: false,
  // Disable webpack dev middleware overlay
  webpack: (config, { dev }) => {
    if (dev) {
      config.devtool = false;
    }
    return config;
  },
}

module.exports = nextConfig
