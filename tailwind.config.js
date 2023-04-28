/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: "#111111",
        darkGreyApple: "#8d8d8e",
        subtitleWhite: "#ebebec",
        blueApple: "#0271e2",
        blackApple: "#000000",
        whiteApple: "#ffffff",
        redApple: "#cc2126",
        subtitleBlack: "#1d1d1f",
        oceanBlueApple: "#96ddfd",
        gradientLikeBackColor: "#f5f5f7",
        lightBlack: "#1d1d1f",
      },
      fontFamily: {
        sfTextPro: ["SF Pro Text"],
      },
    },
  },
  plugins: [],
};
