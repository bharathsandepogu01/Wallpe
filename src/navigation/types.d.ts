import {StackNavigationProp} from '@react-navigation/stack';
import {
  COLLECTIONS_SCREEN,
  COLLECTION_IMAGES_SCREEN,
  HOME_SCREEN,
  HOME_TAB_SCREEN,
  IMAGE_DETAILS_SCREEN,
  SEARCH_SCREEN,
  SETTINGS_SCREEN,
  SPLASH_SCREEN,
  SEARCH_RESULTS_SCREEN
} from '@constants/screens';
import {
  CompositeScreenProps,
  CompositeNavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {
  BottomTabScreenProps,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import {StackScreenProps, StackNavigationProp} from '@react-navigation/stack';

// route name mappings to its respective params

export type AppStackParamsList = {
  [SPLASH_SCREEN]: undefined;
  [HOME_TAB_SCREEN]: NavigatorScreenParams<BottomTabParamsList>; // for nested navigators
  [IMAGE_DETAILS_SCREEN]: {
    imageId: string;
    smallImageUrl: string;
    regularImageUrl: string;
    fullImageUrl: string;
  };
  [COLLECTION_IMAGES_SCREEN]: {
    collectionId: string;
    collectionTitle: string;
  };
  [SEARCH_RESULTS_SCREEN]: {
    searchText: string;
  }
};

export type BottomTabParamsList = {
  [HOME_SCREEN]: undefined;
  [SEARCH_SCREEN]: undefined;
  [COLLECTIONS_SCREEN]: undefined;
  [SETTINGS_SCREEN]: undefined;
};

export type AppStackScreenProps<T extends keyof AppStackParamsList> =
  StackScreenProps<AppStackParamsList, T>;

export type AppBottomTabScreenProps<T extends keyof BottomTabParamsList> =
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabParamsList, T>, // primary navigation navigator which owns the screen
    StackScreenProps<AppStackParamsList> // secondary navigation parent navigator
  >;

export type AppBottomTabScreenNavigationProp<
  T extends keyof BottomTabParamsList,
> = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabParamsList, T>, // primary navigation navigator which owns the screen
  StackNavigationProp<AppStackParamsList> // secondary navigation parent navigator
>;
