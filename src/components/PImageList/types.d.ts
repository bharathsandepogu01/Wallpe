import {DocumentNode} from 'graphql';

// T -> each queried response item(image object) type
// U -> queried response type
// V -> variables passed to query

export interface IPImageListViewProps<T, U, V> {
  getImageUrlFromListItemFn: (item: T) => string;
  getListFromQueriedResponseFn: (response: U) => T[];
  getImageHeightFromListItem: (item: T) => number;
  onClickItem: (item: T) => void;
  graphqlQuery: DocumentNode;
  variables: V;
  updateVariables: (variables: V, fetchCallCount: number) => V;
}

export type ImageWithHeight = {
  height: number;
};
