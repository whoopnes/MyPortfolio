/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // <-- Pastikan path ini benar!
  theme: {
    extend: {
      fontFamily: {
        gotham: ['Gotham Black', 'sans-serif'],
        myriad: ['Myriad Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
