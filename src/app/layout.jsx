import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata = {
  title: "Creative Photography Portfolio",
  description: "A modern portfolio showcasing creative photography with stunning visuals and smooth animations.",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        <meta name="theme-color" content="#F5F5F7" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}