'use client';

import { createContext } from 'react';

export interface ConfirmContextType {
  showConfirm: (message: string) => Promise<boolean>;
}

export const ConfirmContext = createContext<ConfirmContextType | null>(null);
