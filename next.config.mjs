/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site — `next build` emits ./out, deployable to any static host.
  output: "export",
  // Emits about/index.html rather than about.html, which is what GitHub Pages
  // and most plain static hosts expect for extensionless URLs.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
