import { Children } from '../../types';
import styles from './popover.module.css';
import { usePopover } from './usePopover';

export function Content({ children }: Children) {
  const { isPopoverOpen } = usePopover();
  return (
    <>
      {isPopoverOpen ? <div className={styles.content}>{children}</div> : null}
    </>
  );
}
