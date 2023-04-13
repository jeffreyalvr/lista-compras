/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "fade-out": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        "move-up": {
          "0%": { transform: "translateY(40px)", opacity: 0 },
          "100%": { transform: "translateY(0px)", opacity: 1 },
        },
      },
      animation: {
        "fade-in": "fade-in .4s ease-in-out",
        "fade-out": "fade-out .4s ease-in-out",
        "move-up": "move-up 1.2s ease-in-out",
      },
    },
  },
  plugins: [],
};
