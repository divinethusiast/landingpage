import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
  <nav className="sticky top-0 z-50 bg-[#f1f5f9] shadow-md border-b border-borderColor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-xl font-bold text-gray-800">
              WOO
            </div>
          </div>
          {/* Hamburger Icon  for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {!menuOpen ? (
                <FontAwesomeIcon icon={faBars} className="text-2xl" />
              ) : (
                <FontAwesomeIcon icon={faTimes} className="text-2xl" />
              )}
            </button>
          </div>
          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#homepage"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#"
                className="cursor-pointer px-8 py-2 bg-[#296eec] hover:bg-[#296eec]/60 transition-all text-white rounded-lg"
              >
                Curate
              </a>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#homepage"
              className="block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#about"
              className="block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#"
              className="block cursor-pointer px-4 py-1 bg-[#296eec] hover:bg-[#296eec]/60 transition-all text-white rounded-lg mt-2"
            >
              Curate
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;