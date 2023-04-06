import React, {useRef, useMemo} from 'react';
import {View, NativeSyntheticEvent, NativeScrollEvent} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {gql, useQuery} from '@apollo/client';
import {getRandomNumberInRange} from '@utils/index';
import styles from './styles';
import PLoader from '@components/PLoader';
import {IImage, IImagesList} from './types';
import PError from '@components/PError';
import RenderColumn from '@components/HomeScreen/RenderColumn/RenderColumn';
import {useNavigation, useRoute} from '@react-navigation/native';
import {AppBottomTabScreenProps} from '@navigation/types';

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

const randomHeightArr = new Array(100000).fill(0).map((arrItem, arr) => {
  const randomHeight = getRandomNumberInRange(200, 300);
  return randomHeight;
});

function Home(): JSX.Element {
  const navigation =
    useNavigation<AppBottomTabScreenProps<'Papier'>['navigation']>();
  const route = useRoute<AppBottomTabScreenProps<'Papier'>['route']>();

  const columnData = useRef<IImage[][]>(new Array(2).fill(null).map(() => []));
  const {loading, data, error, fetchMore, networkStatus, refetch} =
    useQuery<IImagesList>(GET_IMAGES_LIST, {
      notifyOnNetworkStatusChange: true,
      fetchPolicy: 'network-only',
    });

  const fetchingMore = networkStatus === 3;
  const refetching = networkStatus === 4;

  const renderHeader = <View>{refetching && <PLoader />}</View>; // refetch
  const renderFooter = <View>{fetchingMore && <PLoader />}</View>; // fetchMore

  const handleScrollEndTop = ({
    nativeEvent,
  }: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (nativeEvent.contentOffset.y <= 0 && !refetching) refetch({});
  };

  const handleFetchMore = () => {
    fetchMore({});
  };

  const newColumnData: IImage[][] = useMemo(() => {
    if (!data?.getImages) return columnData.current;

    columnData.current = [[], []];

    data?.getImages.forEach((item, index) => {
      const columnIndex = index % 2;
      columnData.current[columnIndex].push({
        ...item,
        height: randomHeightArr[index],
      });
    });

    return columnData.current;
  }, [data?.getImages]);

  if (loading && !data) return <PLoader />;

  if (error) return <PError errorText={`Error: ${error.message}`} />;

  return (
    <View style={styles.imagesContainer}>
      <FlatList
        data={newColumnData}
        renderItem={RenderColumn}
        numColumns={2}
        onEndReached={handleFetchMore}
        showsVerticalScrollIndicator={false}
        onScrollEndDrag={handleScrollEndTop}
        ListFooterComponent={renderFooter}
        ListHeaderComponent={renderHeader}
      />
    </View>
  );
}

export default Home;
