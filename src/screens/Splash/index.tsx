import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

function Splash(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Splash Screen</Text>
    </View>
  );
}

export default Splash;
