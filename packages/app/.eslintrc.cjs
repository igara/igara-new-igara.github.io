/** @type {import('eslint').Linter.Config} */
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:@stylistic/recommended-extends', 'next', 'next/core-web-vitals', 'plugin:tailwindcss/recommended', 'plugin:storybook/recommended'],
  rules: {
    '@stylistic/semi': [
      'error',
      'always',
    ],
    '@stylistic/indent': [
      'error',
      2,
    ],
    '@stylistic/linebreak-style': [
      'error',
      'unix',
    ],
    '@stylistic/comma-dangle': [
      'error',
      'always-multiline',
    ],
    '@stylistic/array-bracket-newline': [
      'error',
      'always',
    ],
    '@stylistic/array-element-newline': [
      'error',
      'always',
    ],
  },
};
