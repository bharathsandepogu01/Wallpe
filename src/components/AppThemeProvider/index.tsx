import React, {createContext, useState, useEffect, useMemo} from 'react';
import {StatusBar} from 'react-native';
import {useColorScheme} from 'react-native';
import {DEFAULT_APP_THEME} from '@constants/appTheme';
import {IAppThemeProviderProps, AppTheme, IAppThemeContextType} from './types';
import getAppThemeColorsConfig from '@styles/colors';
import {getData} from '@utils/asyncStorage';
import {USER_APP_THEME_PREFERENCE} from '@constants/asyncStorage';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

export const AppThemeContext = createContext<IAppThemeContextType>({
  appTheme: DEFAULT_APP_THEME,
  setAppTheme: () => {},
  stylesConfig: getAppThemeColorsConfig(DEFAULT_APP_THEME),
});

export default function AppThemeProvider(
  props: IAppThemeProviderProps,
): JSX.Element {
  const [appTheme, setAppTheme] = useState<AppTheme>(DEFAULT_APP_THEME);
  const systemColorScheme = useColorScheme();

  useEffect(() => {
    async function checkUserPreferenceColorScheme() {
      try {
        // check in local storage
        const res = await getData(USER_APP_THEME_PREFERENCE);
        if (res === 'dark' || res === 'light') {
          setAppTheme(res);
          return;
        }
        // check system color scheme
        systemColorScheme && setAppTheme(systemColorScheme);
      } catch {
        systemColorScheme && setAppTheme(systemColorScheme);
      }
    }
    checkUserPreferenceColorScheme();
  }, [systemColorScheme]);

  const value: IAppThemeContextType = useMemo(
    () => ({
      appTheme,
      setAppTheme,
      stylesConfig: getAppThemeColorsConfig(appTheme),
    }),
    [appTheme],
  );

  return (
    <AppThemeContext.Provider value={value}>
      <StatusBar
        backgroundColor={value.stylesConfig.backgroundColor}
        barStyle={appTheme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <SafeAreaProvider>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: value.stylesConfig.backgroundColor,
          }}>
          {props.children}
        </SafeAreaView>
      </SafeAreaProvider>
    </AppThemeContext.Provider>
  );
}
