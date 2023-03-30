import {AppTheme} from '@components/AppThemeProvider/types';
import {IColorsConfig, IStylesConfig, ITypographyConfig} from './types';

const darkThemeColors: IColorsConfig = {
  primary: '#df1f5ad9',
  primaryDark: '#df1f5a',
  background: '#000000',
  textPrimary: '#ffffff',
  textSecondary: '#bcbcbc',
  textTertiary: '#b7b7b7',
  borderColor: '#404040',
};

const lightThemeColors: IColorsConfig = {
  primary: '#df1f5ad9',
  primaryDark: '#df1f5a',
  background: '#ffffff',
  textPrimary: '#131521',
  textSecondary: '#131521b3',
  textTertiary: '#1315218c',
  borderColor: '#000000',
};

const typography: ITypographyConfig = {
  fontFamily: 'Roboto',
  fontSize: 16,
  fontSizeLarge: 24,
  fontSizeMedium: 12,
  fontSizeSmall: 8,
  lineHeight: 24,
};

export const getStylesConfig = (theme: AppTheme): IStylesConfig => {
  switch (theme) {
    case 'dark':
      return {...darkThemeColors, ...typography};
    case 'light':
      return {...lightThemeColors, ...typography};
    default:
      return {...darkThemeColors, ...typography};
  }
};
