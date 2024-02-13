'use client';
import NavButton from '@/components/NavButton';
import React from 'react';
export enum ButtonState {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  PROJECTS = 'PROJECTS',
  CONTACT = 'CONTACT',
}
const Header: React.FC = () => {
  const [activePage, setActivePage] = React.useState(ButtonState.HOME);
  return (
    <header className="flex flex-col justify-start items-center tracking-widest max-md:text-[0.5em]">
      <div className="w-full min-h-max top-0 bg-[var(--foreground-color)]">
        <ul className="flex flex-row items-center justify-around cursor-pointer max-md:flex-col">
          <NavButton activePage={activePage} text={ButtonState.HOME} />
          <NavButton activePage={activePage} text={ButtonState.ABOUT} />
          <NavButton activePage={activePage} text={ButtonState.PROJECTS} />
          <NavButton activePage={activePage} text={ButtonState.CONTACT} />
        </ul>
      </div>
      <span>**** POMIRSKI 64 BASIC V1 ****</span>
      <span>64K RAM SYSTEM 38911 BYTES FREE</span>
    </header>
  );
};

export default Header;
