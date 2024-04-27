import { LogOut, Trash2 } from 'lucide-react';

import { Button } from 'core/components/ui/button';

import { ConfirmIcons } from './confirm-context';

interface ConfirmModalProps {
  icon?: ConfirmIcons;
  message: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export const ConfirmModal = ({ icon, message, onCancel, onConfirm }: ConfirmModalProps): JSX.Element => {
  const handleOverlayClick = (): void => {
    onCancel();
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    e.stopPropagation();
  };

  const iconComponent = icon ? Icons[icon] : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-gray-900 bg-opacity-50"
      onClick={handleOverlayClick}
    >
      <div className="mt-10 flex flex-col gap-2 rounded-lg bg-white p-6 shadow-lg" onClick={handleModalClick}>
        <h2 className="font-inter text-lg font-semibold">{message}</h2>
        <div className="mt-4 flex justify-end space-x-4">
          <Button type="button" onClick={onCancel}>
            Cancel
          </Button>

          <Button type="button" variant="danger" onClick={onConfirm}>
            {iconComponent} Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};

const Icons = {
  trash: <Trash2 size={16} />,
  logout: <LogOut size={16} />,
};
