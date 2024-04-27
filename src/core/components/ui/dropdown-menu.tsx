'use client';

import React, { ReactNode, cloneElement, useState } from 'react';

interface MenuOption {
  label: string;
  action: () => void;
}

interface DropdownMenuProps {
  children: ReactNode;
  options: MenuOption[];
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ children, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (action: () => void) => {
    action();
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <div onClick={toggleMenu} className="cursor-pointer">
        {cloneElement(children as React.ReactElement, { onClick: toggleMenu })}
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-lg border border-gray-300 bg-white shadow-lg">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option.action)}
              className="cursor-pointer px-4 py-2 first:rounded-t-lg last:rounded-b-lg hover:bg-gray-200 active:bg-gray-300"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
