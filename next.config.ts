import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
    return [
      {
        source: '/',
        destination: '/about',
        permanent: true,  // 301 редирект
      },
    ]
  },
  /* config options here */
  reactStrictMode: true,
};

export default nextConfig;
