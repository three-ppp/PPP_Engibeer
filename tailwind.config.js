module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  theme: {
    backgroundImage: (theme) => ({
      'signin-img': "url('/bg-img.png')",
        }),
    backgroundColor: (theme) => ({
      ...theme("colors"),
      orange: "#FFEDD5",
      yellow: "#FEF3C7",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      orange_800: " #C2410C",
      light_blue_600: "#0284C7",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          textShadow: "2px 0 0 #FBBF24, 0 2px 0 #FBBF24, -2px 0 0 #FBBF24, 0 -2px 0 #FBBF24"
        }
      };
      addUtilities(newUtilities);
    }
  ],
};
