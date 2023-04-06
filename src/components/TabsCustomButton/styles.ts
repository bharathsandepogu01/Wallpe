import {StyleSheet} from 'react-native';
import IColorsConfig from '@styles/colors/types';
import {getDP} from '@styles/common';

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
      padding: 4,
    },

    animatedBackground: {
      position: 'absolute',
      height: getDP(120),
      width: getDP(120),
      backgroundColor: colorsConfig.primary,
      borderRadius: 50,
    },

    iconView: {
      height: getDP(70),
      width: getDP(70),
      display: 'flex',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
}
