/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html, js}"],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        13: "3.25rem",
      },
      fontFamily: {
        playpen: ["Playpen Sans"],
      },
      colors: {
        custom: "#FFC436",
      },
    },
  },
  plugins: [],
};
