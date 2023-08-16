import React, {useContext} from 'react';
import {View, ScrollView, Linking, Pressable, Share} from 'react-native';
import {AppThemeContext} from '@components/AppThemeProvider';
import PText from '@components/PText';
import PIcon from '@components/PIcon';
import PToggle from '@components/PToggle';
import {AppTheme} from '@components/AppThemeProvider/types';
import {storeData} from '@utils/asyncStorage';
import {USER_APP_THEME_PREFERENCE} from '@constants/asyncStorage';
import DarkModeIcon from '@assets/icons/dark-mode-icon.svg';
import UnLockIcon from '@assets/icons/unlock-icon.svg';
import MobileScreenIcon from '@assets/icons/mobile-screen-icon.svg';
import StarIcon from '@assets/icons/star-icon.svg';
import ShareIcon from '@assets/icons/share-icon.svg';
import getSettingsThemeStyles from './styles';
import {APP_PLAY_STORE_URL} from '@constants/appTheme';

function Settings(): JSX.Element {
  const {setAppTheme, appTheme, stylesConfig} = useContext(AppThemeContext);

  const storeUserPreferredAppTheme = async (theme: AppTheme) => {
    await storeData(USER_APP_THEME_PREFERENCE, theme);
  };

  const styles = getSettingsThemeStyles(stylesConfig);

  const handleAppPermissions = () => {
    Linking.openSettings();
  };

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: `Hey checkout this awesome app...😮\n${APP_PLAY_STORE_URL}`,
        title: 'Papier',
      });

      if (result.action === Share.sharedAction) {
        console.log('shared');
      } else if (result.action === Share.dismissedAction) {
        console.log('dismissed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.commonHeaderStyles}>
        <PText bold secondaryTextColor>
          General
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
      <Pressable
        onPress={handleAppPermissions}
        style={styles.commonContentContainer}>
        <View style={styles.commonIconContainer}>
          <PIcon icon={UnLockIcon} />
          <PText small>App Permissions</PText>
        </View>
      </Pressable>
      <View style={styles.commonHeaderStyles}>
        <PText bold secondaryTextColor>
          About
        </PText>
      </View>
      <Pressable
        onPress={() => handleShare()}
        style={styles.commonContentContainer}>
        <View style={styles.commonIconContainer}>
          <PIcon icon={ShareIcon} />
          <PText small>Share App</PText>
        </View>
      </Pressable>
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
