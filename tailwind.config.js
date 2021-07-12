module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      transistionProperty: {
        width: "width",
      },
      screens: {
        xs: "475px",
        "3xl": "2000px",
      },
      spacing: {
        sidebar: "16rem",
        navbar: "calc(100% - 16rem)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
