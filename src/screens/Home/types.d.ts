interface IUrl {
  small: string;
}

interface IUser {
  username: string;
  portfolio_url: null | string;
}

export interface IImage {
  urls: IUrl;
  user: IUser;
  height?: number;
}

export interface IImagesList {
  getImages: IImage[];
}
