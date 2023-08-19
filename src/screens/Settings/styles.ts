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
      marginBottom: appSpacingConfig.margin8,
    },
    commonContentContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: appSpacingConfig.padding12,
      paddingRight: appSpacingConfig.padding16,
      marginBottom: appSpacingConfig.margin8,
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
