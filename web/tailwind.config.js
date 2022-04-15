module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        bonVoyage: ["Bon Voyage", "cursive"],
        bosque: ["BOSQUE", "cursive"],
        barcode: ["Libre Barcode 39", "cursive"],
      },
    },
  },
  plugins: [require("daisyui"), require('tailwind-scrollbar'),],
}
