module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          a: "#66bfbf",
          b: "#EAF6F6",
          c: "#1b7f69",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
