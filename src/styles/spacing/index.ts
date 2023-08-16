import {getDP, baseSpacingValue} from '@styles/common';
import ISpacingConfig from './types';

const spacingProperties = ['margin', 'padding'];

const appSpacingValuesInPixels = [
  baseSpacingValue - 12,
  baseSpacingValue - 8,
  baseSpacingValue - 4,
  baseSpacingValue,
  baseSpacingValue + 4,
  baseSpacingValue + 8,
];

function generateAppSpacing() {
  let obj: ISpacingConfig = {};
  spacingProperties.forEach(spacingProperty => {
    appSpacingValuesInPixels.forEach(appSpacingValue => {
      obj[`${spacingProperty}${appSpacingValue}`] =
        getDP(appSpacingValue);
    });
  });
  return obj;
}

const appSpacingConfig = generateAppSpacing();

export default appSpacingConfig;
