import React from 'react';

export function MenuToggleButton({ click }) {
  return (
    <button onClick={click} className="p-4 outline-none hover:text-gray-600 block focus:outline-none block md:hidden">
      <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
      </svg>
    </button>
  )
}

