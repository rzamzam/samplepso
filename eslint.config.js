// eslint.config.js
import eslintRecommended from 'eslint:recommended';

export default [
  {
    languageOptions: {
      globals: {
        browser: 'readonly', // or 'writable' if you want to modify it
        es2021: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
      },
    },
    extends: [eslintRecommended], // Including the recommended config directly
    rules: {
      // Add your custom rules here
    },
  },
];
