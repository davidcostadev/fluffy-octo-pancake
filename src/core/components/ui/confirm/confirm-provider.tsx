'use client';

import { useState } from 'react';

import { ConfirmContext, ConfirmIcons } from './confirm-context';
import { ConfirmModal } from './confirm-modal';

interface ConfirmProviderProps {
  children: React.ReactNode;
}

export const ConfirmProvider = ({ children }: ConfirmProviderProps): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [icon, setIcon] = useState<ConfirmIcons | undefined>(undefined);
  const [resolvePromise, setResolvePromise] = useState<((value: boolean) => void) | null>(null);

  const showConfirm = (msg: string, icon?: ConfirmIcons): Promise<boolean> => {
    setMessage(msg);
    setIcon(icon);
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
      {isModalOpen && <ConfirmModal message={message} icon={icon} onConfirm={handleConfirm} onCancel={handleCancel} />}
    </ConfirmContext.Provider>
  );
};
