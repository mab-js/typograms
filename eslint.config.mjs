import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["src/**/*.js", "tests/**/*.js", "scripts/**/*.js"],
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
      globals: { ...globals.mocha },
    },
  },
  {
    ignores: ["dist/", "docs/typograms.js", "node_modules/"],
  },
];
