/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        
      },
    },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("tailwind-scrollbar-hide"),
  ],
};
