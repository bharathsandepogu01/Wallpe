import {PropsWithChildren} from 'react';

export default interface IPToggleProps extends PropsWithChildren {
  enableFn?: () => void;
  disableFn?: () => void;
  enabled?: boolean;
}
