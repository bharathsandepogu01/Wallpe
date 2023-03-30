import {StyleSheet} from 'react-native';
import {IStylesConfig} from '@styles/types';

export default function getThemeStyles(styleConfig: IStylesConfig) {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconContainer: {
      height: '100%',
      width: '100%',
      position: 'relative',
      display: 'flex',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 4,
    },

    animatedBackground: {
      position: 'absolute',
      height: '100%',
      width: '50%',
      backgroundColor: styleConfig.primary,
      borderRadius: 50,
    },

    icon: {
      height: '100%',
      width: '100%',
      display: 'flex',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
}
