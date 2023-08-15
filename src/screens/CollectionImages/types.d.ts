export interface ISearchInputs {
  collectionId: string;
  page: number;
  perPage: number;
}

export interface ISearchData {
  searchData: ISearchInputs;
}

export interface IProfileImage {
  small: string;
}

export interface ICollectionUser {
  name: string;
  profile_image: IProfileImage;
}

export interface ICoverPhotoUrls {
  small: string;
}

export interface ICoverPhoto {
  urls: ICoverPhotoUrls;
}

export interface IIMageUrl {
  small: string;
  full: string;
  regular: string;
}

export interface IGetCollectionImages {
  id: string;
  title: string;
  total_photos: number;
  cover_photo: ICoverPhoto;
  user: ICollectionUser;
  urls: IIMageUrl;
  height: number;
}

export interface IGetCollectionsImagesQueryResult {
  getImagesByCollection: IGetCollectionImages[];
}
