import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "img.youtube.com" },
      { protocol: "https", hostname: "assets.stanwith.me" },
      { protocol: "https", hostname: "m.media-amazon.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/routine-breakdowns",
        destination: "/braie-kdowns",
        permanent: true,
      },
      {
        source: "/resources",
        destination: "/learn",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
