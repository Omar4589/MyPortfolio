/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      textShadow: {
        glow: "0 0 5px #9E9E9E, 0 0 15px #9E9E9E",
      },
      rotate: {
        540: "540deg",
      },
      translate: {
        custom: "68.5%",
      },
      fontSize: {
        xxs: "10px",
      },
      fontFamily: {
        yellowtail: ["Yellowtail Regular"],
        soisBold: ["SoinSansPro-Bold"],
        oswald: ["Oswald"],
        robotoItalic: ["Roboto Bold Italic"],
        robotoM: ["Roboto Medium"],
        roboto: ["Roboto Regular"],
        robotoLight: ["Roboto Light"],
        robotoBlack: ["Roboto Black"],
        supernatural: ["Supernatural Knight"],
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
