module.exports = {
  env: {
    es2021: true
  },
  extends: ['standard', 'plugin:react/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        quotes: true,
        jsxQuotes: true,
        trailingComma: 'none',
        semi: false,
        endOfLine: 'lf'
      }
    ]
  }
}
