import { useState } from 'react';
import { Children } from '../../types';
import { PopoverContext } from './context';
import { Button } from './PopoverButton';
import { Content } from './PopoverContent';
import styles from './popover.module.css';

function Popover({ children }: Children) {
  const [isPopoverOpen, setIsOpen] = useState(false);

  function togglePopover() {
    setIsOpen(!isPopoverOpen);
  }

  return (
    <PopoverContext.Provider value={{ isPopoverOpen, togglePopover }}>
      <div className={styles.popover}>{children}</div>
    </PopoverContext.Provider>
  );
}

Popover.Button = Button;
Popover.Content = Content;

export default Popover;
