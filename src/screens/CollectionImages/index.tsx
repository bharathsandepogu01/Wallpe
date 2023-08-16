import React from 'react';
import {View, Pressable} from 'react-native';
import {gql} from '@apollo/client';
import {useNavigation, useRoute} from '@react-navigation/native';
import {AppStackScreenProps} from '@navigation/types';
import PImageListView from '@components/PImageList/index';
import BackArrow from '@assets/icons/arrow-left-icon.svg';
import {
  IGetCollectionImages,
  IGetCollectionsImagesQueryResult,
  ISearchData,
} from './types';
import styles from './styles';
import PIcon from '@components/PIcon';
import PText from '@components/PText';

const GET_IMAGES_LIST = gql`
  query getImagesByCollection($searchData: CollectionSearchInput) {
    getImagesByCollection(input: $searchData) {
      id
      title
      total_photos
      cover_photo {
        urls {
          small
        }
      }
      urls {
        full
        regular
        small
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

function CollectionImages(): JSX.Element {
  const navigation =
    useNavigation<AppStackScreenProps<'Collection Images'>['navigation']>();
  const route = useRoute<AppStackScreenProps<'Collection Images'>['route']>();

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
          {route.params.collectionTitle}
        </PText>
      </View>
      <PImageListView<
        IGetCollectionImages,
        IGetCollectionsImagesQueryResult,
        ISearchData
      >
        getImageUrlFromListItemFn={imageObj => imageObj.urls.small}
        getListFromQueriedResponseFn={queryResponse =>
          queryResponse.getImagesByCollection
        }
        getImageHeightFromListItem={imageObj => imageObj.height}
        onClickItem={imageObj =>
          navigation.navigate('Image Details', {
            imageId: imageObj.id,
            fullImageUrl: imageObj.urls.full,
            smallImageUrl: imageObj.urls.small,
            regularImageUrl: imageObj.urls.regular,
            userImageUrl: imageObj.user.profile_image.medium,
            userName: imageObj.user.name,
          })
        }
        graphqlQuery={GET_IMAGES_LIST}
        variables={{
          searchData: {
            collectionId: route.params.collectionId,
            page: 1,
            perPage: 10,
          },
        }}
        updateVariables={(variables, fetchCallCount) => {
          return {
            ...variables,
            searchData: {
              ...variables.searchData,
              page: fetchCallCount + 1,
            },
          };
        }}
      />
    </View>
  );
}

export default CollectionImages;
