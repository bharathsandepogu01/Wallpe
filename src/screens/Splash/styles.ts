import {getDP} from '@styles/common';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: getDP(70),
    width: getDP(70),
  },
});
