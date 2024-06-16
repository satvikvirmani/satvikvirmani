import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "32px",
      "4xl": "40px",
      "5xl": "48px",
      "6xl": "60px",
      "7xl": "72px",
      "8xl": "80px",
    },
    extend: {
      colors: {
        accent: "#A5E0FA",
        primary: "#00072D",
        secondary: "#0E6AA8",
        tertairy: "#0B2472",
      },
    },
  },
  plugins: [],
};

export default config;
