import React, {useContext} from 'react';
import {View} from 'react-native';
import {AppThemeContext} from '@components/AppThemeProvider';
import IPIconProps from './types';
import getPIconThemeStyles from './styles';

function PIcon(props: IPIconProps): JSX.Element {
  const {icon: Icon} = props;
  const {stylesConfig} = useContext(AppThemeContext);

  const styles = getPIconThemeStyles(stylesConfig);

  return (
    <View
      style={[
        styles.default,
        props.backgroundColorDark && styles.backgroundColorDark,
        props.backgroundColorPrimary && styles.backgroundColorPrimary,
        props.backgroundColorPrimaryDark && styles.backgroundColorPrimaryDark,
        props.iconContainerCustomStyles && props.iconContainerCustomStyles,
      ]}>
      <Icon
        height={'50%'}
        width={'50%'}
        fill={props.iconColor ?? stylesConfig.textPrimaryColor}
      />
    </View>
  );
}

export default PIcon;
