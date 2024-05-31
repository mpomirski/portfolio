'use client';
import NavButton from '@/components/NavButton';
import React from 'react';
import ButtonState from '@/utils/ButtonState';
const buttons = [
  { key: 1, text: ButtonState.HOME, source: '/' },
  { key: 2, text: ButtonState.ABOUT, source: '/about' },
  { key: 3, text: ButtonState.PROJECTS, source: '/projects' },
  {
    key: 4,
    text: ButtonState.MUSIC,
    source: 'https://soundcloud.com/ramen-571489791',
    newPage: true,
  },
  { key: 5, text: ButtonState.CONTACT, source: '/contact' },
];

interface HeaderProps {
  current_website: ButtonState;
}
const Header: React.FC<HeaderProps> = ({ current_website }) => {
  const activePage = current_website;
  return (
    <>
      <header className="flex flex-col justify-start items-center tracking-widest max-md:text-[0.5em] sticky top-0 z-10">
        <div className="w-full min-h-max top-0 bg-[var(--foreground-color)]">
          <ul className="flex flex-row items-center justify-evenly cursor-pointer max-md:flex-col">
            {buttons.map((button) => (
              <li
                key={button.key}
                className={
                  activePage == button.text
                    ? 'bg-[var(--background-color)] outline-none text-center w-full h-10 text-xl text-[var(--foreground-color)] max-md:text-sm'
                    : 'hover:bg-[var(--background-color)] hover:text-[var(--foreground-color)] outline-none text-center w-full h-10 text-xl max-md:text-sm'
                }
              >
                <NavButton
                  key={button.key}
                  text={button.text}
                  source={button.source}
                  newPage={button.newPage}
                />
              </li>
            ))}
          </ul>
        </div>
      </header>
      <span className="flex flex-col items-center">
        <span>**** POMIRSKI 64 BASIC V1 ****</span>
        <span>64K RAM SYSTEM 38911 BYTES FREE</span>
      </span>
    </>
  );
};

export default Header;
