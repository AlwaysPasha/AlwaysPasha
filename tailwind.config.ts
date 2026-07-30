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
        surface: "#111827",
        border: "rgba(255,255,255,0.08)",
        ink: "#FFFFFF",
        muted: "#9CA3AF",

        accent: {
          from: "#7C3AED",
          to: "#2563EB",
        },
      },

      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },

      maxWidth: {
        content: "1200px",
      },

      backgroundImage: {
        "accent-gradient": "linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)",
        "accent-gradient-soft":
          "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(37,99,235,0.15) 100%)",
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },

      backgroundSize: {
        grid: "44px 44px",
      },

      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        floatBlob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-24px, 28px) scale(1.08)" },
        },
        floatBlobReverse: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(26px, -22px) scale(1.05)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        bounceArrow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
      },

      animation: {
        fadeInUp: "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        fadeIn: "fadeIn 1s ease forwards",
        floatBlob: "floatBlob 12s ease-in-out infinite",
        floatBlobReverse: "floatBlobReverse 14s ease-in-out infinite",
        spinSlow: "spinSlow 26s linear infinite",
        gradientShift: "gradientShift 8s ease infinite",
        bounceArrow: "bounceArrow 1.8s ease-in-out infinite",
      },
    },
  },

  plugins: [],
};

export default config;
