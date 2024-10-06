/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["aceternity.com"],
  },
};

// module.exports = nextConfig;

export default nextConfig;
