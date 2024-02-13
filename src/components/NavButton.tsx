'use client';
import React from 'react';
import ButtonState from '@/utils/ButtonState';

interface NavButtonProps {
  text: ButtonState;
  activePage: ButtonState;
  source: string;
}

const NavButton: React.FC<NavButtonProps> = ({ text, activePage, source }) => {
  const onClickButton = () => {
    window.location.href = source;
  };
  if (activePage === text) {
    return (
      <button
        onClick={onClickButton}
        className="bg-[var(--background-color)] outline-none text-center w-full h-10 text-xl text-[var(--foreground-color)] max-md:text-sm"
      >
        {text.valueOf()}
      </button>
    );
  }
  return (
    <button
      onClick={onClickButton}
      className="hover:bg-[var(--background-color)] hover:text-[var(--foreground-color)] outline-none text-center w-full h-10 text-xl max-md:text-sm"
    >
      {text.valueOf()}
    </button>
  );
};

export default NavButton;
