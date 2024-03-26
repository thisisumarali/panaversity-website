/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.panaverse.co",
        hostname: "assets.aceternity.com",
      },
    ],
  },
};

export default nextConfig;
