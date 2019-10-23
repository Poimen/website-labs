import React, { useState } from 'react';

export function Sidebar() {

  const menu = ['Features', 'Documentation', 'Support'];

  return (
    <nav>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </nav>


    // <div className="fixed top-0 left-0 w-64 bg-white h-screen z-20">
    //   <div className="flex items-center justify-end mr-3">
    //     <button className="block text-gray-700 hover:text-gray-900 focus:outline-none md:hidden">
    //       <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
    //         {/* <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" /> */}
    //         <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
    //       </svg>
    //     </button>
    //     {/* <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
    //         <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
    //     </svg> */}
    //     {/* This is a sidebar */}

    //   </div>
    // </div>
  );
}
