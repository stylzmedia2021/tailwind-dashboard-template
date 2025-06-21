/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/css/**/*.{css,scss}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        violet: {
          50: '#f1eeff', 100: '#e6e1ff', 200: '#d2cbff', 300: '#b7acff', 400: '#9c8cff', 500: '#8470ff', 600: '#755ff8', 700: '#5d47de', 800: '#4634b1', 900: '#2f227c', 950: '#1c1357',
        },
        sky: {
          50: '#e3f3ff', 100: '#d1ecff', 200: '#b6e1ff', 300: '#a0d7ff', 400: '#7bc8ff', 500: '#67bfff', 600: '#56b1f3', 700: '#3193da', 800: '#1c71ae', 900: '#124d79', 950: '#0b324f',
        },
        green: {
          50: '#d2ffe2', 100: '#b1fdcd', 200: '#8bf0b0', 300: '#67e294', 400: '#4bd37d', 500: '#3ec972', 600: '#34bd68', 700: '#239f52', 800: '#15773a', 900: '#0f5429', 950: '#0a3f1e',
        },
        red: {
          50: '#ffe8e8', 100: '#ffd1d1', 200: '#ffb2b2', 300: '#ff9494', 400: '#ff7474', 500: '#ff5656', 600: '#fa4949', 700: '#e63939', 800: '#c52727', 900: '#941818', 950: '#600f0f',
        },
        yellow: {
          50: '#fff2c9', 100: '#ffe7a0', 200: '#ffe081', 300: '#ffd968', 400: '#f7cd4c', 500: '#f0bb33', 600: '#dfad2b', 700: '#bc9021', 800: '#816316', 900: '#4f3d0e', 950: '#342809',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
