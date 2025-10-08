const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  // La línea clave es esta:
  disable: !(process.env.NODE_ENV === "production"),
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPWA(nextConfig);
