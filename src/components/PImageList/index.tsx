import React, {useRef, useMemo} from 'react';
import {View, NativeSyntheticEvent, NativeScrollEvent} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {OperationVariables, useQuery} from '@apollo/client';
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

function PImageListView<ImageType, QueriedResultType, Variables>({
  getImageHeightFromListItem,
  getImageUrlFromListItemFn,
  getListFromQueriedResponseFn,
  onClickItem,
  graphqlQuery,
  variables,
  updateVariables,
}: IPImageListViewProps<ImageType, QueriedResultType, Variables>): JSX.Element {
  const columnData = useRef<ImageType[][]>(
    new Array(2).fill(null).map(() => []),
  );
  const fetchMoreCount = useRef<number>(0);
  const {loading, data, error, fetchMore, networkStatus, refetch} =
    useQuery<QueriedResultType>(graphqlQuery, {
      notifyOnNetworkStatusChange: true,
      fetchPolicy: 'network-only',
      variables: {...(variables as OperationVariables)},
    });

  const fetchingMore = networkStatus === 3;
  const refetching = networkStatus === 4;

  const renderHeader = <View>{refetching && <PLoader />}</View>; // refetch
  const renderFooter = <View>{fetchingMore && <PLoader />}</View>; // fetchMore

  const handleScrollEndTop = ({
    nativeEvent,
  }: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (nativeEvent.contentOffset.y <= 0 && !refetching) {
      fetchMoreCount.current = 0;
      refetch({...(variables as OperationVariables)});
    }
  };

  const handleFetchMore = () => {
    if (fetchingMore) return;
    // TODO bug: need to fix for response data having less than 5 images
    if (data && data instanceof Array && data.length < 10) return;
    fetchMoreCount.current = fetchMoreCount.current + 1;
    let newVariables = {...variables};
    if (updateVariables) {
      newVariables = updateVariables(variables, fetchMoreCount.current);
    }
    fetchMore({
      variables: newVariables as OperationVariables,
    });
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

  if (error)
    return (
      <PError
        errorText={`Error: ${error.message}`}
        retryFn={() => refetch({...(variables as OperationVariables)})}
      />
    );

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
            onClickImage={onClickItem}
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
