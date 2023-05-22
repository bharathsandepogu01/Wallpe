interface IUrl {
  small: string;
  full: string;
  regular: string;
}

interface IUser {
  username: string;
  portfolio_url: null | string;
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
