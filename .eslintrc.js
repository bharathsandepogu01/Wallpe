module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': 'off',
  },
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@configs': './src/configs',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@styles': './src/styles',
          '@theme': './src/theme',
          '@utils': './src/utils',
        },
      },
    },
  },
};
