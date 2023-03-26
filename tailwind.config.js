/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#5CDB78",
          // light: "#FF7A00",
        },
        secondary: {
          light: "#BBEA71",
        },
      },
    },
  },
  plugins: [],
};
