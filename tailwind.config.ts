import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#1B3B5F",
          foreground: "#F7F2E8",
        },
        secondary: {
          DEFAULT: "#D4842C",
          foreground: "#F7F2E8",
        },
        accent: {
          DEFAULT: "#E5D9C8",
          foreground: "#2C2118",
        },
        muted: {
          DEFAULT: "#E5D9C8",
          foreground: "#6B5E52",
        },
        /* Heritage tokens, Banarasi indigo, saffron aarti, sandstone ghats */
        ivory: "#F7F2E8",
        charcoal: "#2C2118",
        gold: "#B8943F",
        saffron: "#D4842C",
        forest: "#1B3B5F",
        kashi: "#1B3B5F",
        beige: "#E5D9C8",
        terracotta: "#A65D3F",
        ganga: "#3D6B7A",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 4px 24px rgba(27, 59, 95, 0.1)",
        "luxury-lg": "0 8px 40px rgba(27, 59, 95, 0.14)",
        "luxury-xl": "0 16px 64px rgba(27, 59, 95, 0.18)",
        saffron: "0 4px 20px rgba(212, 132, 44, 0.25)",
      },
      backgroundImage: {
        "heritage-gradient":
          "linear-gradient(135deg, #1B3B5F 0%, #2A4F72 50%, #5C2E2E 100%)",
        "ghat-mist":
          "linear-gradient(180deg, rgba(247,242,232,0) 0%, rgba(247,242,232,0.95) 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-down": "slideDown 0.3s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
