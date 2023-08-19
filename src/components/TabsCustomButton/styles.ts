import {StyleSheet} from 'react-native';
import IColorsConfig from '@styles/colors/types';
import {getDP} from '@styles/common';
import appSpacingConfig from '@styles/spacing';

export default function getThemeStyles(colorsConfig: IColorsConfig) {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconContainer: {
      height: '100%',
      width: '100%',
      position: 'relative',
      display: 'flex',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      padding: appSpacingConfig.padding4,
    },

    animatedBackground: {
      position: 'absolute',
      height: getDP(50),
      width: getDP(50),
      backgroundColor: colorsConfig.primary,
      borderRadius: 999,
    },

    iconView: {
      height: getDP(30),
      width: getDP(30),
      display: 'flex',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
}