import {DocumentNode} from 'graphql';

// T -> each queried response item(image object) type
// U -> queried response type

export interface IPImageListViewProps<T, U> {
  getImageUrlFromListItemFn: (item: T) => string;
  getListFromQueriedResponseFn: (response: U) => T[];
  getImageHeightFromListItem: (item: T) => number;
  onClickItem: (item: T) => void;
  graphqlQuery: DocumentNode;
}

export type ImageWithHeight = {
  height: number;
};
