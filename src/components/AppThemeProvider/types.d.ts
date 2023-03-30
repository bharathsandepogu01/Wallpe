import {PropsWithChildren} from 'react';
import {IStylesConfig} from '@styles/types';

export type AppTheme = 'dark' | 'light';

export interface IAppThemeProviderProps extends PropsWithChildren {
  theme?: AppTheme;
}

export interface IAppThemeContextType {
  appTheme: AppTheme;
  setAppTheme: (appTheme: AppTheme) => void;
  stylesConfig: IStylesConfig;
}
