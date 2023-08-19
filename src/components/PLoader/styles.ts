import {StyleSheet} from 'react-native';
import IColorsConfig from '@styles/colors/types';
import {getDP} from '@styles/common';
import appSpacingConfig from '@styles/spacing';

export default function getPLoaderThemeStyles(colorsConfig: IColorsConfig) {
  const dotCommonStyles = {
    height: getDP(8),
    width: getDP(8),
    borderRadius: 50,
    margin: appSpacingConfig.margin12,
    backgroundColor: colorsConfig.primary,
  };
  return StyleSheet.create({
    container: {
      padding: appSpacingConfig.padding8,
      height: getDP(50),
      width: getDP(50),
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
