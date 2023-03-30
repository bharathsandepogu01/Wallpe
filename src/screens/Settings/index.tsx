import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

function Settings(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings Screen</Text>
    </View>
  );
}

export default Settings;
