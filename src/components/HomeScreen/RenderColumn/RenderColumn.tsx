import React from 'react';
import {View, Image} from 'react-native';
import {IImage} from '@screens/Home/types';
import appSpacingConfig from '@styles/spacing';
import PIMage from '@components/PImage';

function RenderColumn({
  index,
  item: columnData,
}: {
  index: number;
  item: IImage[];
}) {
  return (
    <View
      style={{
        flex: 1,
        width: '50%',
      }}
      key={index}>
      {columnData.map((item, index) => {
        return (
          <PIMage
            source={{uri: item.urls.small}}
            style={{
              height: item.height,
              borderRadius: 4,
              margin: appSpacingConfig.margin4,
            }}
            borderRadius={4}
            key={`${item.urls.small}${index}`}
          />
        );
      })}
    </View>
  );
}

export default RenderColumn;
