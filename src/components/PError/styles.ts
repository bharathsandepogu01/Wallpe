import {StyleSheet} from 'react-native';
import IColorsConfig from '@styles/colors/types';
import appSpacingConfig from '@styles/spacing';
import {getDP} from '@styles/common';

export default function getPErrorThemeStyles(colorsConfig: IColorsConfig) {
  return StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: getDP(16),
      padding: appSpacingConfig.padding8,
    },
    iconCustomStyles: {
      height: getDP(120),
      width: getDP(120),
    },
  });
}
