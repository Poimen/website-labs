import React, { useState } from 'react';
import './Navbar.css';

const ButtonNav = ({ children }) => (
  <button className="py-4 px-0 block border-b-2 border-transparent hover:text-indigo-400 hover:border-indigo-700 md:p-4 uppercase tracking-wide">
    {children}
  </button>
);

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menu = ['Features', 'Documentation', 'Support'];
  const menuItems = menu.map(item => <li key={item}><ButtonNav>{item}</ButtonNav></li>);
  const menuItemsWithHover = menu.map(item => <li key={item} className="hover:border-indigo-700 border-b-2 cursor-pointer"><ButtonNav>{item}</ButtonNav></li>);

  return (
    <header className="px-2 md:px-16 bg-white shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <a href="#ad" className="focus:outline-none">
            <svg version="1.1" className="w-10 h-10 fill-current text-gray-700" viewBox="0 0 22 22">
              <path d="M11.004,9.401c-1.611,0-3.046,0.702-4.145,2.027c-1.107,1.32-1.823,3.281-1.823,4.994 c0,1.035,0.26,1.859,0.771,2.447c0.537,0.627,1.29,0.947,2.232,0.947c0.488,0,0.95-0.189,1.497-0.473l0.303-0.162 c0.663-0.354,0.915-0.449,1.164-0.449c0.245,0,0.497,0.098,1.17,0.457c0.81,0.434,1.259,0.627,1.785,0.627 c0.942,0,1.696-0.32,2.233-0.947c0.511-0.592,0.771-1.414,0.771-2.447c0-1.715-0.718-3.675-1.823-4.993 C14.04,10.102,12.609,9.401,11.004,9.401z M15.208,18.021c-0.289,0.338-0.687,0.494-1.248,0.494c-0.196,0-0.422-0.07-1.173-0.473 c-0.809-0.43-1.233-0.609-1.783-0.609c-0.552,0-0.999,0.188-1.792,0.609l0,0l-0.279,0.148c-0.442,0.229-0.701,0.324-0.894,0.324 c-0.562,0-0.958-0.156-1.249-0.496c-0.302-0.348-0.455-0.885-0.455-1.6c0-1.402,0.611-3.074,1.522-4.16 c0.856-1.036,1.916-1.561,3.146-1.561c1.224,0,2.278,0.524,3.136,1.563c0.911,1.084,1.522,2.756,1.522,4.158 C15.663,17.123,15.507,17.676,15.208,18.021z M14.061,8.112l0.144,0.011c0.721,0,1.405-0.321,1.922-0.897 c0.483-0.524,0.789-1.252,0.839-2.039V5.012c0-0.728-0.232-1.411-0.654-1.921c-0.447-0.55-1.071-0.869-1.72-0.896l-0.144-0.011 c-0.721,0-1.403,0.318-1.922,0.897c-0.496,0.537-0.801,1.269-0.838,2.038l-0.011,0.197c0.005,0.713,0.241,1.388,0.663,1.899 C12.796,7.774,13.402,8.085,14.061,8.112z M12.986,5.152c0.021-0.432,0.205-0.876,0.509-1.204c0.269-0.299,0.606-0.464,0.887-0.468 l0.114,0.011c0.313,0.014,0.593,0.159,0.809,0.424c0.231,0.281,0.358,0.67,0.358,1.097l0.002,0.133 c-0.029,0.446-0.214,0.894-0.502,1.205c-0.265,0.296-0.595,0.463-0.931,0.472l-0.078-0.007c-0.318-0.014-0.59-0.155-0.809-0.424 c-0.231-0.28-0.367-0.675-0.367-1.065C12.984,5.241,12.986,5.19,12.986,5.152z M7.744,8.125H7.77l0.153-0.012 c0.67-0.028,1.287-0.348,1.735-0.897c0.428-0.519,0.663-1.201,0.663-1.921c0-0.056,0-0.096-0.009-0.176 c-0.037-0.768-0.337-1.495-0.838-2.038c-0.51-0.569-1.181-0.887-1.948-0.895l-0.09,0.008C6.758,2.222,6.138,2.541,5.689,3.091 C5.27,3.602,5.037,4.285,5.037,5.005v0.182c0.048,0.771,0.355,1.515,0.839,2.038C6.395,7.794,7.074,8.122,7.744,8.125z M6.336,5.012 c0-0.427,0.127-0.815,0.359-1.097c0.215-0.264,0.489-0.41,0.817-0.424l0.056-0.007c0.341,0.004,0.673,0.169,0.944,0.471 c0.301,0.326,0.479,0.762,0.502,1.227l0.008,0.112c0,0.413-0.134,0.812-0.369,1.097c-0.15,0.184-0.408,0.407-0.806,0.424l-0.12,0.01 C7.427,6.816,7.104,6.644,6.833,6.346c-0.288-0.31-0.47-0.762-0.498-1.192L6.336,5.012z M20.464,8.239 c-0.385-0.481-0.927-0.779-1.53-0.818h-0.107c-0.616,0-1.217,0.281-1.704,0.808c-0.416,0.48-0.677,1.122-0.714,1.796v0.166 c0,0.633,0.201,1.232,0.564,1.687c0.385,0.481,0.926,0.78,1.531,0.82h0.107c0.633,0,1.231-0.286,1.686-0.802 c0.428-0.476,0.694-1.12,0.732-1.803V9.937C21.029,9.299,20.829,8.696,20.464,8.239z M19.326,11.034 c-0.146,0.166-0.391,0.364-0.715,0.364l-0.063,0.001c-0.196-0.014-0.401-0.134-0.559-0.333c-0.179-0.223-0.281-0.542-0.281-0.876 l-0.001-0.128c0.02-0.356,0.164-0.714,0.382-0.965c0.226-0.243,0.486-0.376,0.736-0.376l0.063-0.001 c0.197,0.014,0.401,0.134,0.56,0.332c0.182,0.227,0.28,0.542,0.28,0.886l0.002,0.119C19.71,10.413,19.563,10.768,19.326,11.034z M5.592,10.025C5.556,9.351,5.301,8.712,4.871,8.221c-0.458-0.508-1.076-0.8-1.684-0.8l0,0L3.092,7.419L3.066,7.421 C2.469,7.458,1.925,7.75,1.535,8.24C1.177,8.688,0.971,9.292,0.971,9.937l0.01,0.155c0.027,0.675,0.285,1.317,0.722,1.804 c0.455,0.516,1.054,0.799,1.669,0.799l0,0l0.097,0.003l0.027-0.002c0.597-0.038,1.141-0.329,1.531-0.819 c0.365-0.456,0.564-1.055,0.564-1.683L5.592,10.025L5.592,10.025z M4.393,10.19c0,0.355-0.11,0.697-0.304,0.939 c-0.18,0.226-0.41,0.354-0.669,0.37l-0.031-0.003c-0.288,0-0.561-0.136-0.791-0.396c-0.255-0.284-0.403-0.659-0.421-1.07 L2.168,9.901C2.169,9.562,2.28,9.23,2.474,8.988c0.18-0.226,0.41-0.354,0.7-0.367c0.282,0,0.575,0.146,0.8,0.396 c0.244,0.281,0.398,0.672,0.42,1.037L4.393,10.19z"></path>
            </svg>
          </a>
        </div>
        <div>
          <button onClick={() => setIsOpen(!isOpen)} type="button" className="block text-gray-700 hover:text-gray-900 focus:outline-none md:hidden">
            <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
              {isOpen ? <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" /> : null}
              {!isOpen ? <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" /> : null}
            </svg>
          </button>
          <nav className="hidden md:flex items-center lg:w-atuo w-full">
            <ul className="flex items-center justify-between text-base text-gray-700 pt-4 pt-0">
              {menuItems}
            </ul>
          </nav>
        </div>
      </div>
      <div className={`md:hidden md:flex md:p-0 md:block nav__links ${isOpen ? 'expand' : 'collapse'}`}>
        <ul>
          {menuItemsWithHover}
        </ul>
      </div>
    </header>
  );
}
