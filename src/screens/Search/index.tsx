import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import PText from '@components/PText';

function Search(): JSX.Element {
  return (
    <View style={styles.container}>
      <PText large>Search Screen</PText>
    </View>
  );
}

export default Search;
