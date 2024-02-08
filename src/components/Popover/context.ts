import { createContext } from 'react';

export const PopoverContext = createContext({
  isPopoverOpen: false,
  togglePopover: () => {},
});
