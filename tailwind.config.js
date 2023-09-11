/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      textShadow: {
        glow: "0 0 5px #9E9E9E, 0 0 15px #9E9E9E",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
