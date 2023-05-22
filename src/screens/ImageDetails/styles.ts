import {StyleSheet} from 'react-native';
import IColorsConfig from '@styles/colors/types';
import {getDP} from '@styles/common';

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
  });
}
