const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Agrega esta línea si usas el componente Image de Next.js para imágenes externas
  // images: { domains: ['images.unsplash.com'] },
};

module.exports = withPWA(nextConfig);
