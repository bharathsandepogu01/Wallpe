import React, {useContext, useState} from 'react';
import {
  ScrollView,
  View,
  ImageBackground,
  Pressable,
  TextInput,
} from 'react-native';
import {AppThemeContext} from '@components/AppThemeProvider';
import PText from '@components/PText';
import getSearchThemeStyles from './styles';
import PIcon from '@components/PIcon';
import SearchIcon from '@assets/icons/search-icon.svg';
import CancelIcon from '@assets/icons/cancel-icon.svg';

function Search(): JSX.Element {
  const [isSearchMode, setIsSearchMode] = useState<boolean>(false);
  const [displaySearchImages, setDisplaySearchImages] =
    useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const {stylesConfig} = useContext(AppThemeContext);

  const styles = getSearchThemeStyles(stylesConfig);

  const handleOnPressSearchBox = () => {
    if (!isSearchMode) {
      setIsSearchMode(true);
    }
  };

  const handleOnPressCancel = () => {
    setIsSearchMode(false);
    setInputValue('');
    if (displaySearchImages) {
      setDisplaySearchImages(false);
    }
  };

  const handleOnChangeText = (text: string) => {
    setInputValue(text);
    if (displaySearchImages) {
      setDisplaySearchImages(false);
    }
  };

  const handleOnPressSearchResultText = () => {
    setDisplaySearchImages(true);
    // TODO set input value to search result text
    setInputValue('result text');
  };

  return (
    <View style={styles.container}>
      <View style={styles.stickyHeader}>
        <Pressable onPress={handleOnPressSearchBox}>
          <View style={[styles.searchBoxContainer]}>
            {isSearchMode ? (
              <>
                <TextInput
                  style={styles.textInput}
                  autoFocus
                  value={inputValue}
                  onChangeText={handleOnChangeText}
                />
                <Pressable onPressIn={handleOnPressCancel}>
                  <PIcon
                    icon={CancelIcon}
                    iconContainerCustomStyles={styles.iconCustomStyles}
                  />
                </Pressable>
              </>
            ) : (
              <>
                <PIcon
                  icon={SearchIcon}
                  iconContainerCustomStyles={styles.iconCustomStyles}
                />
                <PText small customStyle={styles.searchText}>
                  find wallpaper...
                </PText>
              </>
            )}
          </View>
        </Pressable>
      </View>
      {displaySearchImages ? (
        <View>
          <PText bold large>Display search Images</PText>
        </View>
      ) : (
        <ScrollView>
          {isSearchMode ? (
            <View>
              <PText medium error customStyle={styles.noResultsText}>
                no results found!
              </PText>
              <Pressable onPress={handleOnPressSearchResultText}>
                <View style={styles.searchResultTextContainer}>
                  <PIcon
                    icon={SearchIcon}
                    iconContainerCustomStyles={styles.iconCustomStyles}
                  />
                  <PText medium semiBold>
                    result text
                  </PText>
                </View>
              </Pressable>
            </View>
          ) : (
            <View>
              <PText semiBold medium>
                Categories
              </PText>
              <View style={styles.categoriesContainer}>
                <View style={styles.categoryItem}>
                  <ImageBackground
                    source={{uri: 'https://legacy.reactjs.org/logo-og.png'}}
                    style={styles.categoryBox}>
                    <View style={styles.categoryView}>
                      <PText medium customStyle={styles.categoryText}>
                        Image Background
                      </PText>
                    </View>
                  </ImageBackground>
                </View>
              </View>
            </View>
          )}
        </ScrollView>
      )}
    </View>
  );
}

export default Search;
