import React from 'react';
import {View, Pressable} from 'react-native';
import appSpacingConfig from '@styles/spacing';
import PIMage from '@components/PImage';
import IRenderColumnImagesProps from './types';

function RenderColumnImages<T>({
  index,
  itemsArr: columnData,
  getImageHeight,
  getImageUrlFn,
  onClickImage,
}: IRenderColumnImagesProps<T>) {
  return (
    <View
      style={{
        flex: 1,
        width: '50%',
      }}
      key={index}>
      {columnData.map((item, index) => {
        const imageHeight = getImageHeight(item);
        const imageUrl = getImageUrlFn(item);
        return (
          <Pressable
            onPress={() => onClickImage(item)}
            key={`${imageUrl}${index}`}>
            <PIMage
              source={{uri: imageUrl}}
              style={{
                height: imageHeight,
                borderRadius: 4,
                margin: appSpacingConfig.margin4,
              }}
            />
          </Pressable>
        );
      })}
    </View>
  );
}

export default RenderColumnImages;
