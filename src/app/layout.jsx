import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata = {
  title: "Neopa - Creative Portfolio",
  description: "Contemporary architecture, prime locations, and upscale home design to inspire your next journey.",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <head>
        <meta name="theme-color" content="#FFFFFF" />
      </head>
      <body>{children}</body>
    </html>
  );
}