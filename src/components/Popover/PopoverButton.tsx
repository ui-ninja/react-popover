import { Children } from '../../types';
import styles from './popover.module.css';
import { usePopover } from './usePopover';

export function Button({ children }: Children) {
  const { togglePopover } = usePopover();
  return (
    <button onClick={togglePopover} className={styles.trigger}>
      {children}
    </button>
  );
}
