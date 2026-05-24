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
          DEFAULT: "#A33C22",
          foreground: "#F8F8F8",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Manrope", "system-ui", "sans-serif"],
        display: ["Outfit", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        soft: "0 18px 40px -24px rgba(15, 23, 42, 0.26)",
        cinematic: "0 30px 90px -45px rgba(10, 15, 12, 0.72)",
      },
      borderRadius: {
        xl: "1rem",
        cinematic: "2rem",
        "cinematic-lg": "3rem",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

export default config;
