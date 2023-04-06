import {PropsWithChildren} from 'react';

export default interface IPErrorProps extends PropsWithChildren {
  errorText?: string;
  retryFn?: () => void;
}
