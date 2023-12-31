module.exports = {
  root: true,
  extends: [
    '@nuxt/eslint-config',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
  ],
  rules: {
    'vue/attributes-order': [
      'error',
      {
        alphabetical: true,
      },
    ],
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index', 'Index', 'default', 'Navbar', 'Footer'],
      },
    ],
  },
};
