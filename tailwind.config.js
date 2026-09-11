/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./blog/*.html",
    "./downloads/*.html",
    "./assets/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        clifford: "#483285",
      },
    },
  },
  plugins: [],
}
