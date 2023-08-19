import React, {useContext, useRef, useEffect} from 'react';
import {View, Animated, Easing} from 'react-native';
import {AppThemeContext} from '@components/AppThemeProvider';
import getPLoaderThemeStyles from './styles';

function PLoader() {
  const {stylesConfig} = useContext(AppThemeContext);
  const rotateAnimation = useRef(new Animated.Value(0)).current;

  const styles = getPLoaderThemeStyles(stylesConfig);

  const animate = () => {
    Animated.timing(rotateAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start(() => {
      rotateAnimation.setValue(0);
      animate();
    });
  };

  const rotate = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  useEffect(() => {
    animate();
  }, []);

  return (
    <Animated.View style={[styles.container, {transform: [{rotate: rotate}]}]}>
      <View style={styles.dot1} />
      <View style={styles.dot2} />
      <View style={styles.dot3} />
      <View style={styles.dot4} />
    </Animated.View>
  );
}

export default PLoader;
