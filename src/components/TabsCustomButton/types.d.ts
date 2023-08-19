import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';

export default interface ITabsCustomButtonProps
  extends BottomTabBarButtonProps {
  icon: React.FC<SvgProps>;
}
