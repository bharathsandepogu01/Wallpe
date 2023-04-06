import {PropsWithChildren} from 'react';
import IColorsConfig from '@styles/colors/types';

export type AppTheme = 'dark' | 'light';

export interface IAppThemeProviderProps extends PropsWithChildren {}

export interface IAppThemeContextType {
  appTheme: AppTheme;
  setAppTheme: (appTheme: AppTheme) => void;
  stylesConfig: IColorsConfig;
}
