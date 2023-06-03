/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#E927E1",
          // light: "#FF7A00",
        },
        secondary: {
          light: "#E2C6FF",
        },
        back: {
          main: "#5935A5",
          second: "#432a79",
          third: "#565c94",
        },
      },
    },
  },
  plugins: [],
};
