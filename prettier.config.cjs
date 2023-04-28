/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  semi: true,
  tabWidth: 2,
  printWidth: 100,
  singleQuote: false,
  trailingComma: "all",
};
