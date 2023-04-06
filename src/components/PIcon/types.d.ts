import {PropsWithChildren} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

export default interface IPIconProps extends PropsWithChildren {
  icon: React.FC<SvgProps>;
  //   iconContainerStyle: ;
  backgroundColorPrimary?: boolean;
  backgroundColorPrimaryDark?: boolean;
  backgroundColorDark?: boolean;
  iconColor?: string;
  iconContainerCustomStyles?: StyleProp<ViewStyle>;
}
