/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#ff3f6c", dark: "#e73359" },
      },
      boxShadow: {
        card: "0 10px 30px -10px rgba(0,0,0,.15)",
      },
    },
  },
  plugins: [],
};
