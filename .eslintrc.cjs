module.exports = {
  env: {browser: true, es2020: true, node: true},
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    "plugin:effector/recommended",
    "plugin:effector/scope",
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {ecmaVersion: 'latest', sourceType: 'module'},
  plugins: ['react-refresh', 'jsx-a11y', 'prettier', 'effector'],
  rules: {
    '@typescript-eslint/no-explicit-any':'off',
    'react-refresh/only-export-components': 'warn',
  },
}
