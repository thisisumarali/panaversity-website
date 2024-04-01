/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.panaverse.co",
        hostname: "assets.aceternity.com",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
