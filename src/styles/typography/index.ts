import {basePixelValue} from '@styles/common';
import {PixelRatio} from 'react-native';
import {ITypographyConfig} from './types';

const fontScaleValue = PixelRatio.getFontScale();

const appTypography: ITypographyConfig = {
  fontFamilyRegular: 'MontserratAlternates-Regular',
  fontFamilyBold: 'MontserratAlternates-Bold',
  fontFamilyLight: 'MontserratAlternates-Light',
  fontFamilyMedium: 'MontserratAlternates-Medium',
  fontFamilySemiBold: 'MontserratAlternates-SemiBold',
  fontSize: basePixelValue * fontScaleValue,
  fontSizeExtraLarge: (basePixelValue + 8) * fontScaleValue,
  fontSizeLarge: (basePixelValue + 4) * fontScaleValue,
  fontSizeMedium: (basePixelValue - 2) * fontScaleValue,
  fontSizeSmall: (basePixelValue - 4) * fontScaleValue,
  fontSizeTiny: (basePixelValue - 8) * fontScaleValue,
};

export default appTypography;
