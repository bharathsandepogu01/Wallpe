import React, {useContext, useRef, useState, useEffect} from 'react';
import {View, TouchableOpacity, Animated, Easing} from 'react-native';
import {AppThemeContext} from '@components/AppThemeProvider';
import getPToggleThemeStyles from './styles';
import {getDP} from '@styles/common';
import IPToggleProps from './types';

function PToggle(props: IPToggleProps): JSX.Element {
  const [enabled, setEnabled] = useState<boolean>(false);

  const toggleAnimation = useRef(new Animated.Value(0)).current;

  const {stylesConfig} = useContext(AppThemeContext);

  const styles = getPToggleThemeStyles(stylesConfig);

  useEffect(() => {
    setEnabled(!!props.enabled);
    if (!!props.enabled) animateRight();
    if (!props.enabled) animateLeft();
  }, [props.enabled]);

  const animateRight = () => {
    Animated.timing(toggleAnimation, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  };

  const animateLeft = () => {
    Animated.timing(toggleAnimation, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  };

  const handleOnPress = () => {
    setEnabled(!enabled);
    if (enabled) {
      // disable actions
      animateLeft();
      props.disableFn && props.disableFn();
    } else {
      // enable actions
      animateRight();
      props.enableFn && props.enableFn();
    }
  };

  const translateValue = toggleAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [getDP(0), getDP(35)],
  });

  return (
    <TouchableOpacity onPress={handleOnPress} activeOpacity={1}>
      <View style={styles.toggleContainer}>
        <View
          style={[
            styles.toggleBackground,
            {
              backgroundColor: enabled
                ? stylesConfig.primary
                : stylesConfig.inActiveColor,
            },
          ]}
        />
        <Animated.View
          style={[
            styles.toggleCircle,
            {transform: [{translateX: translateValue}]},
          ]}
        />
      </View>
    </TouchableOpacity>
  );
}

export default PToggle;
