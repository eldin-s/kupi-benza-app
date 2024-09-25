/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#ff4605",
        bgColor: "#0f141e",
        bgShade: "#19212f",
      },
      fontFamily: {
        plight: ["Montserrat-Light", "sans-serif"],
        pregular: ["Montserrat-Regular", "sans-serif"],
        pmedium: ["Montserrat-Medium", "sans-serif"],
        psemibold: ["Montserrat-SemiBold", "sans-serif"],
        pbold: ["Montserrat-Bold", "sans-serif"],
        pblack: ["Montserrat-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
