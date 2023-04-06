import {StyleSheet} from 'react-native';
import appSpacingConfig from '@styles/spacing';
import IColorsConfig from '@styles/colors/types';
import {getDP} from '@styles/common';

export default function getSettingsThemeStyles(colorsConfig: IColorsConfig) {
  return StyleSheet.create({
    commonHeaderStyles: {
      backgroundColor: colorsConfig.backgroundColorLight,
      paddingVertical: appSpacingConfig.padding8,
      paddingHorizontal: appSpacingConfig.padding20,
    },
    commonContentContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: appSpacingConfig.padding12,
      paddingVertical: appSpacingConfig.padding4,
      gap: 4,
    },
    commonIconContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  });
}
