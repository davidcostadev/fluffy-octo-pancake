import { useContext } from 'react';

import { ConfirmContext, ConfirmContextType } from './confirm-context';

export const useConfirm = (): ConfirmContextType => {
  const context = useContext(ConfirmContext);

  if (!context) {
    throw new Error('useConfirm must be used within a ConfirmProvider');
  }
  return context;
};
