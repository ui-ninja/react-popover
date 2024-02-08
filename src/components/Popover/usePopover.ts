import { useContext } from 'react';
import { PopoverContext } from './context';

export function usePopover() {
  return useContext(PopoverContext);
}
