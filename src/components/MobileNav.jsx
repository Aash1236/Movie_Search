import React, { useState } from "react";
import { mobileNavigation } from "../constants/Navigation";
import { NavLink } from "react-router-dom";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="fixed bottom-0 z-40 w-full bg-gray-600 lg:hidden backdrop-blur-3xl h-14 bg-opacity-60">
      <div className="flex items-center justify-between h-full p-5">
        {mobileNavigation.map((nav, index) => {
          return (
            <NavLink
              key={nav.lable + "mobileNavigation"}
              className={({ isActive }) =>
                `px-3 flex items-center h-full flex-col justify-center`
              }
            >
              <div className="text-2xl">{nav.icon}</div>
              <p className="text-sm">{nav.lable}</p>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default MobileNav;
