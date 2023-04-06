import React, {useEffect} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {AppStackScreenProps} from '@navigation/types';
import PText from '@components/PText';

function Splash({
  navigation,
  route,
}: AppStackScreenProps<'Splash'>): JSX.Element {
  useEffect(() => {
    const timeFn = setTimeout(() => {
      navigation.navigate('Home Tab', {screen: 'Papier'});
    }, 3000);

    return () => {
      clearTimeout(timeFn);
    };
  }, []);

  return (
    <View style={styles.container}>
      <PText bold extraLarge>
        Papier
      </PText>
    </View>
  );
}

export default Splash;
