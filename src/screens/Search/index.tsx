import React, {useContext, useRef, useState} from 'react';
import {
  ScrollView,
  View,
  ImageBackground,
  Pressable,
  TextInput,
} from 'react-native';
import {gql} from '@apollo/client';
import {AppThemeContext} from '@components/AppThemeProvider';
import PText from '@components/PText';
import PIcon from '@components/PIcon';
import SearchIcon from '@assets/icons/search-icon.svg';
import CancelIcon from '@assets/icons/cancel-icon.svg';
import BackIcon from '@assets/icons/arrow-left-icon.svg';
import PImageListView from '@components/PImageList';
import {IImage} from '@screens/Home/types';
import {useNavigation} from '@react-navigation/native';
import {AppBottomTabScreenProps} from '@navigation/types';
import {ISearchImagesList, ISearchQueryVariables} from './types';
import getSearchThemeStyles from './styles';
import {
  categories,
  colorsArray,
  recommendedCategories,
} from '@constants/searchScreenCategories';
import PIMage from '@components/PImage';

const GET_IMAGES_BY_SEARCH = gql`
  query searchImagesList($searchData: SearchInput) {
    getImagesBySearch(input: $searchData) {
      id
      urls {
        small
        full
        regular
      }
      user {
        name
        username
        portfolio_url
      }
    }
  }
`;

function Search(): JSX.Element {
  const navigation =
    useNavigation<AppBottomTabScreenProps<'Search'>['navigation']>();
  const [displaySearchImages, setDisplaySearchImages] =
    useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const {stylesConfig} = useContext(AppThemeContext);
  const inputRef = useRef<TextInput>(null);

  const styles = getSearchThemeStyles(stylesConfig);

  const handleOnPressSearchIcon = () => {
    inputRef.current?.focus();
  };

  const handleOnPressCancel = () => {
    setInputValue('');
    inputRef.current?.blur();
    setDisplaySearchImages(false);
  };

  const handleOnChangeText = (text: string) => {
    setInputValue(text);
  };

  const handleOnSearch = (searchText?: string) => {
    if (searchText) {
      setInputValue(searchText);
    }
    setDisplaySearchImages(true);
  };

  const showCancelIcon = inputValue.length > 0 && !displaySearchImages;

  return (
    <View style={styles.container}>
      <View style={styles.stickyHeader}>
        <View style={[styles.searchBoxContainer]}>
          {displaySearchImages ? (
            <Pressable onPress={handleOnPressCancel}>
              <PIcon
                icon={BackIcon}
                iconContainerCustomStyles={styles.iconCustomStyles}
              />
            </Pressable>
          ) : (
            <Pressable onPress={handleOnPressSearchIcon}>
              <PIcon
                icon={SearchIcon}
                iconContainerCustomStyles={styles.iconCustomStyles}
              />
            </Pressable>
          )}
          <TextInput
            style={styles.textInput}
            value={inputValue}
            onChangeText={handleOnChangeText}
            onSubmitEditing={() => handleOnSearch()}
            placeholder={'find wallpaper'}
            placeholderTextColor={stylesConfig.textPrimaryColor}
            editable={!displaySearchImages}
            ref={inputRef}
          />
          {showCancelIcon && (
            <Pressable onPress={handleOnPressCancel}>
              <PIcon
                icon={CancelIcon}
                iconContainerCustomStyles={styles.iconCustomStyles}
              />
            </Pressable>
          )}
        </View>
      </View>
      {!displaySearchImages && (
        <ScrollView showsVerticalScrollIndicator={false}>
          <PText semiBold>Categories</PText>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={styles.colorsContainer}>
            {colorsArray.map(color => {
              return (
                <Pressable
                  key={color.name}
                  onPress={() => handleOnSearch(color.name)}
                  style={[styles.colorCard, {backgroundColor: color.code}]}
                />
              );
            })}
          </ScrollView>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={styles.categoriesContainer}>
            {categories.map(category => {
              return (
                <Pressable
                  key={category.type}
                  onPress={() => handleOnSearch(category.type)}
                  style={styles.categoryItem}>
                  <ImageBackground
                    source={{uri: category.imageUrl}}
                    style={styles.categoryBox}>
                    <View style={styles.categoryView}>
                      <PText medium customStyle={styles.categoryText}>
                        {category.name}
                      </PText>
                    </View>
                  </ImageBackground>
                </Pressable>
              );
            })}
          </ScrollView>
          <PText semiBold medium>
            Recommended
          </PText>
          <View style={styles.popularCategoryContainer}>
            {recommendedCategories.map(category => {
              return (
                <Pressable
                  key={category.type}
                  onPress={() => handleOnSearch(category.type)}
                  style={styles.popularCategory}>
                  <PIMage
                    source={{uri: category.imageUrl}}
                    style={styles.popularCatImage}
                  />
                  <PText small customStyle={styles.popularCatText}>
                    {category.name}
                  </PText>
                </Pressable>
              );
            })}
          </View>
        </ScrollView>
      )}
      {displaySearchImages && (
        <PImageListView<IImage, ISearchImagesList, ISearchQueryVariables>
          getImageUrlFromListItemFn={imageObj => imageObj.urls.small}
          getListFromQueriedResponseFn={queryResponse =>
            queryResponse.getImagesBySearch
          }
          getImageHeightFromListItem={imageObj => imageObj.height}
          onClickItem={imageObj =>
            navigation.navigate('Image Details', {
              imageId: imageObj.id,
              imageUrl: imageObj.urls.full,
            })
          }
          graphqlQuery={GET_IMAGES_BY_SEARCH}
          variables={{
            searchData: {
              search: inputValue,
              page: 1,
              perPage: 10,
            },
          }}
          updateVariables={(variables, fetchCallCount) => {
            return {
              ...variables,
              searchData: {
                ...variables.searchData,
                page: variables.searchData.page + fetchCallCount,
              },
            };
          }}
        />
      )}
    </View>
  );
}

export default Search;
