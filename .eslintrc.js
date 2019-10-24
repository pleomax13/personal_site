module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  "extends": [
    "@nuxtjs"
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'warn',
    'import/order': 'off'
  }
};
