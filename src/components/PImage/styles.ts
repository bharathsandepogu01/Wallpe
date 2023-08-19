import {StyleSheet} from 'react-native';
import IColorsConfig from '@styles/colors/types';
import {getDP} from '@styles/common';

export default function getPImageThemeStyles(colorsConfig: IColorsConfig) {
  return StyleSheet.create({
    wrapper: {
      flex: 1,
      borderRadius: 5,
    },
  });
}
