const prettier = require('./.prettierrc.json')

module.exports = {
  env: {
    es2021: true
  },
  extends: ['standard', 'plugin:react/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  globals: {
    JSX: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        ...prettier
      }
    ]
  }
}
