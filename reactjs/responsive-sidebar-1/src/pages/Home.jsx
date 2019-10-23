import React, { useState } from 'react';
import { Backdrop } from '../components/Backdrop';
import { Sidebar } from '../components/Sidebar';
import { Sidedraw } from '../components/Sidedraw';
import { MenuToggleButton } from '../components/MenuToggleButton';

export function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);
  const closeDrawer = () => setIsOpen(false);

  let backdrop;
  if (isOpen) {
    backdrop = <Backdrop click={closeDrawer}></Backdrop>;
  }

  return (
    <React.Fragment>
      <MenuToggleButton click={toggleDrawer}></MenuToggleButton>
      {backdrop}
      <Sidebar></Sidebar>
      <Sidedraw show={isOpen}></Sidedraw>
      <div className="px-4 md:ml-64 ml-0">
        <div className="max-w-3xl bg-white rounded-lg mx-auto my-0 p-12 md:my-16">
          <h1 className="text-2xl font-medium">Responsive Sidebar #1</h1>
          <h2 className="text-sm font-medium text-indigo-400 uppercase tracking-wide my-2">Response SideBar</h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias impedit ipsum voluptatum quam accusamus eveniet, magni aliquam. Quos unde eum ad sit, autem, adipisci expedita ea quibusdam voluptates molestiae ex?
        </div>
      </div>
    </React.Fragment>
  )
}
