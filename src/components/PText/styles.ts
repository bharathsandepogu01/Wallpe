import {StyleSheet} from 'react-native';
import IColorsConfig from '@styles/colors/types';
import appTypography from '@styles/typography';

export default function getPTextThemeStyles(colorsConfig: IColorsConfig) {
  return StyleSheet.create({
    default: {
      color: colorsConfig.textPrimaryColor,
      fontFamily: appTypography.fontFamilyRegular,
      fontSize: appTypography.fontSize,
    },

    // colors
    secondaryTextColor: {
      color: colorsConfig.textSecondaryColor,
    },
    tertiaryTextColor: {
      color: colorsConfig.textTertiaryColor,
    },
    primaryColor: {
      color: colorsConfig.primary,
    },
    primaryColorDark: {
      color: colorsConfig.primaryDark,
    },
    error: {
      color: colorsConfig.error,
    },

    // font family
    mediumText: {
      fontFamily: appTypography.fontFamilyMedium,
    },
    boldText: {
      fontFamily: appTypography.fontFamilyBold,
    },
    semiBoldText: {
      fontFamily: appTypography.fontFamilySemiBold,
    },
    lightText: {
      fontFamily: appTypography.fontFamilyLight,
    },

    // size
    extraLarge: {
      fontSize: appTypography.fontSizeExtraLarge,
    },
    large: {
      fontSize: appTypography.fontSizeLarge,
    },
    medium: {
      fontSize: appTypography.fontSizeMedium,
    },
    small: {
      fontSize: appTypography.fontSizeSmall,
    },
    tiny: {
      fontSize: appTypography.fontSizeTiny,
    },
  });
}
