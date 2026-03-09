/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A", // Deep Navy (Main brand color)
        primary_light: "#1E3A8A", // Corporate Blue
        // secondary: "#F59E0B", // Gold Accent (Premium feel)
        secondary: "#10B981", // Emerald Green
        secondary_two: "#FBBF24", // Light Gold (Hover / highlights)
        border_color: "#E5E7EB", // Light border
        soft_black: "#111827", // Dark text
        background: "#F8FAFC", // Main background
      },
    },
    keyframes: {
      ripple: {
        "0%": { boxShadow: "0 0 0 0 rgba(249, 155, 36, 0.6)" },
        "70%": { boxShadow: "0 0 0 30px rgba(249, 155, 36, 0)" },
        "100%": { boxShadow: "0 0 0 0 rgba(249, 155, 36, 0)" },
      },
    },
    animation: {
      ripple: "ripple 2s infinite",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
