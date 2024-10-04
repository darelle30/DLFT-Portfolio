
const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Satisfy", "cursive"], // Optional custom font for headers or display
      BebasNeue: ["Bebas Neue", "sans-serif"],
      Pacifico:  ["Pacifico", "system-ui"], // Existing font
      Anton:  ["Anton", "system-ui"], // Existing font  
      poppins: ["Poppins", "sans-serif"], // New font for subtitles
      montserrat: ["Montserrat", "sans-serif"], // New font for name/title
      roboto: ["Roboto", "sans-serif"], // New font for body text and quotes
    },
    screens: {
      'ssm': '320px',   // Smallest screen size (phones)
      'sm': '640px',    // Standard small breakpoint (mobile devices)
      'md': '768px',    // Standard medium breakpoint (tablets)
      'lg': '1024px',   // Large breakpoint (laptops)
      'xl': '1280px',   // Extra-large breakpoint (desktops)
      '2xl': '1536px',  // Larger desktop screens
    },
  },
  plugins: [],
});
