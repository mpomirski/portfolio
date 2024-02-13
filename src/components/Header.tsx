'use client';
import NavButton from '@/components/NavButton';
import React from 'react';
import ButtonState from '@/utils/ButtonState';

interface HeaderProps {
  current_website: ButtonState;
}
const Header: React.FC<HeaderProps> = ({ current_website }) => {
  const [activePage, setActivePage] = React.useState(current_website);
  return (
    <header className="flex flex-col justify-start items-center tracking-widest max-md:text-[0.5em]">
      <div className="w-full min-h-max top-0 bg-[var(--foreground-color)]">
        <ul className="flex flex-row items-center justify-around cursor-pointer max-md:flex-col">
          <NavButton
            activePage={activePage}
            text={ButtonState.HOME}
            source="/"
          />
          <NavButton
            activePage={activePage}
            text={ButtonState.ABOUT}
            source="/about"
          />
          <NavButton
            activePage={activePage}
            text={ButtonState.PROJECTS}
            source="/projects"
          />
          <NavButton
            activePage={activePage}
            text={ButtonState.MUSIC}
            source="https://soundcloud.com/ramen-571489791"
            newPage={true}
          />
          <NavButton
            activePage={activePage}
            text={ButtonState.CONTACT}
            source="/contact"
          />
        </ul>
      </div>
      <span>**** POMIRSKI 64 BASIC V1 ****</span>
      <span>64K RAM SYSTEM 38911 BYTES FREE</span>
    </header>
  );
};

export default Header;
