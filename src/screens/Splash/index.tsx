import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import {AppStackScreenProps} from '@navigation/types';
import PText from '@components/PText';

function Splash({
  navigation,
  route,
}: AppStackScreenProps<'Splash'>): JSX.Element {
  useEffect(() => {
    const timeFn = setTimeout(() => {
      navigation.replace('Home Tab', {screen: 'Wallpe'});
    }, 3000);
    return () => {
      clearTimeout(timeFn);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('@assets/images/appLogo.png')}
        style={styles.logo}
      />
      <PText bold extraLarge>
        Wallpe
      </PText>
    </View>
  );
}

export default Splash;
