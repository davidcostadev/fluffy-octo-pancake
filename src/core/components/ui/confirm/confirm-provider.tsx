'use client';

import { useState } from 'react';

import { ConfirmContext } from './confirm-context';
import { ConfirmModal } from './confirm-modal';

interface ConfirmProviderProps {
  children: React.ReactNode;
}

export const ConfirmProvider = ({ children }: ConfirmProviderProps): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [resolvePromise, setResolvePromise] = useState<((value: boolean) => void) | null>(null);

  const showConfirm = (msg: string): Promise<boolean> => {
    setMessage(msg);
    setIsModalOpen(true);

    return new Promise((resolve) => {
      setResolvePromise(() => resolve);
    });
  };

  const handleConfirm = (): void => {
    if (resolvePromise) {
      resolvePromise(true);
      setIsModalOpen(false);
    }
  };

  const handleCancel = (): void => {
    if (resolvePromise) {
      resolvePromise(false);
      setIsModalOpen(false);
    }
  };

  return (
    <ConfirmContext.Provider value={{ showConfirm }}>
      {children}
      {isModalOpen && <ConfirmModal message={message} onConfirm={handleConfirm} onCancel={handleCancel} />}
    </ConfirmContext.Provider>
  );
};
