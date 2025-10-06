import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */


const withPWA = require('next-pwa')({
  dest: 'public'
  // Aquí puedes agregar más configuraciones si lo necesitas
});

const nextConfig = {
  reactStrictMode: true,
  // Aquí van otras configuraciones de tu proyecto
};

export default nextConfig;
module.exports = withPWA(nextConfig);
