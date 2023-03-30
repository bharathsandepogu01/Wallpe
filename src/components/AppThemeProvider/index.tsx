import React, {createContext, useState, useEffect, useMemo} from 'react';
import {DEFAULT_APP_THEME} from '@constants/appTheme';
import {IAppThemeProviderProps, AppTheme, IAppThemeContextType} from './types';
import {getStylesConfig} from '@styles/common.styles';

export const AppThemeContext = createContext<IAppThemeContextType>({
  appTheme: DEFAULT_APP_THEME,
  setAppTheme: () => {},
  stylesConfig: getStylesConfig(DEFAULT_APP_THEME),
});

export default function AppThemeProvider(
  props: IAppThemeProviderProps,
): JSX.Element {
  const [appTheme, setAppTheme] = useState<AppTheme>(DEFAULT_APP_THEME);

  useEffect(() => {
    if (!props.theme) return;
    setAppTheme(props.theme);
  }, [props.theme]);

  const value: IAppThemeContextType = useMemo(
    () => ({appTheme, setAppTheme, stylesConfig: getStylesConfig(appTheme)}),
    [appTheme],
  );

  return (
    <AppThemeContext.Provider value={value}>
      {props.children}
    </AppThemeContext.Provider>
  );
}
