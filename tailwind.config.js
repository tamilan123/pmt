/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    letterSpacing: {
      wider: "1em"
    },
 
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '767px',
      // => @media (min-width: 767px) { ... }

      'lg': '992px',
      // => @media (min-width: 992px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1200px) { ... }

      'xxl': '1400px',
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      fontFamily: {
        bruno: ['"Bruno Ace SC"', 'sans-serif'],
      },
      colors: {
        'yellowbuy': '#FFE501',
      },
      fontFamily: {
        sans: ["Open Sans"], // Add Inter as default sans
      },
    },
  },
  plugins: [],
}
