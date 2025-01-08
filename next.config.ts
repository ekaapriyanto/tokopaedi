import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "riantybatik.co.id",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
