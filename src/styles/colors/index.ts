import {AppTheme} from '@components/AppThemeProvider/types';
import IColorsConfig from './types';

const darkThemeColors: IColorsConfig = {
  primary: '#df1f5ad9',
  primaryDark: '#df1f5a',
  backgroundColor: '#000000',
  textPrimaryColor: '#ffffff',
  textSecondaryColor: '#bcbcbc',
  textTertiaryColor: '#b7b7b7b3',
  borderColor: '#ffffff80',
  inActiveColor: '#ffffff80',
  dark: '#000000',
  error: '#ff3333',
  backgroundColorLight: '#2D2727',
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
  dark: '#000000',
  error: '#ff3333',
  backgroundColorLight: '#f2f0f0',
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
