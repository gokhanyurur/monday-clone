module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  rules: {
    "vue/no-unused-vars": "error",
    "vue/singleline-html-element-content-newline": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/multi-word-component-names": 0,
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        registeredComponentsOnly: false,
        ignores: [],
      },
    ],
    "vue/max-attributes-per-line": [
      2,
      {
        singleline: 20,
      },
    ],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
  globals: {
    $nuxt: true,
  },
  plugins: ["vue", "@typescript-eslint"],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    requireConfigFile: false,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/recommended",
    "@nuxtjs",
    "plugin:nuxt/recommended",
    "plugin:prettier/recommended",
  ],
};
