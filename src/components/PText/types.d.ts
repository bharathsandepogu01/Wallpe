import {PropsWithChildren} from 'react';
import { StyleProp, TextStyle, TextProps } from 'react-native';

export default interface IPTextProps extends PropsWithChildren, TextProps {
  tiny?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  bold?: boolean;
  semiBold?: boolean;
  mediumText?: boolean;
  light?: boolean;
  secondaryTextColor?: boolean;
  tertiaryTextColor?: boolean;
  primaryColor?: boolean;
  primaryColorDark?: boolean;
  error?: boolean;
  extraLarge?: boolean;
  customStyle?: StyleProp<TextStyle>;
}
