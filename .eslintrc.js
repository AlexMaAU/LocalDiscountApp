module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  extends: ['airbnb', 'airbnb/hooks', 'plugin:@typescript-eslint/recommended', "plugin:prettier/recommended"],
  plugins: ['@typescript-eslint'],
  rules: {
    // 可以在这里覆盖和添加其他规则
    "prettier/prettier": "error"
  },
};
