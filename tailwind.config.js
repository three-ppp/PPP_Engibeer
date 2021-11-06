module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      orange: "#FFEDD5",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      orange_800: " #C2410C",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
