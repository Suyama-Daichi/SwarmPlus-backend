module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: ["plugin:@typescript-eslint/recommended"],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    // console.logは警告する
    "no-console": ["warn", { allow: ["warn", "error"] }],
    indent: ["error", 2, { SwitchCase: 1 }],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "never"],
    // React 17に対する設定
    "react/react-in-jsx-scope": "off",
    // カンマの後にスペースを入れる
    "comma-spacing": ["error", { before: false, after: true }],
    // ケツカンマ
    "comma-dangle": [
      "error",
      {
        functions: "never",
        imports: "only-multiline",
        arrays: "only-multiline",
        objects: "only-multiline",
      },
    ],
    // オブジェクトの{}内側にスペースを入れる
    "object-curly-spacing": ["error", "always"],
    // 配列の[]の内側にスペースを入れる
    "array-bracket-spacing": ["error", "never"],
    // 1行あたりの最大文字列長(現在auto fixできない)
    "max-len": [
      "error",
      {
        code: 100,
        ignoreTemplateLiterals: true,
        ignoreStrings: true,
        ignoreUrls: true,
      },
    ],
    // 末尾に半角・全角スペースをつけない
    "no-trailing-spaces": ["error"],
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
    },
  ],
};
