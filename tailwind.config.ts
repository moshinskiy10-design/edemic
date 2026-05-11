import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#1F4D3F",
        "forest-700": "#173B30",
        coral: "#F2A48A",
        "coral-600": "#E58A6C",
        cream: "#F4F1E8",
        "cream-200": "#EBE6D6",
        offblack: "#1A1A1A",
        stone: "#666666",
        warning: "#B0413E",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
        body: ["var(--font-jakarta)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: ["clamp(2.5rem, 5vw + 1rem, 5rem)", { lineHeight: "1.05" }],
        h1: ["clamp(2rem, 3vw + 1rem, 3.5rem)", { lineHeight: "1.1" }],
        h2: ["clamp(1.5rem, 2vw + 1rem, 2.5rem)", { lineHeight: "1.2" }],
        h3: ["clamp(1.25rem, 1.5vw + 0.5rem, 1.75rem)", { lineHeight: "1.3" }],
      },
      borderRadius: {
        sm: "0.375rem",
        md: "0.75rem",
        lg: "1.5rem",
        pill: "9999px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0,0,0,0.05)",
        md: "0 4px 12px rgba(0,0,0,0.08)",
        lg: "0 12px 32px rgba(0,0,0,0.12)",
      },
      transitionTimingFunction: {
        emph: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      maxWidth: {
        prose: "65ch",
        wrap: "1200px",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "scale(0.98)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.55s cubic-bezier(0.4, 0, 0.2, 1) both",
        "fade-in": "fade-in 0.7s cubic-bezier(0.4, 0, 0.2, 1) both",
      },
    },
  },
  plugins: [],
};
export default config;
