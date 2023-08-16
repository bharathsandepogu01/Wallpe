import {StyleSheet} from 'react-native';
import IColorsConfig from '@styles/colors/types';
import {getDP} from '@styles/common';
import appSpacingConfig from '@styles/spacing';

export default function getImageDetailsThemeStyles(
  colorsConfig: IColorsConfig,
) {
  return StyleSheet.create({
    container: {
      flex: 1,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      overflow: 'hidden',
    },
    imageContainer: {
      height: '100%',
      width: '100%',
    },
    backButton: {
      position: 'absolute',
    },
    infoContainer: {
      position: 'absolute',
      width: '90%',
      alignSelf: 'center',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      gap: getDP(64),
      marginBottom: getDP(48),
    },
    setAsWallpaperContainer: {
      height: '100%',
      borderRadius: 25,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loaderContainer: {
      position: 'absolute',
      alignSelf: 'center',
      backgroundColor: 'rgba(0,0,0,0.75)',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      margin: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    userDetailsContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: getDP(8),
      alignSelf: 'center',
      backgroundColor: colorsConfig.backgroundColor,
      padding: appSpacingConfig.padding8,
      paddingRight: appSpacingConfig.padding12,
      borderRadius: 5,
      position: 'absolute',
      bottom: getDP(160),
    },
    userInfoContainer: {
      maxWidth: '90%',
    },
    userImage: {
      height: getDP(60),
      width: getDP(60),
    },
    wallpaperAlertContainer: {
      display: 'flex',
      alignSelf: 'center',
      padding: appSpacingConfig.padding12,
      paddingTop: appSpacingConfig.padding8,
      borderRadius: 5,
      position: 'absolute',
      bottom: getDP(160),
      gap: getDP(8),
      backgroundColor: colorsConfig.backgroundColorLight,
    },
    wallpaperAlertActions: {
      backgroundColor: colorsConfig.backgroundColor,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 5,
    },
    wallpaperAlertIcons: {
      height: getDP(45),
      width: getDP(45),
    },
  });
}
