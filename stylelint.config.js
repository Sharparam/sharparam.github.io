/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard"],
  rules: {
    "comment-empty-line-before": false,
    "font-family-no-duplicate-names": [
      true,
      { ignoreFontFamilyNames: ["monospace"] }
    ]
  }
};
