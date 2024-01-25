import React, { useState } from "react";
import { Link } from "react-router-dom";

export const NavbApp = () => {
  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    setMenu(!menu);
  };

  const hideMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className="w-full flex flex-col justify-around text-center md:flex-row bg-bg200 pt-3 static">
      <header>
        <h2 className=" p-2">
          <Link to="/" className="no-underline text-accent200">
            inmoPet
          </Link>
        </h2>
      </header>
      <div
        className={`md:flex ${
          menu ? "block" : "hidden"
        } justify-center justify-items-center`}
      >
        <ul className="w-auto flex flex-col justify-between md:flex-row gap-3 mt-2">
          <li className="p-2" as={Link} to="*">
            <Link to="/5" className="no-underline  text-text200 font-semibold">
              Busco piso
            </Link>
          </li>
          <li className="p-2">About us</li>
          <li className="p-2">Inversiones</li>
          <li className="p-2">Contacto</li>
          <div className="flex gap-5 justify-around">
            <button className="bg-accent200 rounded-3xl w-28 max-h-6 mt-3 text-primary100 md:hidden">
              Login
            </button>
            <button className="bg-accent200 rounded-3xl w-28 max-h-6 mt-3 text-primary100 md:hidden">
              Alta
            </button>
          </div>
        </ul>
      </div>
      <div>
        <img
          src="/assets/menu.png"
          className={`${
            menu ? "hidden" : "block"
          } size-12 absolute top-3 right-7 md:hidden`}
          alt="menu"
          onClick={showMenu}
        />
        <img
          src="/assets/close.png"
          className={`${
            !menu ? "hidden" : "block"
          } size-12 absolute top-3 right-7 md:hidden`}
          alt="menu"
          onClick={hideMenu}
        />
      </div>
      <button
        className={`${
          menu ? "hidden" : "block"
        } md:bg-accent200 rounded-3xl w-28 max-h-6 mt-3 text-primary100`}
      >
        Login
      </button>
    </nav>
  );
};
