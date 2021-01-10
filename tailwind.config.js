const colors = require("tailwindcss/colors");
module.exports = {
  purge: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./svg/**/*.tsx",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          from: { color: colors.coolGray[800] },
          to: { color: colors.blue[800] },
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease-in-out",
      },
    },
  },
  variants: {},
  plugins: [],
};
