import {StyleSheet} from 'react-native';
import IColorsConfig from '@styles/colors/types';
import {getDP} from '@styles/common';

export default function getPToggleThemeStyles(colorsConfig: IColorsConfig) {
  return StyleSheet.create({
    toggleContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      maxWidth: getDP(45),
      padding: getDP(16),
    },
    toggleBackground: {
      // TODO try to do it in percentage
      height: getDP(20),
      width: getDP(45),
      backgroundColor: colorsConfig.inActiveColor,
      borderRadius: 999,
    },
    toggleCircle: {
      backgroundColor: colorsConfig.textPrimaryColor,
      height: getDP(25),
      width: getDP(25),
      borderRadius: 50,
      position: 'absolute',
      left: 0,
    },
  });
}
