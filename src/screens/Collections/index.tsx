import React, {useMemo, useRef} from 'react';
import {View, Pressable, ImageBackground, FlatList} from 'react-native';
import styles from './styles';
import PText from '@components/PText';
import {useQuery, gql} from '@apollo/client';
import {IGetCollections, ISearchData, ISearchDataResults} from './types';
import PLoader from '@components/PLoader';
import PError from '@components/PError';
import {useNavigation} from '@react-navigation/native';
import {AppBottomTabScreenProps} from '@navigation/types';

const GET_COLLECTION_QUERY = gql`
  query getCollectionsList($searchData: CollectionInput) {
    getCollections(input: $searchData) {
      id
      title
      total_photos
      cover_photo {
        urls {
          small
        }
      }
      user {
        name
      }
    }
  }
`;

const PER_PAGE_COUNT = 10;

function Collections(): JSX.Element {
  const navigation =
    useNavigation<AppBottomTabScreenProps<'Collections'>['navigation']>();

  const fetchMoreCount = useRef<number>(1);
  const {loading, data, error, fetchMore, networkStatus, refetch} = useQuery<
    ISearchDataResults,
    ISearchData
  >(GET_COLLECTION_QUERY, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-first',
    variables: {
      searchData: {
        page: 1,
        perPage: PER_PAGE_COUNT,
      },
    },
  });

  const fetchingMore = networkStatus === 3;
  const refetching = networkStatus === 4;

  const renderHeader = <View>{refetching && <PLoader />}</View>; // refetch
  const renderFooter = <View>{fetchingMore && <PLoader />}</View>; // fetchMore

  const handleRefetch = () => {
    if (!refetching) {
      fetchMoreCount.current = 0;
      refetch({
        searchData: {
          page: 1,
          perPage: PER_PAGE_COUNT,
        },
      });
    }
  };

  const handleFetchMore = () => {
    if (!data?.getCollections || fetchingMore) return;
    const queriedList = data.getCollections;
    if (queriedList.length < PER_PAGE_COUNT) return;
    fetchMoreCount.current = fetchMoreCount.current + 1;
    fetchMore({
      variables: {
        searchData: {
          page: fetchMoreCount.current,
          perPage: PER_PAGE_COUNT,
        },
      },
    });
  };

  const handleOnPressCollection = (
    collectionId: string,
    collectionTitle: string,
  ) => {
    navigation.navigate('Collection Images', {collectionId, collectionTitle});
  };

  const newColumnData: IGetCollections[] = useMemo(() => {
    if (!data?.getCollections) return [];

    const queriedList = data.getCollections;

    return queriedList;
  }, [data]);

  if (loading && !data) return <PLoader />;

  if (error || newColumnData.length === 0)
    return (
      <PError
        errorText={`unable to fetch wallpapers, please try again...`}
        retryFn={handleRefetch}
      />
    );

  return (
    <View style={styles.categoriesContainer}>
      <FlatList
        data={newColumnData}
        renderItem={({index, item}) => {
          return (
            <Pressable
              onPress={() => handleOnPressCollection(item.id, item.title)}
              style={styles.categoryItem}
              key={item.id}>
              <ImageBackground
                source={{
                  uri: item.cover_photo.urls.small,
                }}
                style={styles.categoryBox}>
                <View style={styles.categoryView}>
                  <PText medium bold customStyle={styles.categoryText}>
                    {`${item.total_photos} Photos`}
                  </PText>
                  <PText large bold customStyle={styles.categoryText}>
                    {item.title}
                  </PText>
                  <PText medium bold customStyle={styles.categoryText}>
                    {item.user.name}
                  </PText>
                </View>
              </ImageBackground>
            </Pressable>
          );
        }}
        numColumns={2}
        onEndReached={handleFetchMore}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={renderFooter}
        ListHeaderComponent={renderHeader}
      />
    </View>
  );
}

export default Collections;
