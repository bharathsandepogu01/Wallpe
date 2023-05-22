import React, {useContext, useRef} from 'react';
import {Animated, Easing, Image} from 'react-native';
import {AppThemeContext} from '@components/AppThemeProvider';
import IPImageProps from './types';

function PIMage(props: IPImageProps): JSX.Element {
  const {stylesConfig} = useContext(AppThemeContext);

  const fadeAnimation = useRef(new Animated.Value(1)).current;

  const handleOnLoad = () => {
    Animated.timing(fadeAnimation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  };

  return <Image {...props} onLoad={handleOnLoad} />;
}

export default PIMage;
