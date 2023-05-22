import {AppTheme} from '@components/AppThemeProvider/types';
import IColorsConfig from './types';

const commonColors = {
  error: '#ef4444',
  errorLight: '#fee2e2',
  success: '#16a34a',
  successLight: '#dcfce7',
  warning: '#eab308',
  warningLight: '#fef9c3',
  dark: '#000000',
};

const darkThemeColors: IColorsConfig = {
  primary: '#df1f5ad9',
  primaryDark: '#df1f5a',
  backgroundColor: '#000000',
  textPrimaryColor: '#ffffff',
  textSecondaryColor: '#bcbcbc',
  textTertiaryColor: '#b7b7b7b3',
  borderColor: '#ffffff80',
  inActiveColor: '#ffffff80',
  backgroundColorLight: '#2D2727',
  ...commonColors,
};

const lightThemeColors: IColorsConfig = {
  primary: '#df1f5ad9',
  primaryDark: '#df1f5a',
  backgroundColor: '#ffffff',
  textPrimaryColor: '#131521',
  textSecondaryColor: '#131521b3',
  textTertiaryColor: '#1315218c',
  borderColor: '#0000001a',
  inActiveColor: '#13152166',
  backgroundColorLight: '#f2f0f0',
  ...commonColors,
};

const getAppThemeColorsConfig = (theme: AppTheme): IColorsConfig => {
  switch (theme) {
    case 'dark':
      return {...darkThemeColors};
    case 'light':
      return {...lightThemeColors};
    default:
      return {...darkThemeColors};
  }
};

export default getAppThemeColorsConfig;
