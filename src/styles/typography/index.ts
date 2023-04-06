import {getDP, basePixelValue} from '@styles/common';
import {ITypographyConfig} from './types';

const fontScaleValue = 4;

const appTypography: ITypographyConfig = {
  fontFamilyRegular: 'MontserratAlternates-Regular',
  fontFamilyBold: 'MontserratAlternates-Bold',
  fontFamilyLight: 'MontserratAlternates-Light',
  fontFamilyMedium: 'MontserratAlternates-Medium',
  fontFamilySemiBold: 'MontserratAlternates-SemiBold',
  fontSize: getDP(basePixelValue) * fontScaleValue,
  fontSizeExtraLarge: getDP(basePixelValue + 8) * fontScaleValue,
  fontSizeLarge: getDP(basePixelValue + 4) * fontScaleValue,
  fontSizeMedium: getDP(basePixelValue - 2) * fontScaleValue,
  fontSizeSmall: getDP(basePixelValue - 4) * fontScaleValue,
  fontSizeTiny: getDP(basePixelValue - 8) * fontScaleValue,
};

export default appTypography;
