/** @type {import('stylelint').Config} */
export default {
  extends: [
    // "stylelint-config-standard",
    // "stylelint-config-standard-scss",
    "stylelint-config-html"
  ],
  rules: {
    "comment-empty-line-before": null,
    "font-family-no-duplicate-names": [
      true,
      { ignoreFontFamilyNames: ["monospace"] }
    ]
  }
};
