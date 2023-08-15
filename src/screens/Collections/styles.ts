import {StyleSheet} from 'react-native';
import appSpacingConfig from '@styles/spacing';
import { getDP } from '@styles/common';

export default StyleSheet.create({
  categoriesContainer: {
    padding: appSpacingConfig.padding8,
  },
  categoryItem: {
    marginBottom: appSpacingConfig.margin8,
    width: '100%',
    height: getDP(450),
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: appSpacingConfig.margin4,
  },
  categoryBox: {
    flex: 1,
  },
  categoryView: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: appSpacingConfig.padding16,
    gap: getDP(8),
  },
  categoryText: {
    color: 'white',
  },
});
