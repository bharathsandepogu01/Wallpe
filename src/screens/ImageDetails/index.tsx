import React, {useRef, useContext} from 'react';
import {
  View,
  Pressable,
  Animated,
  Easing,
  useWindowDimensions,
} from 'react-native';
import {AppThemeContext} from '@components/AppThemeProvider';
import PIMage from '@components/PImage';
import {AppStackScreenProps} from '@navigation/types';
import PIcon from '@components/PIcon';
import BackArrow from '@assets/icons/arrow-left-icon.svg';
import getImageDetailsThemeStyles from './styles';

function ImageDetails({
  navigation,
  route,
}: AppStackScreenProps<'Image Details'>): JSX.Element {
  const {params} = route;
  const fadeAnimation = useRef(new Animated.Value(1)).current;
  const {stylesConfig} = useContext(AppThemeContext);
  const {width} = useWindowDimensions();

  const styles = getImageDetailsThemeStyles(stylesConfig);

  const handlePressInImage = () => {
    Animated.timing(fadeAnimation, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  };

  const handlePressOutImage = () => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={{flex: 1}}
        onPressIn={handlePressInImage}
        onPressOut={handlePressOutImage}>
        <PIMage
          source={{uri: params.imageUrl}}
          resizeMode="cover"
          style={styles.imageContainer}
        />
      </Pressable>

      <Animated.View
        style={[
          styles.backButton,
          {
            opacity: fadeAnimation,
            top: width * 0.04,
            left: width * 0.04,
          },
        ]}>
        <Pressable onPress={handleBack}>
          <PIcon icon={BackArrow} backgroundColorDark />
        </Pressable>
      </Animated.View>

      <Animated.View
        style={[
          styles.infoContainer,
          {
            bottom: width * 0.05,
            opacity: fadeAnimation,
          },
        ]}></Animated.View>
    </View>
  );
}

export default ImageDetails;
