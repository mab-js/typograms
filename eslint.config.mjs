import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["src/**/*.js", "scripts/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",
      globals: { ...globals.node, ...globals.browser },
    },
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      // Demoted to warnings: upstream-as-shipped code carries dead branches
      // and empty catch blocks. Phase 3+ may rewrite; not churning now.
      "no-unreachable": "warn",
      "no-empty": "warn",
    },
  },
  {
    files: ["tests/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: { ...globals.node, ...globals.browser },
    },
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      // Demoted to match the src/ policy: upstream test code has an empty
      // for-loop body. Phase 3+ may rewrite; not churning now.
      "no-empty": "warn",
    },
  },
  {
    ignores: ["dist/", "docs/typograms.js", "node_modules/"],
  },
];
