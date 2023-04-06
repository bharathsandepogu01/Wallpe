import {StyleSheet} from 'react-native';
import IColorsConfig from '@styles/colors/types';
import {getDP} from '@styles/common';
import appSpacingConfig from '@styles/spacing';

export default function getPLoaderThemeStyles(colorsConfig: IColorsConfig) {
  const dotCommonStyles = {
    height: getDP(16),
    width: getDP(16),
    borderRadius: 50,
    backgroundColor: colorsConfig.primary,
  };
  return StyleSheet.create({
    container: {
      padding: appSpacingConfig.padding8,
      height: getDP(100),
      width: getDP(100),
      borderRadius: 50,
      position: 'relative',
      display: 'flex',
      flex: 1,
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
    dot1: {
      ...dotCommonStyles,
      position: 'absolute',
      bottom: '50%',
    },
    dot2: {
      ...dotCommonStyles,
      position: 'absolute',
      top: '50%',
    },
    dot3: {
      ...dotCommonStyles,
      position: 'absolute',
      left: '50%',
    },
    dot4: {
      ...dotCommonStyles,
      position: 'absolute',
      right: '50%',
    },
  });
}
