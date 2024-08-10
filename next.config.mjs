/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'server',
  distDir: './dist',
  images: { unoptimized: true },
};

export default nextConfig;
