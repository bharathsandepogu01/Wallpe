import React from 'react';
import {gql} from '@apollo/client';
import {IImage, IImagesList, IVariables} from './types';
import {useNavigation, useRoute} from '@react-navigation/native';
import {AppBottomTabScreenProps} from '@navigation/types';
import PImageListView from '@components/PImageList/index';

const GET_IMAGES_LIST = gql`
  query ListImages {
    getImages {
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

function Home(): JSX.Element {
  const navigation =
    useNavigation<AppBottomTabScreenProps<'Wallpe'>['navigation']>();
  const route = useRoute<AppBottomTabScreenProps<'Wallpe'>['route']>();

  return (
    <PImageListView<IImage, IImagesList, IVariables>
      getImageUrlFromListItemFn={imageObj => imageObj.urls.small}
      getListFromQueriedResponseFn={queryResponse => queryResponse.getImages}
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
      graphqlQuery={GET_IMAGES_LIST}
      variables={{}}
      updateVariables={variables => variables}
    />
  );
}

export default Home;
