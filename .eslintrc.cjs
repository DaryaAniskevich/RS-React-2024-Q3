module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
    'airbnb',
    'airbnb-typescript',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.app.json',
  },
  plugins: ['@typescript-eslint', 'react', 'react-refresh', 'react-compiler'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/prefer-stateless-function': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-compiler/react-compiler': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
  },
};
