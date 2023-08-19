import React, {useContext, useEffect} from 'react';
import {Modal, View} from 'react-native';
import PText from '@components/PText';
import {AppThemeContext} from '@components/AppThemeProvider';
import PIcon from '@components/PIcon';
import ErrorIcon from '@assets/icons/error-circle-icon.svg';
import SuccessIcon from '@assets/icons/check-circle-icon.svg';
import WarningIcon from '@assets/icons/warning-icon.svg';
import InfoIcon from '@assets/icons/info-circle-icon.svg';
import IPToastProps from './types';
import getPToastThemeStyles from './styles';

function PToast(props: IPToastProps) {
  const {
    customToast,
    toastMessage = '',
    toastType,
    onCancelToast,
    toastTimeOut = 1000,
    children,
    ...restProps
  } = props;

  // default color styles is of info type

  useEffect(() => {
    const timeOut = setTimeout(() => {
      onCancelToast();
    }, toastTimeOut);
    return () => {
      clearTimeout(timeOut);
    };
  }, [restProps.visible, toastTimeOut]);

  const {stylesConfig} = useContext(AppThemeContext);
  const styles = getPToastThemeStyles(stylesConfig);

  const errorToast = toastType === 'error';
  const successToast = toastType === 'success';
  const warningToast = toastType === 'warning';

  const color = successToast
    ? stylesConfig.success
    : warningToast
    ? stylesConfig.warning
    : errorToast
    ? stylesConfig.error
    : stylesConfig.primaryDark;

  const Icon = successToast
    ? SuccessIcon
    : warningToast
    ? WarningIcon
    : errorToast
    ? ErrorIcon
    : InfoIcon;

  return (
    <Modal transparent animationType={'fade'} {...restProps}>
      {!customToast ? (
        <View style={styles.toastContainer}>
          <View style={styles.contentContainer}>
            <PIcon icon={Icon} iconColor={color} />
            <PText
              small
              numberOfLines={1}
              ellipsizeMode={'tail'}
              customStyle={styles.message}>
              {toastMessage}
            </PText>
          </View>
        </View>
      ) : (
        children
      )}
    </Modal>
  );
}

export default PToast;
