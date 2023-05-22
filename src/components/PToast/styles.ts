import {StyleSheet} from 'react-native';
import IColorsConfig from '@styles/colors/types';
import {getDP} from '@styles/common';

export default function getPToastThemeStyles(colorsConfig: IColorsConfig) {
  return StyleSheet.create({
    // default color styles is of info type

    toastContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      width: '95%',
      borderRadius: 4,
      alignSelf: 'center',
      borderLeftWidth: getDP(12),
      marginTop: getDP(40),
      paddingHorizontal: getDP(8),
      paddingVertical: getDP(12),
      backgroundColor: colorsConfig.backgroundColor,
      borderLeftColor: colorsConfig.primary,
    },
    errorToast: {
      borderLeftColor: colorsConfig.error,
    },
    warningToast: {
      borderLeftColor: colorsConfig.warning,
    },
    successToast: {
      borderLeftColor: colorsConfig.success,
    },
    toastMsgContainer: {
      paddingVertical: getDP(28),
      flex: 1,
    },
  });
}
