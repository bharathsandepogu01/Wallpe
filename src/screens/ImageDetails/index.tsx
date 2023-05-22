import React, {useRef, useContext, useState} from 'react';
import {
  View,
  Pressable,
  Animated,
  Easing,
  useWindowDimensions,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {AppStackScreenProps} from '@navigation/types';
import RNFetchBlob from 'rn-fetch-blob';
import {setWall} from 'rn-set-wallpaper';
import {captureRef} from 'react-native-view-shot';
import {AppThemeContext} from '@components/AppThemeProvider';
import PIMage from '@components/PImage';
import PIcon from '@components/PIcon';
import PLoader from '@components/PLoader';
import PToast from '@components/PToast';
import BackArrow from '@assets/icons/arrow-left-icon.svg';
import DownloadIcon from '@assets/icons/download-icon.svg';
import InfoIcon from '@assets/icons/info-icon.svg';
import SetAsWallpaperIcon from '@assets/icons/set-as-wallpaper-icon.svg';
import getImageDetailsThemeStyles from './styles';
import {IToastState} from './types';

function ImageDetails({
  navigation,
  route,
}: AppStackScreenProps<'Image Details'>): JSX.Element {
  const {params} = route;
  const fadeAnimation = useRef(new Animated.Value(1)).current;
  const imageViewRef = useRef(null);
  const {stylesConfig} = useContext(AppThemeContext);
  const {width} = useWindowDimensions();
  const [toastState, setToastState] = useState<IToastState>({
    toastType: 'info',
    showToast: false,
    toastMessage: '',
  });
  const [loading, setLoading] = useState<boolean>(true);

  const isIOSPlatform = Platform.OS === 'ios';
  const isAndroidPlatform = Platform.OS === 'android';

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

  const handleSetToastState = (toastStateChanges: IToastState) => {
    setToastState(prevState => {
      return {...prevState, ...toastStateChanges};
    });
  };

  const openImageFile = (filePath: string) => {
    if (isAndroidPlatform) {
      RNFetchBlob.android.actionViewIntent(filePath, 'image/*');
    } else if (isIOSPlatform) {
      RNFetchBlob.ios.openDocument(filePath);
    }
  };

  const downloadImage = (imageUrl: string) => {
    const filePath =
      RNFetchBlob.fs.dirs.PictureDir + '/image_' + `${Date.now()}` + '.png';
    setLoading(true);
    RNFetchBlob.config({
      path: filePath,
      fileCache: true,
    })
      .fetch('GET', imageUrl)
      .then(res => {
        setLoading(false);
        handleSetToastState({
          toastType: 'success',
          toastMessage: 'Downloaded Image Successfully',
          showToast: true,
        });
        openImageFile(res.path());
      })
      .catch(error => {
        setLoading(false);
        console.error(error);
        handleSetToastState({
          toastType: 'error',
          toastMessage:
            'something went wrong while downloading image, please try again...',
          showToast: true,
        });
      });
  };

  const handleDownload = async (imageUrl: string) => {
    if (isAndroidPlatform) {
      const isPermissionGiven = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );
      if (!isPermissionGiven) {
        try {
          const permissionRequest = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          );
          if (permissionRequest === PermissionsAndroid.RESULTS.GRANTED) {
            downloadImage(imageUrl);
          } else {
            handleSetToastState({
              toastType: 'error',
              toastMessage:
                'Media access permission required in order to download image...',
              showToast: true,
            });
          }
        } catch (error) {
          console.error(error);
          handleSetToastState({
            toastType: 'error',
            toastMessage:
              'something went wrong while permission access, please try again...',
            showToast: true,
          });
        }
      } else {
        downloadImage(imageUrl);
      }
    } else {
      downloadImage(imageUrl);
    }
  };

  const handleSetAsWallpaper = async () => {
    try {
      setLoading(true);
      const imagePath = await captureRef(imageViewRef, {
        format: 'png',
        quality: 1,
        fileName: 'papier-home-screen-capture-' + `${Date.now()}`,
      });
      const res = await setWall(imagePath);
      setLoading(false);
      handleSetToastState({
        toastType: 'success',
        toastMessage: 'successfully completed set as wallpaper',
        showToast: true,
      });
    } catch (error) {
      setLoading(false);
      console.error(error);
      handleSetToastState({
        toastType: 'error',
        toastMessage:
          'something went wrong while setting as wallpaper, please try again...',
        showToast: true,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={{flex: 1}}
        onPressIn={handlePressInImage}
        onPressOut={handlePressOutImage}
        ref={imageViewRef}>
        <PIMage
          source={{uri: params.imageUrl}}
          resizeMode="cover"
          style={styles.imageContainer}
          onLoadEnd={() => setLoading(false)}
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
        ]}>
        <Pressable onPress={() => handleDownload(params.imageUrl)}>
          <PIcon icon={DownloadIcon} backgroundColorDark />
        </Pressable>
        <Pressable onPress={handleSetAsWallpaper}>
          <PIcon icon={SetAsWallpaperIcon} backgroundColorDark />
        </Pressable>
        <Pressable>
          <PIcon icon={InfoIcon} backgroundColorDark />
        </Pressable>
      </Animated.View>

      {loading && (
        <View style={styles.loaderContainer}>
          <PLoader />
        </View>
      )}

      <PToast
        toastType={toastState.toastType}
        toastMessage={toastState.toastMessage}
        toastTimeOut={3000}
        visible={toastState.showToast}
        onCancelToast={() =>
          handleSetToastState({
            showToast: false,
            toastMessage: '',
            toastType: 'info',
          })
        }
      />
    </View>
  );
}

export default ImageDetails;
