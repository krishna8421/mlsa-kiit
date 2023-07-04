const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
// <<<<<<< HEAD
   
//     extend: {boxShadow: {
//       'magenta': '0 0 25px 10px #00a6ff',
//     },},
//     backgroundImage: {
//       "gradient-blue": "linear-gradient(98.63deg, #3B61CF 3.76%, #3BABCF 114.18%)",
//       "gradient-purple": "linear-gradient(98.63deg, #a03bcf 3.76%, #6f5bff 114.18%)",
//       "gradient-blue-reverse":
//         "linear-gradient(98.63deg, #a6e2f6 3.76%, #44c9f5 35.76%, #5e83f2 114.18%)",
//       testCol: "rgba(37, 37, 37, 0.50)",
//     },
//     boxShadow: {
//       blue: "0px 0px 4px 4px rgba(59, 171, 207, 0.2), 0 2px 4px -1px rgba(35, 63, 146, 0.8)",
//       gray: "0px 1px 10px rgba(0, 0, 0, 0.15), 2px 2px 2px -1px rgba(125, 125, 125, 0.1)",
//     },
// =======
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
// >>>>>>> b2b7caee71d5078d3f4c57ff0a0ad45539e8dc11
  },
  darkMode: "class",
  plugins: [nextui()],
};
