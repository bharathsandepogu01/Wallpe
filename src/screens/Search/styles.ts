import {getDP} from '@styles/common';
import IColorsConfig from '@styles/colors/types';
import appTypography from '@styles/typography';
import appSpacingConfig from '@styles/spacing';
import {StyleSheet} from 'react-native';

export default function getSearchThemeStyles(colorsConfig: IColorsConfig) {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: appSpacingConfig.padding8,
    },
    stickyHeader: {
      backgroundColor: colorsConfig.backgroundColor,
      marginVertical: appSpacingConfig.margin8,
    },
    searchBoxContainer: {
      height: getDP(140),
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      borderWidth: 2,
      borderColor: colorsConfig.borderColor,
      borderRadius: 999,
      backgroundColor: colorsConfig.backgroundColorLight,
      alignItems: 'center',
      paddingHorizontal: appSpacingConfig.padding4,
    },
    iconCustomStyles: {
      height: getDP(100),
      width: getDP(100),
    },
    textInput: {
      flex: 1,
      color: colorsConfig.textPrimaryColor,
      fontFamily: appTypography.fontFamilyRegular,
      fontSize: appTypography.fontSizeSmall,
    },
    categoriesContainer: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: appSpacingConfig.margin12,
      marginBottom: appSpacingConfig.margin12,
    },
    categoryItem: {
      height: getDP(650),
      width: getDP(450),
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
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.4)',
    },
    categoryText: {
      color: 'white',
    },
    colorsContainer: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: appSpacingConfig.margin8,
    },
    colorCard: {
      height: getDP(120),
      width: getDP(120),
      borderRadius: 999,
      marginRight: appSpacingConfig.margin8,
    },
    popularCategoryContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: appSpacingConfig.margin4,
      marginBottom: appSpacingConfig.margin8,
    },
    popularCategory: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: getDP(16),
      width: '47%',
      margin: '1%',
      height: getDP(200),
      borderRadius: 5,
      borderColor: colorsConfig.borderColor,
      borderWidth: 1,
      overflow: 'hidden',
      padding: appSpacingConfig.padding4,
    },
    popularCatImage: {
      height: '100%',
      width: getDP(180),
      borderRadius: 5,
    },
    popularCatText: {
      flex: 1,
    },
  });
}
