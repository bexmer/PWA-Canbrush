/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-bg": "#FFFFFF",
        "card-bg": "#F5F5F7",
        "gray-text": "#86868B",
        "dark-text": "#1D1D1F",
        "gray-border": "#E8E8EA",
        "dark-card": "#1C1C1E",
      },
      boxShadow: {
        card: "0 4px 20px rgba(0, 0, 0, 0.05)",
        header: "0px 4px 20px rgba(0, 0, 0, 0.1)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
      },
    },
  },
  plugins: [],
};
