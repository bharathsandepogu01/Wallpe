import React, {useContext, useRef} from 'react';
import {View, ImageBackground, Animated, Easing} from 'react-native';
import {AppThemeContext} from '@components/AppThemeProvider';
import IPImageProps from './types';
import getPImageThemeStyles from './styles';

function PIMage(props: IPImageProps): JSX.Element {
  const {stylesConfig} = useContext(AppThemeContext);

  const styles = getPImageThemeStyles(stylesConfig);

  const fadeAnimation = useRef(new Animated.Value(1)).current;

  const handleOnLoad = () => {
    Animated.timing(fadeAnimation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  };

  return (
    <ImageBackground {...props} onLoad={handleOnLoad}>
      <Animated.View
        style={[styles.backUpContainer, {opacity: fadeAnimation}]}
      />
    </ImageBackground>
  );
}

export default PIMage;
