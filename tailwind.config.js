/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        navbarBg: '#0A3981',
        headingClr: '#47663B',
        navClr: '#0A3981',
        titleClr: "#EED3B1",
        subClr: "#393E46",
        bgClr: "#edeeea"
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

