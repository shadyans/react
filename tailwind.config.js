/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dblue':'#082a5e',
        'lblue':'#1363df'
      },
      // color:{
      //   'dblue':'#082a5e',
      //   "lblue":"#1363df",
      // }
    },
  },
  color:{
    'white': '#ffffff',
    'purple': '#3f3cbb',
    'midnight': '#121063',
    'metal': '#565584',
    'tahiti': '#3ab7bf',
    'silver': '#ecebff',
    'bubble-gum': '#ff77e9',
  },
  plugins: [],
}