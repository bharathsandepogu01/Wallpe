import React, {useContext} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {AppThemeContext} from '@components/AppThemeProvider';
import AppStackNavigation from './AppStackNavigation';

function Navigation(): JSX.Element {
  const {appTheme, stylesConfig} = useContext(AppThemeContext);

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        dark: appTheme === 'dark',
        colors: {
          ...DefaultTheme.colors,
          background: stylesConfig.backgroundColor,
          primary: stylesConfig.primary,
          text: stylesConfig.textPrimaryColor,
        },
      }}>
      <AppStackNavigation />
    </NavigationContainer>
  );
}

export default Navigation;
