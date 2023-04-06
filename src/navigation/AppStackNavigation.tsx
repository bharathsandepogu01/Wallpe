import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '@screens/Splash';
import TabNavigation from './TabNavigation';
import {HOME_TAB_SCREEN, SPLASH_SCREEN} from '@constants/screens';
import {AppStackParamsList} from './types';

const Stack = createStackNavigator<AppStackParamsList>();

function AppStackNavigation(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SPLASH_SCREEN} component={Splash} />
      <Stack.Screen name={HOME_TAB_SCREEN} component={TabNavigation} />
    </Stack.Navigator>
  );
}

export default AppStackNavigation;
