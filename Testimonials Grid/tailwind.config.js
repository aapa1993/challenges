/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow Semi Condensed", "sans-serif"],
      },
      fontSize: {
        13: "13px",
      },
      backgroundColor: {
        custom: "hsl(263, 55%, 52%)",
        custom1: "hsl(217, 19%, 35%)",
        custom2: "hsl(219, 29%, 14%)",
        custom3: "#efef",
      },
      textColor: {
        custom: "hsl(0, 0%, 81%)",
        custom1: "hsl(210, 46%, 95%)",
        custom2: "hsl(217, 19%, 35%)",
      },
      width: {
        1000: "1200px",
      },
      height: {
        500: "500px"
      },
      screens: {
        custom: "375px",
      },
      gridTemplateColumns: {
        custom: "repeat(4,1fr)",
      },
      gridTemplateRows: {
        custom: "repeat(2,1fr)",
      },
      screens: {
        custom: "375px"
      }
    },
  },
  plugins: [],
};
