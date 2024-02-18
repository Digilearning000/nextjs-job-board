import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "ivd8iinmblel1xk3.public.blob.vercel-storage.com" },
    ],
  },
};

export default nextConfig;
