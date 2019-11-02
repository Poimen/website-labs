import React from 'react';

import './Backdrop.css';

export function Backdrop({ click }) {
  return (
    <div onClick={click} className="backdrop fixed w-full h-full top-0 left-0 bg-black z-10"></div>
  );
}
