import {StyleSheet} from 'react-native';
import appSpacingConfig from '@styles/spacing';
import {getDP} from '@styles/common';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: appSpacingConfig.padding4,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: getDP(24),
    alignItems: 'center',
    padding: appSpacingConfig.padding4,
    marginBottom: appSpacingConfig.margin4,
    marginHorizontal: appSpacingConfig.margin4,
  },
  iconStyles: {
    height: getDP(50),
    width: getDP(50),
  }
});
