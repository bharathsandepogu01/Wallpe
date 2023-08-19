import {PropsWithChildren} from 'react';
import {ModalProps} from 'react-native';

type ToastType = 'success' | 'warning' | 'error' | 'info';

export default interface IPToastProps extends ModalProps, PropsWithChildren {
  toastType?: ToastType;
  customToast?: boolean;
  toastMessage?: string;
  onCancelToast: () => void;
  toastTimeOut?: number;
}
