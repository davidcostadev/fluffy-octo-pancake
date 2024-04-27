'use client';

import { createContext } from 'react';

export type ConfirmIcons = 'trash' | 'logout';

export interface ConfirmContextType {
  showConfirm: (message: string, icon?: ConfirmIcons) => Promise<boolean>;
}

export const ConfirmContext = createContext<ConfirmContextType | null>(null);
