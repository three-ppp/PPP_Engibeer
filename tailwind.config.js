module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      orange: "#FFEDD5",
      yellow: "#FEF3C7",
      light_blue_600: "#0284C7",
      light_blue_400: "#40a9dd",
      light_blue_100: "#d8e4ea",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      orange_800: " #C2410C",
      light_blue_600: "#0284C7",
    }),
    boxShadow: {
      btn_01: "0 8px 0 #c4cacc",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
