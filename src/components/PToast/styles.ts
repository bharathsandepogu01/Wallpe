import {StyleSheet} from 'react-native';
import IColorsConfig from '@styles/colors/types';
import appSpacingConfig from '@styles/spacing';
import {getDP} from '@styles/common';

export default function getPToastThemeStyles(colorsConfig: IColorsConfig) {
  return StyleSheet.create({
    // default color styles is of info type

    toastContainer: {
      borderRadius: 999,
      alignSelf: 'center',
      backgroundColor: colorsConfig.textSecondaryColor,
      position: 'absolute',
      bottom: getDP(160),
      paddingRight: appSpacingConfig.padding20,
      paddingLeft: appSpacingConfig.padding8,
    },
    contentContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: 230,
    },
    message: {
      color: colorsConfig.backgroundColor,
    },
  });
}
