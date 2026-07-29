import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        bg: "#09090B",
        surface: "#18181B",
        border: "#27272A",
        ink: "#FFFFFF",
        muted: "#A1A1AA",

        accent: {
          DEFAULT: "#F97316",
          dark: "#EA580C",
          light: "#FDBA74",
        },
      },

      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },

      maxWidth: {
        content: "1200px",
      },

      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(18px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        floatBlob: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
          },
          "50%": {
            transform: "translate(-20px, 24px) scale(1.06)",
          },
        },

        bounceArrow: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(8px)",
          },
        },

        spinSlow: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },

      animation: {
        fadeInUp: "fadeInUp 0.7s ease forwards",
        floatBlob: "floatBlob 10s ease-in-out infinite",
        bounceArrow: "bounceArrow 1.8s ease-in-out infinite",
        spinSlow: "spinSlow 22s linear infinite",
      },
    },
  },

  plugins: [],
};

export default config;