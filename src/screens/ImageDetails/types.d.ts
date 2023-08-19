import {ToastType} from '@components/PToast/types';

export interface IToastState {
  toastType: ToastType;
  showToast: boolean;
  toastMessage: string;
}
