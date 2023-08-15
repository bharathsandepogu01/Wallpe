import React, {useContext, useRef, useState} from 'react';
import {
  ScrollView,
  View,
  ImageBackground,
  Pressable,
  TextInput,
} from 'react-native';
import {AppThemeContext} from '@components/AppThemeProvider';
import PText from '@components/PText';
import PIcon from '@components/PIcon';
import SearchIcon from '@assets/icons/search-icon.svg';
import CancelIcon from '@assets/icons/cancel-icon.svg';
import {useNavigation} from '@react-navigation/native';
import {AppBottomTabScreenProps} from '@navigation/types';
import getSearchThemeStyles from './styles';
import {
  categories,
  colorsArray,
  recommendedCategories,
} from '@constants/searchScreenCategories';
import PIMage from '@components/PImage';

function Search(): JSX.Element {
  const navigation =
    useNavigation<AppBottomTabScreenProps<'Search'>['navigation']>();
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
  };

  const handleOnChangeText = (text: string) => {
    setInputValue(text);
  };

  const handleOnSearch = (searchText?: string) => {
    navigation.navigate('Search Results Screen', {
      searchText: searchText ? searchText : inputValue,
    });
    setInputValue('');
  };

  const showCancelIcon = inputValue.length > 0;

  return (
    <View style={styles.container}>
      <View style={styles.stickyHeader}>
        <View style={[styles.searchBoxContainer]}>
          <Pressable onPress={handleOnPressSearchIcon}>
            <PIcon
              icon={SearchIcon}
              iconContainerCustomStyles={styles.iconCustomStyles}
            />
          </Pressable>
          <TextInput
            style={styles.textInput}
            value={inputValue}
            onChangeText={handleOnChangeText}
            onSubmitEditing={() => handleOnSearch()}
            placeholder={'find wallpaper'}
            placeholderTextColor={stylesConfig.textPrimaryColor}
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
                <PText
                  numberOfLines={1}
                  ellipsizeMode={'tail'}
                  small
                  customStyle={styles.popularCatText}>
                  {category.name}
                </PText>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

export default Search;
