import React from 'react';
import {View, Pressable} from 'react-native';
import {gql} from '@apollo/client';
import {useNavigation, useRoute} from '@react-navigation/native';
import {AppStackScreenProps} from '@navigation/types';
import PImageListView from '@components/PImageList/index';
import BackArrow from '@assets/icons/arrow-left-icon.svg';
import styles from './styles';
import PIcon from '@components/PIcon';
import PText from '@components/PText';
import {IImage} from '@screens/Home/types';
import {ISearchImagesList, ISearchQueryVariables} from './types';

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
        profile_image {
          medium
        }
      }
    }
  }
`;

function SearchResults(): JSX.Element {
  const navigation =
    useNavigation<AppStackScreenProps<'Search Results Screen'>['navigation']>();
  const route =
    useRoute<AppStackScreenProps<'Search Results Screen'>['route']>();

  const handleOnPressBack = () => {
    navigation.pop();
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable onPress={handleOnPressBack}>
          <PIcon
            icon={BackArrow}
            iconContainerCustomStyles={styles.iconStyles}
            backgroundColorPrimary
          />
        </Pressable>
        <PText semiBold numberOfLines={1} ellipsizeMode="tail">
          {route.params.searchText}
        </PText>
      </View>
      <PImageListView<IImage, ISearchImagesList, ISearchQueryVariables>
        getImageUrlFromListItemFn={imageObj => imageObj.urls.small}
        getListFromQueriedResponseFn={queryResponse =>
          queryResponse.getImagesBySearch
        }
        getImageHeightFromListItem={imageObj => imageObj.height}
        onClickItem={imageObj =>
          navigation.navigate('Image Details', {
            imageId: imageObj.id,
            smallImageUrl: imageObj.urls.small,
            fullImageUrl: imageObj.urls.full,
            regularImageUrl: imageObj.urls.regular,
            userImageUrl: imageObj.user.profile_image.medium,
            userName: imageObj.user.name,
          })
        }
        graphqlQuery={GET_IMAGES_BY_SEARCH}
        variables={{
          searchData: {
            search: route.params.searchText,
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
    </View>
  );
}

export default SearchResults;
