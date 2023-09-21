import React, { useEffect } from 'react';
import { NavBar } from './NavBar';

export const BurgerMenu = ({ isOpen, setOpen }) => {
  useEffect(() => {
    const root = window.document.documentElement;
    if (isOpen) {
      root.style.overflow = 'hidden';
    } else {
      root.style = '';
    }
  });

  return (
    <div className={`burgerMenu md:hidden ${!isOpen && 'hideBurger'}`}>
      <nav className="h-full flex flex-col justify-center items-center gap-[18px]">
        <NavBar setOpen={setOpen} />
      </nav>
    </div>
  );
};
