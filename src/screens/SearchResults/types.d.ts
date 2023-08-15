import {IImage} from '@screens/Home/types';

export interface ISearchImagesList {
  getImagesBySearch: IImage[];
}

interface ISearchData {
  search: string;
  page: number;
  perPage: number;
}
export interface ISearchQueryVariables {
  searchData: ISearchData;
}
