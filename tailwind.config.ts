import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F8F8F8",
        foreground: "#111111",
        surface: "#FFFFFF",
        border: "#E5E7EB",
        muted: "#6B7280",
        accent: {
          DEFAULT: "#0F766E",
          foreground: "#F8F8F8",
        },
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 40px -24px rgba(15, 23, 42, 0.26)",
      },
      borderRadius: {
        xl: "1rem",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

export default config;
