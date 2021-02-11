import { useState } from 'react';

export const useDrawer = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = open => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

  return [open, toggleDrawer];
};
