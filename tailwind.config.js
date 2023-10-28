/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        isBlue: "#75CFB8",
        tema: "rgb(var(--warna-tema) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
