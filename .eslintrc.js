/**
 * @type {import('@types/eslint').Linter.BaseConfig}
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  extends: ["@remix-run/eslint-config", "@remix-run/eslint-config/node", "@remix-run/eslint-config/jest-testing-library", "prettier"],
  rules: {
    "no-explicit-any": ["off"],
    "jsx-a11y/aria-props": ["off"],
    "react-hooks/exhaustive-deps": ["off"],
  },
  // We're using vitest which has a very similar API to jest
  // (so the linting plugins work nicely), but we have to
  // set the jest version explicitly.
  settings: {
    jest: {
      version: 27,
    },
  },
}
