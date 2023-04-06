import {PropsWithChildren} from 'react';

export default interface IPTextProps extends PropsWithChildren {
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
}
