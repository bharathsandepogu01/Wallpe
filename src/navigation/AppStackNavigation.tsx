import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '@screens/Splash';
import TabNavigation from './TabNavigation';
import {
  COLLECTION_IMAGES_SCREEN,
  HOME_TAB_SCREEN,
  IMAGE_DETAILS_SCREEN,
  SEARCH_RESULTS_SCREEN,
  SPLASH_SCREEN,
} from '@constants/screens';
import ImageDetails from '@screens/ImageDetails';
import {AppStackParamsList} from './types';
import CollectionImages from '@screens/CollectionImages';
import SearchResults from '@screens/SearchResults';

const Stack = createStackNavigator<AppStackParamsList>();

function AppStackNavigation(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SPLASH_SCREEN} component={Splash} />
      <Stack.Screen name={HOME_TAB_SCREEN} component={TabNavigation} />
      <Stack.Screen name={IMAGE_DETAILS_SCREEN} component={ImageDetails} />
      <Stack.Screen
        name={COLLECTION_IMAGES_SCREEN}
        component={CollectionImages}
      />
      <Stack.Screen name={SEARCH_RESULTS_SCREEN} component={SearchResults}/>
    </Stack.Navigator>
  );
}

export default AppStackNavigation;
