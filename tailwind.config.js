/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-1": "#3e997d",
        "brand-1-light": "#c2e2d6",
        "brand-2": "#23766e",
        "brand-3": "#e1d0ba",
        "brand-4": "#d7a878",
        "brand-5": "#8f521c",
        "brand-6": "#70593e",
      },

    },
  },
  plugins: [],
}

