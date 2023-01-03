module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "767px" },
      md: { min: "768px", max: "991px" },
    },
    extend: {
      colors: {
        cyan_200: "#99dae3",
        black_900: "#000000",
        red_700: "#d53939",
        lime_800: "#859331",
        bluegray_100: "#d9d9d9",
        blue_400: "#3db0e2",
        green_800: "#2c931b",
        purple_500: "#9429b9",
        white_A700: "#ffffff",
      },
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
