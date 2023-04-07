import {StyleSheet} from 'react-native';
import IColorsConfig from '@styles/colors/types';

export default function getImageDetailsThemeStyles(
  colorsConfig: IColorsConfig,
) {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    imageContainer: {
      height: '100%',
      width: '100%',
    },
    backButton: {
      position: 'absolute',
    },
    infoContainer: {
      position: 'absolute',
      width: '90%',
      borderRadius: 25,
      backgroundColor: colorsConfig.backgroundColor,
      alignSelf: 'center',
      // TODO should remove after UI finalized
      height: 100,
    },
  });
}
