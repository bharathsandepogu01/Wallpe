import React, {useContext} from 'react';
import {View, ScrollView} from 'react-native';
import {AppThemeContext} from '@components/AppThemeProvider';
import PText from '@components/PText';
import PIcon from '@components/PIcon';
import PToggle from '@components/PToggle';
import {AppTheme} from '@components/AppThemeProvider/types';
import {storeData} from '@utils/asyncStorage';
import {USER_APP_THEME_PREFERENCE} from '@constants/asyncStorage';
import DarkModeIcon from '@assets/icons/dark-mode-icon.svg';
import WifiIcon from '@assets/icons/wifi-icon.svg';
import DownloadIcon from '@assets/icons/download-icon.svg';
import MobileScreenIcon from '@assets/icons/mobile-screen-icon.svg';
import StarIcon from '@assets/icons/star-icon.svg';
import getSettingsThemeStyles from './styles';

function Settings(): JSX.Element {
  const {setAppTheme, appTheme, stylesConfig} = useContext(AppThemeContext);

  const storeUserPreferredAppTheme = async (theme: AppTheme) => {
    await storeData(USER_APP_THEME_PREFERENCE, theme);
  };

  const styles = getSettingsThemeStyles(stylesConfig);

  return (
    <ScrollView>
      <View style={styles.commonHeaderStyles}>
        <PText small bold secondaryTextColor>
          General
        </PText>
      </View>
      <View style={styles.commonHeaderStyles}>
        <PText small bold secondaryTextColor>
          Preferences
        </PText>
      </View>
      <View style={styles.commonContentContainer}>
        <View style={styles.commonIconContainer}>
          <PIcon icon={DarkModeIcon} />
          <PText small>Dark Mode</PText>
        </View>
        <PToggle
          enabled={appTheme === 'dark'}
          enableFn={() => {
            setAppTheme('dark');
            storeUserPreferredAppTheme('dark');
          }}
          disableFn={() => {
            setAppTheme('light');
            storeUserPreferredAppTheme('light');
          }}
        />
      </View>
      <View style={styles.commonContentContainer}>
        <View style={styles.commonIconContainer}>
          <PIcon icon={WifiIcon} />
          <PText small>Only Download via Wi-Fi</PText>
        </View>
        <PToggle />
      </View>
      <View style={styles.commonContentContainer}>
        <View style={styles.commonIconContainer}>
          <PIcon icon={DownloadIcon} />
          <PText small>Long Press to Download</PText>
        </View>
        <PToggle />
      </View>
      <View style={styles.commonHeaderStyles}>
        <PText small bold secondaryTextColor>
          About
        </PText>
      </View>
      <View style={styles.commonContentContainer}>
        <View style={styles.commonIconContainer}>
          <PIcon icon={StarIcon} />
          <PText small>Rate App</PText>
        </View>
      </View>
      <View style={styles.commonContentContainer}>
        <View style={styles.commonIconContainer}>
          <PIcon icon={MobileScreenIcon} />
          <PText small>App Version</PText>
        </View>
        <PText small tertiaryTextColor>
          1.2.0
        </PText>
      </View>
    </ScrollView>
  );
}

export default Settings;
