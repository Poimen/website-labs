import React from 'react';
import './Sidedraw.css';

export function Sidedraw({ show, click }) {
  let open = show ? 'open' : '';

  return (
    <div className={`fixed flex flex-col top-0 left-0 w-3/4 bg-white h-screen z-20 shadow-xl sidedraw ${open}`}>
      <div className="flex justify-end pt-4 pr-4">
        <svg onClick={click} className="h-8 w-8 fill-current cursor-pointer" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
        </svg>
      </div>
      <div className="flex flex-1">
        <nav className="flex justify-center items-center w-full">
          <ul className="list-none">
            <li className="pt-3">Item 1</li>
            <li className="pt-3">Item 2</li>
            <li className="pt-3">Item 3</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
