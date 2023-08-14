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
    <PImageListView<IImage, IImagesList, IVariables>
      getImageUrlFromListItemFn={imageObj => imageObj.urls.small}
      getListFromQueriedResponseFn={queryResponse => queryResponse.getImages}
      getImageHeightFromListItem={imageObj => imageObj.height}
      onClickItem={imageObj =>
        navigation.navigate('Image Details', {
          imageId: imageObj.id,
          imageUrl: imageObj.urls.full,
        })
      }
      graphqlQuery={GET_IMAGES_LIST}
      variables={{}}
      updateVariables={variables => variables}
    />
  );
}

export default Home;
