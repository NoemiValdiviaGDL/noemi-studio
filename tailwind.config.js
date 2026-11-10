/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          darkPurple: "#4B1DA1",
          indigo: "#201DA1",
          electricPurple: "#761DA1",
          cobalt: "#1D44A1",
          magenta: "#A11DA0",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        cursive: ["Cormorant Garamond", "cursive", "serif"],
      },
      keyframes: {
        glow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        sparkle: {
          "0%, 100%": { opacity: "0.2", transform: "scale(0.8) rotate(0deg)" },
          "50%": { opacity: "1", transform: "scale(1.2) rotate(180deg)" },
        },
      },
      animation: {
        glow: "glow 6s ease-in-out infinite",
        sparkle: "sparkle 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
