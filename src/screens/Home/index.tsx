import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

function Home(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
}

export default Home;
