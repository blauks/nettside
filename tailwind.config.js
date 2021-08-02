module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: { sm: "500px", hw: "750px", md: "1000px", lg: "1500px" },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
  },
  variants: {
    extend: {
      textColor: ["visited"],
    },
  },
  plugins: [],
};
