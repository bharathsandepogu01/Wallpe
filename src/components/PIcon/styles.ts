import {StyleSheet} from 'react-native';
import IColorsConfig from '@styles/colors/types';
import {getDP} from '@styles/common';

export default function getPIconThemeStyles(colorsConfig: IColorsConfig) {
  return StyleSheet.create({
    default: {
      height: getDP(50),
      width: getDP(50),
      borderRadius: 999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    backgroundColorPrimary: {
      backgroundColor: colorsConfig.primary,
    },
    backgroundColorPrimaryDark: {
      backgroundColor: colorsConfig.primaryDark,
    },
    backgroundColorDark: {
      backgroundColor: colorsConfig.backgroundColor,
    },
  });
}
