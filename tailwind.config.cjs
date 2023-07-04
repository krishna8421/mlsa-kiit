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
        "0px 0px 30px 10px rgba(132, 89, 226, 0.4)",
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};
