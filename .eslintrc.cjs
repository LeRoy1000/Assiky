module.exports = {
  extends: ['@nuxtjs/eslint-config-typescript', 'prettier', 'plugin:prettier/recommended', 'plugin:storybook/recommended'],
  plugins: ['prettier'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'no-console': 'off',
  },
};
