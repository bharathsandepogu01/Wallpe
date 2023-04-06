import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import PText from '@components/PText';

function Collections(): JSX.Element {
  return (
    <View style={styles.container}>
      <PText large>Collections Screen</PText>
    </View>
  );
}

export default Collections;
