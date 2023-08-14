import React, {useContext} from 'react';
import {AppThemeContext} from '@components/AppThemeProvider';
import {Pressable, View} from 'react-native';
import ReloadIcon from '@assets/icons/reload-icon.svg';
import IPErrorProps from './types';
import PText from '@components/PText';
import getPErrorThemeStyles from './styles';
import PIcon from '@components/PIcon';

function PError(props: IPErrorProps): JSX.Element {
  const {stylesConfig} = useContext(AppThemeContext);

  const styles = getPErrorThemeStyles(stylesConfig);

  const handlePressRetry = () => {
    if (!props.retryFn) return;
    props.retryFn();
  };

  return (
    <View style={styles.container}>
      {props.errorText && (
        <PText error small>
          {props.errorText}
        </PText>
      )}
      {props.retryFn && (
        <Pressable onPress={handlePressRetry}>
          <PIcon
            icon={ReloadIcon}
            iconContainerCustomStyles={styles.iconCustomStyles}
          />
        </Pressable>
      )}
    </View>
  );
}

export default PError;
