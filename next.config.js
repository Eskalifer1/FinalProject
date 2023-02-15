/** @type {import('next').NextConfig} */
const nextConfig = {
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
