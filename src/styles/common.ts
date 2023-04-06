import {getRandomNumberInRange} from '@utils/index';
import {PixelRatio} from 'react-native';

export const basePixelValue = 16;

export function getDP(pixelValue: number): number {
  return Math.round(
    PixelRatio.roundToNearestPixel(pixelValue / PixelRatio.get()),
  );
}

export function genRandomRGBColor(opacity: number) {
  return `rgba(${getRandomNumberInRange(0, 255)},${getRandomNumberInRange(
    0,
    255,
  )},${getRandomNumberInRange(0, 255)},${opacity})`;
}
