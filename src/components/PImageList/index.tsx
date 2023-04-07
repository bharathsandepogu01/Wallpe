import React, {useRef, useMemo} from 'react';
import {View, NativeSyntheticEvent, NativeScrollEvent} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useQuery} from '@apollo/client';
import {getRandomNumberInRange} from '@utils/index';
import PLoader from '@components/PLoader';
import PError from '@components/PError';
import RenderColumnImages from './RenderColumnImages/RenderColumnImages';
import {IPImageListViewProps} from './types';
import styles from './styles';

const randomHeightArr = new Array(100000).fill(0).map(() => {
  const randomHeight = getRandomNumberInRange(200, 300);
  return randomHeight;
});

function PImageListView<ImageType, QueriedResultType>({
  getImageHeightFromListItem,
  getImageUrlFromListItemFn,
  getListFromQueriedResponseFn,
  graphqlQuery,
}: IPImageListViewProps<ImageType, QueriedResultType>): JSX.Element {
  const columnData = useRef<ImageType[][]>(
    new Array(2).fill(null).map(() => []),
  );
  const {loading, data, error, fetchMore, networkStatus, refetch} =
    useQuery<QueriedResultType>(graphqlQuery, {
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

  const newColumnData: ImageType[][] = useMemo(() => {
    if (!data) return columnData.current;

    const queriedList = getListFromQueriedResponseFn(data);

    columnData.current = [[], []];

    queriedList.forEach((item, index) => {
      const columnIndex = index % 2;
      columnData.current[columnIndex].push({
        ...item,
        height: randomHeightArr[index],
      });
    });

    return columnData.current;
  }, [data]);

  if (loading && !data) return <PLoader />;

  if (error) return <PError errorText={`Error: ${error.message}`} />;

  return (
    <View style={styles.imagesContainer}>
      <FlatList
        data={newColumnData}
        renderItem={({index, item}) => (
          <RenderColumnImages
            getImageHeight={getImageHeightFromListItem}
            getImageUrlFn={getImageUrlFromListItemFn}
            index={index}
            itemsArr={item}
          />
        )}
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

export default PImageListView;
