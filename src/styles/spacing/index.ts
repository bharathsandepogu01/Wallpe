import {getDP, basePixelValue} from '@styles/common';
import ISpacingConfig from './types';

const marginScaleValue = 4;

const spacingProperties = ['margin', 'padding'];

const appSpacingValuesInPixels = [
  basePixelValue - 12,
  basePixelValue - 8,
  basePixelValue - 4,
  basePixelValue,
  basePixelValue + 4,
  basePixelValue + 8,
];

function generateAppSpacing() {
  let obj: ISpacingConfig = {};
  spacingProperties.forEach(spacingProperty => {
    appSpacingValuesInPixels.forEach(appSpacingValue => {
      obj[`${spacingProperty}${appSpacingValue}`] =
        getDP(appSpacingValue) * marginScaleValue;
    });
  });
  return obj;
}

const appSpacingConfig = generateAppSpacing();

export default appSpacingConfig;
