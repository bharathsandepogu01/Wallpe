import React, {useContext} from 'react';
import {AppThemeContext} from '@components/AppThemeProvider';
import {View} from 'react-native';
import IPErrorProps from './types';
import PText from '@components/PText';
import getPErrorThemeStyles from './styles';

function PError(props: IPErrorProps): JSX.Element {
  const {stylesConfig} = useContext(AppThemeContext);

  const styles = getPErrorThemeStyles(stylesConfig);
  return (
    <View style={styles.container}>
      {props.errorText && (
        <PText error small>
          {props.errorText}
        </PText>
      )}
    </View>
  );
}

export default PError;
