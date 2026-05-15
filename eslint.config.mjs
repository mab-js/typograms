import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["src/**/*.ts", "scripts/**/*.ts"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: { ...globals.node, ...globals.browser },
    },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      // Demoted during the rename pivot: src/ files carry @ts-nocheck and
      // upstream-as-shipped require/var/dead-branch shapes. The typing pass
      // (Commit 3) removes the pragmas and re-promotes these rules.
      "@typescript-eslint/ban-ts-comment": ["error", { "ts-nocheck": false }],
      "@typescript-eslint/no-require-imports": "warn",
      "no-var": "warn",
      "no-unreachable": "warn",
      "no-empty": "warn",
    },
  },
  {
    files: ["tests/**/*.ts"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: { ...globals.node, ...globals.browser },
    },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/ban-ts-comment": ["error", { "ts-nocheck": false }],
      // Demoted to match the src/ policy: upstream test code has an empty
      // for-loop body. The typing pass deletes it.
      "no-empty": "warn",
    },
  },
  {
    ignores: ["dist/", "docs/typograms.js", "node_modules/"],
  }
);
