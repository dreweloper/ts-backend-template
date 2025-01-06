import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import jest from "eslint-plugin-jest";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ["dist", "node_modules"],
  },
  { files: ["src/**/*.{js,mjs,cjs,ts}", "__tests__/**/*.{js,mjs,cjs,ts}"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.node } },
  // JavaScript
  pluginJs.configs.recommended,
  // TypeScript
  ...tseslint.configs.recommended,
  // Jest
  {
    files: ["__tests__/**/*.{js,mjs,cjs,ts}"],
    ...jest.configs["flat/recommended"],
    rules: {
      ...jest.configs["flat/recommended"].rules,
      "jest/prefer-expect-assertions": "off",
    },
  },
  // Prettier
  eslintPluginPrettierRecommended,
];
