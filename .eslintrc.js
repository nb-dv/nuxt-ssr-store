module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  rules: {
    curly: ['error', 'multi'],
    'no-console': 0,
    'vue/multi-word-component-names': 0,
    'comma-dangle': ['error', 'only-multiline']
  }
}
