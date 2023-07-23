/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    colors: {
      primaryColor: "#0e2f44",
      secondaryColor: "#CD2E3F",
      white: "#FFF",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      green: colors.green,
      blue: colors.blue,
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
