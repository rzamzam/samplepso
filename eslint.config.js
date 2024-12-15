// eslint.config.js
module.exports = {
  languageOptions: {
    globals: {
      browser: "readonly", // or "writable" if you want to modify it
      es2021: "readonly",
    },
    parserOptions: {
      ecmaVersion: 12,
      sourceType: "module",
    },
  },
  extends: ["eslint:recommended"],
  rules: {
    // Add your custom rules here
  },
};
