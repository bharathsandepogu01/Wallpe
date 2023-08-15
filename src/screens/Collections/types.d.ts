export interface ISearchInputs {
  page: number;
  perPage: number;
}

export interface ISearchData {
  searchData: ISearchInputs;
}

export interface ICollectionUser {
  name: string;
}

export interface ICoverPhotoUrls {
  small: string;
}

export interface ICoverPhoto {
  urls: ICoverPhotoUrls;
}

export interface IGetCollections {
  id: string;
  title: string;
  total_photos: number;
  cover_photo: ICoverPhoto;
  user: ICollectionUser;
}

export interface ISearchDataResults {
  getCollections: IGetCollections[];
}
