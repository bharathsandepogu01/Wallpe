import {getRandomNumberInRange} from '@utils/index';
import {PixelRatio} from 'react-native';

export const baseSpacingValue = 16;
const basePixelRatio = 3.5;

const pixelRatioScale = PixelRatio.get() / basePixelRatio;

export const basePixelValue = pixelRatioScale < 1 ? 24 : 18;

export function getDP(pixelValue: number): number {
  return Math.round((pixelRatioScale < 1 ? pixelRatioScale : 1) * pixelValue);
}

export function genRandomRGBColor(opacity: number) {
  return `rgba(${getRandomNumberInRange(0, 255)},${getRandomNumberInRange(
    0,
    255,
  )},${getRandomNumberInRange(0, 255)},${opacity})`;
}
