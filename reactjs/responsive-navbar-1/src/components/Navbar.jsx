import React, { useState } from 'react';
import './Navbar.css';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-green-800">
      <div className="flex items-center justify-between h-24">
        <div>
          <img className="h-12 w-12" src="logo192.png" alt="logo" />
        </div>
        <div className="sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)} type="button" className="block text-gray-500 hover:text-gray-900 focus:outline-none">
            <svg className="h-12 w-12 fill-current" viewBox="0 0 24 24">
              {isOpen  ? <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" /> : null}
              {!isOpen ? <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" /> : null}
            </svg>
          </button>
        </div>
      </div>
      <div className={`sm:flex sm:p-0 sm:block nav__links ${isOpen ? 'expand' : 'collapse'}`}>
        <a href="#dash" className="block px-2 py-2 text-white font-semibold rounded hover:bg-gray-600">Dashboard</a>
        <a href="#contact" className="block px-2 py-2 text-white font-semibold rounded hover:bg-gray-600">Contact Us</a>
      </div>
    </header>
  );
}
