import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReactHooks from "eslint-plugin-react-hooks";
import json from "@eslint/json";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // JS/TS files (non-JSX)
  {
    ignores: ["package.json", "package-lock.json"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },

  // TypeScript recommended rules
  tseslint.configs.recommended,

  // React + Hooks rules applied ONLY to JSX/TSX files
  {
    files: ["**/*.{jsx,tsx}"],
    plugins: { "react-hooks": pluginReactHooks },
    languageOptions: { globals: globals.browser },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
    },
    settings: { react: { version: "detect" } },
  },

  // JSON files
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },
]);
