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
      dotShadowPurple:
        "0px 0px 55px 20px #A93BCF, 0 2px 4px -1px rgba(35, 63, 146, 0.8)",
      dotShadowBlue2:
        "0px 0px 30px 25px rgba(55, 124, 236, .5), 0 2px 4px -1px rgba(35, 63, 146, 0.8)",
      dotShadowCyan:
        "0px 0px 60px 15px #20FF87, 0 2px 4px -1px rgba(35, 63, 146, 0.8)",


      aboutLogoShadowBlue:
        "0px 0px 14px 7px rgba(55, 124, 236, .5), 0 2px 4px -1px rgba(35, 63, 146, 0.8)",
      mobileAboutShadow:
        "0px 0px 9px 3px rgba(55, 124, 236, .5), 0 2px 4px -1px rgba(35, 63, 146, 0.8)",
      aboutContainerShadow: "0px 0px 5px 5px rgba(132, 89, 226, 0.4)",
      blue: "1px 1px 20px 7px rgba(59, 171, 207, 0.2), -1px -1px 20px 1px rgba(35, 63, 146, 0.8)",
      blue2: " 4px 4px 100px -20px rgba(130, 98, 245, 0.8)",
      blue3: " 6px 6px 90px -10px rgba(130, 98, 245, 0.8)",
    },
    screens: {
      smm: "400px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1200px",
      "2xl": "1440px",
      "3xl": "1750px",
      "4xl": "1990px",
    },
    extend: {
      borderRadius: {
        imageradius: "15px",
      },
      lineHeight: {
        '1': '5px',
        '2': '8px',
        // '12': '3rem',
      },
      keyframes: {
        fadeinout: {
          "0%": {
            opacity: "1",
          },
          "1%": {
            opacity: "0",
          },
        },
      },
      animation: {
        fadeinout: "fadeinout 10s",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
