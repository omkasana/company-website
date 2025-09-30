import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      // Suppress unused variables warnings globally
      "@typescript-eslint/no-unused-vars": "off",

      // Suppress explicit any warnings globally
      "@typescript-eslint/no-explicit-any": "off",

      // Suppress unescaped entities warnings
      "react/no-unescaped-entities": "off",

      // Suppress missing key in iterators
      "react/jsx-key": "off",

      // Suppress react-hooks rules if necessary
      "react-hooks/rules-of-hooks": "off",
      "react-hooks/exhaustive-deps": "off",

      // Optionally suppress <img> usage warning (Next.js)
      "@next/next/no-img-element": "off",
    },
  },
];

export default eslintConfig;
