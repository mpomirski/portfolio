'use client';
import React from 'react';
import ButtonState from '@/utils/ButtonState';

interface NavButtonProps {
  text: ButtonState;
  source: string;
  newPage?: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({ text, source, newPage }) => {
  const onClickButton = () => {
    if (newPage) window.open(source, '_blank');
    else window.location.href = source;
  };
  return (
    <button onClick={onClickButton} className="w-full h-full">
      {text}
    </button>
  );
};

export default NavButton;
