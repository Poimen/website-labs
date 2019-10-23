import React from 'react';
import './Sidedraw.css';

export function Sidedraw({ show }) {

  let open = show ? 'open' : '';

  return (
    <nav className={`fixed flex justify-center items-center top-0 left-0 w-3/4 bg-white h-screen z-20 shadow-xl sidedraw ${open}`}>
      <ul className="list-none">
        <li className="pt-3">Item 1</li>
        <li className="pt-3">Item 2</li>
        <li className="pt-3">Item 3</li>
      </ul>
    </nav>
  );
}
