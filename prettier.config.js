/** @type {import("prettier").Config} */
const config = {
  plugins: ["prettier-plugin-astro"],
  singleQuote: false,
  trailingComma: "none",
  arrowParens: "avoid",
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro"
      }
    }
  ]
};

export default config;
