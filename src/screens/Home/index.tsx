import React from 'react';
import {gql} from '@apollo/client';
import {IImage, IImagesList} from './types';
import {useNavigation, useRoute} from '@react-navigation/native';
import {AppBottomTabScreenProps} from '@navigation/types';
import PImageListView from '@components/PImageList/index';

const GET_IMAGES_LIST = gql`
  query ListImages {
    getImages {
      id
      urls {
        small
      }
      user {
        name
        username
        portfolio_url
      }
    }
  }
`;

function Home(): JSX.Element {
  const navigation =
    useNavigation<AppBottomTabScreenProps<'Papier'>['navigation']>();
  const route = useRoute<AppBottomTabScreenProps<'Papier'>['route']>();

  return (
    <PImageListView<IImage, IImagesList>
      getImageUrlFromListItemFn={imageObject => imageObject.urls.small}
      getListFromQueriedResponseFn={queryResponse => queryResponse.getImages}
      getImageHeightFromListItem={imageObject => imageObject.height}
      graphqlQuery={GET_IMAGES_LIST}
    />
  );
}

export default Home;
