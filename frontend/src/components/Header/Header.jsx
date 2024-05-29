import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className="bg-gray-900" id="navbar">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <button
              className="text-white focus:outline-none lg:hidden"
              onClick={handleNavbar}
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 5h22v2H1V5zm0 6h22v2H1v-2zm0 6h22v2H1v-2z"
                />
              </svg>
            </button>
          </div>
          <div className={toggleMenu ? "block" : "hidden lg:flex"}>
            <ul className="lg:flex flex-col lg:flex-row list-none">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link text-white uppercase text-lg font-semibold py-2 px-4 block"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="livres"
                  className="nav-link text-white uppercase text-lg font-semibold py-2 px-4 block"
                >
                  Livres
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="emprunts"
                  className="nav-link text-white uppercase text-lg font-semibold py-2 px-4 block"
                >
                  Emprunts
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="clients"
                  className="nav-link text-white uppercase text-lg font-semibold py-2 px-4 block"
                >
                  Clients
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
