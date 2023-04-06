import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '@screens/Home';
import Settings from '@screens/Settings';
import Search from '@screens/Search';
import Collections from '@screens/Collections';
import {AppThemeContext} from '@components/AppThemeProvider';
import {
  COLLECTIONS_SCREEN,
  HOME_SCREEN,
  SEARCH_SCREEN,
  SETTINGS_SCREEN,
} from '@constants/screens';
import TabsCustomButton from '@components/TabsCustomButton';
import HomeIcon from '@assets/icons/home-icon.svg';
import SettingsIcon from '@assets/icons/settings-icon.svg';
import SearchIcon from '@assets/icons/search-icon.svg';
import CollectionsIcon from '@assets/icons/collections-icon.svg';
import {getDP} from '@styles/common';
import PText from '@components/PText';
import appTypography from '@styles/typography';

const Tab = createBottomTabNavigator();

//TODO use array for tab screens to remove repetitive code

function TabNavigation(): JSX.Element {
  const {stylesConfig} = useContext(AppThemeContext);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: stylesConfig.backgroundColor,
          borderTopColor: stylesConfig.borderColor,
          height: getDP(140),
          borderTopWidth: 0.5,
        },
        headerStyle: {
          backgroundColor: stylesConfig.backgroundColor,
          borderBottomColor: stylesConfig.borderColor,
          height: getDP(140),
          borderBottomWidth: 0.5,
        },
        headerTitleStyle: {
          fontFamily: appTypography.fontFamilyMedium,
          fontSize: appTypography.fontSize,
        },
        headerShown: true,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name={HOME_SCREEN}
        component={Home}
        options={{
          tabBarButton: props => (
            <TabsCustomButton icon={HomeIcon} {...props} />
          ),
        }}
      />
      <Tab.Screen
        name={SEARCH_SCREEN}
        component={Search}
        options={{
          headerShown: false,
          tabBarButton: props => (
            <TabsCustomButton icon={SearchIcon} {...props} />
          ),
        }}
      />
      <Tab.Screen
        name={COLLECTIONS_SCREEN}
        component={Collections}
        options={{
          tabBarButton: props => (
            <TabsCustomButton icon={CollectionsIcon} {...props} />
          ),
        }}
      />
      <Tab.Screen
        name={SETTINGS_SCREEN}
        component={Settings}
        options={{
          tabBarButton: props => (
            <TabsCustomButton icon={SettingsIcon} {...props} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
