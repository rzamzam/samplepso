// eslint.config.js (CommonJS format)
module.exports = {
  languageOptions: {
    globals: {
      browser: 'readonly',  // Read-only global for browser-related objects
      es2021: 'readonly',   // Enable ES2021 syntax
    },
    parserOptions: {
      ecmaVersion: 12,  // Allows ES2021 features
      sourceType: 'module',  // Use modules (import/export)
    },
  },
  extends: [
    'eslint:recommended',  // Use the recommended set of ESLint rules
  ],
  rules: {
    // Possible Errors
    'no-console': 'warn',  // Warn when console statements are used
    'no-debugger': 'error',  // Throw an error if debugger is used

    // Best Practices
    'eqeqeq': 'error',  // Enforce strict equality (=== instead of ==)
    'curly': ['error', 'all'],  // Require curly braces for all control structures

    // Variables
    'no-unused-vars': 'warn',  // Warn if there are unused variables
    'no-undef': 'error',  // Disallow the use of undeclared variables

    // Stylistic Issues
    'indent': ['error', 2],  // Enforce 2-space indentation
    'quotes': ['error', 'single'],  // Enforce single quotes for strings
    'semi': ['error', 'always'],  // Enforce semicolons at the end of statements

    // ES6
    'no-var': 'error',  // Disallow the use of `var`
    'prefer-const': 'error',  // Prefer `const` over `let` if the variable is never reassigned
  },
};
