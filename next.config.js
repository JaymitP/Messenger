/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "dieselpunkcore.com",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
