module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['react-app', 'prettier', 'plugin:react/recommended', 'standard'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    semi: [2, 'always'],
    'comma-dangle': ['error', 'only-multiline'],
    'space-before-function-paren': [2, 'never'],
    'react/react-in-jsx-scope': 'off',
    'no-useless-escape': 'never',
  },
};
