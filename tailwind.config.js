/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        navbarBg: '#0A3981',
        headingClr: '#0A3981',
        navClr: '#0A3981',
        titleClr: "#ffe0c7",
        subClr: "#393E46",
        bgClr: "#eaf3f7"
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

