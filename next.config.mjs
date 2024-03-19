/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.panaverse.co",

      },
    ],
  },
};

export default nextConfig;
