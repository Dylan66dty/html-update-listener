module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['@dylan66ty/eslint-config-typescript', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        usePrettierrc: true
      }
    ]
  }
}