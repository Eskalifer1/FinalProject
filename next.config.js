/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');

const nextConfig = {
  i18n,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "demo.ramsthemes.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
