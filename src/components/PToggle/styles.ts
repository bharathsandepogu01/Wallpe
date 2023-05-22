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
      maxWidth: getDP(90),
      padding: getDP(16),
    },
    toggleBackground: {
      // TODO try to do it in percentage
      height: getDP(40),
      width: getDP(90),
      backgroundColor: colorsConfig.inActiveColor,
      borderRadius: 50,
    },
    toggleCircle: {
      backgroundColor: colorsConfig.textPrimaryColor,
      height: getDP(55),
      width: getDP(55),
      borderRadius: 50,
      position: 'absolute',
      left: 0,
    },
  });
}
