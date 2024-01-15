/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard"],
  rules: {
    "font-family-no-duplicate-names": [
      true,
      { ignoreFontFamilyNames: ["monospace"] }
    ]
  }
};
