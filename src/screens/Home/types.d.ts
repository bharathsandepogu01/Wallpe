interface IUrl {
  small: string;
  full: string;
  regular: string;
}

interface IUserProfileImage {
  medium: string;
}
interface IUser {
  name: string;
  username: string;
  profile_image: IUserProfileImage;
}

export interface IImage {
  id: string;
  urls: IUrl;
  user: IUser;
  height: number;
}

export interface IImagesList {
  getImages: IImage[];
}

export interface IVariables {}
