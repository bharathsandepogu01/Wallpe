import React, {useRef, useState, useEffect, useContext} from 'react';
import {View, Animated, TouchableOpacity} from 'react-native';
import {AppThemeContext} from '@components/AppThemeProvider';
import ITabsCustomButtonProps from './types';
import getThemeStyles from './styles';

function TabsCustomButton(props: ITabsCustomButtonProps): JSX.Element {
  const {onPress, accessibilityState, icon: Icon} = props;
  const {stylesConfig} = useContext(AppThemeContext);
  const focused = accessibilityState?.selected;
  const backgroundAnimation = useRef(new Animated.Value(0)).current;
  const iconAnimation = useRef(new Animated.Value(1)).current;
  const [svgColor, setSvgColor] = useState<string>(stylesConfig.borderColor);

  const styles = getThemeStyles(stylesConfig);

  useEffect(() => {
    if (!focused) {
      Animated.timing(iconAnimation, {
        toValue: 1,
        duration: 0,
        useNativeDriver: true,
      }).start(() => {
        setSvgColor(stylesConfig.borderColor);
      });
      Animated.timing(backgroundAnimation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.stagger(100, [
        Animated.timing(backgroundAnimation, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.sequence([
          Animated.timing(iconAnimation, {
            toValue: 1.1,
            duration: 100,
            useNativeDriver: true,
          }),
          Animated.timing(iconAnimation, {
            toValue: 0.8,
            duration: 100,
            useNativeDriver: true,
          }),
        ]),
      ]).start(() => {
        setSvgColor(stylesConfig.textPrimary);
      });
    }
  }, [focused, stylesConfig]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <View style={styles.iconContainer}>
        <Animated.View
          style={[
            styles.animatedBackground,
            {transform: [{scale: backgroundAnimation}]},
          ]}></Animated.View>
        <Animated.View
          style={[styles.icon, {transform: [{scale: iconAnimation}]}]}>
          <Icon height={'55%'} width={'55%'} fill={svgColor} />
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
}

export default TabsCustomButton;
