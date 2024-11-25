/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        navbarBg: '#1F4529',
        headingClr: '#47663B',
        navClr: '#DCEEE1',
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

