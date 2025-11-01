import nextEslintConfig from '@next/eslint-plugin-next';

export default [
  {
    plugins: {
      '@next/next': nextEslintConfig,
    },
    extends: [
      'eslint:recommended',
      'plugin:@next/next/recommended',
    ],
  },
];
