export default interface IRenderColumnImagesProps<T> {
  getImageHeight: (item: T) => number;
  getImageUrlFn: (item: T) => string;
  index: number;
  itemsArr: T[];
}
