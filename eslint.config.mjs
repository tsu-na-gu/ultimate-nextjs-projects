import { dirname } from "path";
import { fileURLToPath } from "url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import love from "eslint-config-love";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  {
    ...love,
    files: ["**/*.js", "**/*.ts", "**/*.tsx"],
  },
];

export default eslintConfig;
