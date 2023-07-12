import { getDP } from '@styles/common';
import IColorsConfig from '@styles/colors/types';
import appTypography from '@styles/typography';
import appSpacingConfig from '@styles/spacing';
import { StyleSheet } from 'react-native';

export default function getSearchThemeStyles(colorsConfig: IColorsConfig) {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: appSpacingConfig.padding12,
    },
    stickyHeader: {
      backgroundColor: colorsConfig.backgroundColor,
      marginVertical: appSpacingConfig.margin16,
    },
    searchBoxContainer: {
      height: getDP(140),
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      borderWidth: 2,
      borderColor: colorsConfig.borderColor,
      borderRadius: 5,
      backgroundColor: colorsConfig.backgroundColorLight,
      alignItems: 'center',
      paddingHorizontal: appSpacingConfig.padding8,
    },
    searchText: {
      flex: 1,
    },
    iconCustomStyles: {
      height: getDP(100),
      width: getDP(100),
    },
    textInput: {
      flex: 1,
      color: colorsConfig.textPrimaryColor,
      fontFamily: appTypography.fontFamilyRegular,
      fontSize: appTypography.fontSizeMedium,
    },
    categoriesContainer: {
      display: 'flex',
      flex: 1,
      marginTop: appSpacingConfig.margin8,
      gap: getDP(16),
    },
    categoryItem: {
      height: getDP(360),
      borderRadius: 5,
      overflow: 'hidden',
    },
    categoryBox: {
      flex: 1,
    },
    categoryView: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    categoryText: {
      color: 'white',
    },
    noResultsText: {
      textAlign: 'center',
    },
    searchResultTextContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: getDP(16),
      marginBottom: appSpacingConfig.margin8
    }
  });
}
