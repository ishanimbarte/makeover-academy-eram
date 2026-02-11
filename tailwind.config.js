/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",          // ✅ Vite's main HTML
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ include all React components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};