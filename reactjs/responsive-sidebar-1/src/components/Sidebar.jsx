import React from 'react';

export function Sidebar() {

  return (
    <nav className="fixed top-0 left-0 w-64 bg-white h-screen hidden md:block shadow-xl">
      <ul className="p-2">
        <li className="p-4">Item 1</li>
        <li className="p-4">Item 2</li>
        <li className="p-4">Item 3</li>
        <li className="p-4">Decrease Browser size</li>
      </ul>
    </nav>
  );
}
