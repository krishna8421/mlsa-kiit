const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow: {
      magenta: "0 0 25px 10px #00a6ff",
      dotShadowBlue:
        "0px 0px 40px 20px rgba(55, 124, 236, .5), 0 2px 4px -1px rgba(35, 63, 146, 0.8)",
      aboutLogoShadowBlue:
        "0px 0px 14px 7px rgba(55, 124, 236, .5), 0 2px 4px -1px rgba(35, 63, 146, 0.8)",
      aboutContainerShadow:
        "0px 0px 50px 15px rgba(160,32,240,0.2), 0 0px 60px 30px rgba(55,124,236,0.1)",
      blue: 
        "3px 3px 99px 9px rgba(59, 171, 207, 0.2), -3px -3px 28px 1px rgba(35, 63, 146, 0.8)",
      blue2: 
        " 10px 10px 200px -20px rgba(130, 98, 245, 0.8)",
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};
