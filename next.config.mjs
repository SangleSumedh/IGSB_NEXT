/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    // 1. Fix: Migrate "domains" to "remotePatterns"
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
    // 2. Fix: Explicitly allow quality="100" used in your banners
    qualities: [25, 50, 75, 100],
    unoptimized: false, // Required for static export
  },
};
 
export default nextConfig;
