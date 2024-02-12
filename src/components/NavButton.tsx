'use client';
import React from 'react';
import { ButtonState } from './Header';
interface NavButtonProps {
  text: ButtonState;
  activePage: ButtonState;
}

const NavButton: React.FC<NavButtonProps> = ({ text, activePage }) => {
  if (activePage === text) {
    return (
      <button className="bg-[var(--background-color)] outline-none text-center w-full h-10 text-xl text-[var(--foreground-color)]">
        {text.valueOf()}
      </button>
    );
  }
  return (
    <button className="hover:bg-[var(--background-color)] hover:text-[var(--foreground-color)] outline-none text-center w-full h-10 text-xl">
      {text.valueOf()}
    </button>
  );
};

export default NavButton;
