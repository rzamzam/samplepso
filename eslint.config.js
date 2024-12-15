// eslint.config.js (Flat config format)
const eslintRecommended = require('eslint/conf/eslint-recommended.js');

module.exports = [
  {
    languageOptions: {
      globals: {
        browser: 'readonly',
        es2021: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
      },
    },
    rules: {
      // Possible Errors
      'no-console': 'warn',
      'no-debugger': 'error',

      // Best Practices
      'eqeqeq': 'error',
      'curly': ['error', 'all'],

      // Variables
      'no-unused-vars': 'warn',
      'no-undef': 'error',

      // Stylistic Issues
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],

      // ES6
      'no-var': 'error',
      'prefer-const': 'error',
    },
  },
  eslintRecommended,  // Add the recommended config directly
];
