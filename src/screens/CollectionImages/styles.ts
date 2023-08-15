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
    gap: getDP(48),
    alignItems: 'center',
    padding: appSpacingConfig.padding4,
    marginBottom: appSpacingConfig.margin4,
    marginHorizontal: appSpacingConfig.margin4,
  },
  iconStyles: {
    height: getDP(120),
    width: getDP(120),
    marginTop: getDP(4),
  }
});
