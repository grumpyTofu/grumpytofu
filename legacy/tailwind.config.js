module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "custom-light-blue": "#3F5A76",
      "custom-blue": "#163942",
      "custom-dark-blue": "#06202A",
      "custom-purple": "#76498F",
      "custom-dark-purple": "#312035",
    }),
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
