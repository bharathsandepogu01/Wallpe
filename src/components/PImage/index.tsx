import React, {useContext, useRef} from 'react';
import {ImageBackground, Animated, Easing} from 'react-native';
import {AppThemeContext} from '@components/AppThemeProvider';
import IPImageProps from './types';
import getPImageThemeStyles from './styles';

const randomColors = [
  '#E7A4B5',
  '#FCD4A0',
  '#FFAD8D',
  '#B4A19E',
  '#A6C4BE',
  '#D9CDC3',
  '#DCDDC5',
  '#EDDACE',
  '#DDC5C5',
  '#DDC5C5',
  '#BAB8F3',
  '#F2C1F3',
  '#C6E8EE',
  '#FCF7E7',
  '#F7DDCD',
];

function PIMage(props: IPImageProps): JSX.Element {
  const {stylesConfig} = useContext(AppThemeContext);
  const color = useRef<string>(randomColors[Math.floor(Math.random() * 15)]);
  const fadeAnimation = useRef(new Animated.Value(1)).current;

  const Styles = getPImageThemeStyles(stylesConfig);

  const handleOnLoad = () => {
    Animated.timing(fadeAnimation, {
      toValue: 0,
      useNativeDriver: true,
      delay: 250,
      easing: Easing.linear,
    }).start();
  };

  return (
    <ImageBackground
      {...props}
      imageStyle={Styles.wrapper}
      onLoad={handleOnLoad}>
      <Animated.View
        style={[
          Styles.wrapper,
          {backgroundColor: color.current, opacity: fadeAnimation},
        ]}
      />
    </ImageBackground>
  );
}

export default PIMage;
