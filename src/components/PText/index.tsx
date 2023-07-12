import React, {useContext} from 'react';
import {AppThemeContext} from '@components/AppThemeProvider';
import {Text} from 'react-native';
import IPTextProps from './types';
import getPTextThemeStyles from './styles';

function PText(props: IPTextProps): JSX.Element {
  const {children} = props;
  const {stylesConfig} = useContext(AppThemeContext);

  const styles = getPTextThemeStyles(stylesConfig);

  return (
    <Text
      style={[
        styles.default,
        props.bold && styles.boldText,
        props.semiBold && styles.semiBoldText,
        props.mediumText && styles.mediumText,
        props.light && styles.lightText,
        props.extraLarge && styles.extraLarge,
        props.large && styles.large,
        props.medium && styles.medium,
        props.small && styles.small,
        props.tiny && styles.tiny,
        props.primaryColor && styles.primaryColor,
        props.primaryColorDark && styles.primaryColorDark,
        props.secondaryTextColor && styles.secondaryTextColor,
        props.tertiaryTextColor && styles.tertiaryTextColor,
        props.error && styles.error,
        props.customStyle && props.customStyle,
      ]}>
      {children}
    </Text>
  );
}

export default PText;
