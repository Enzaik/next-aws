import React, { useState } from 'react';
import MobileMenu from './MobileMenu';

import MainColumn from './MainColumn';
import Sidebar from './Sidebar';

function MainApp() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-screen flex overflow-hidden bg-white">
      {/* Off-canvas menu for mobile, show/hide based on off-canvas menu state. */}
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* Static sidebar for desktop */}
      <Sidebar />
      {/* Main column */}
      <MainColumn setIsOpen={setIsOpen} />
    </div>
  );
}

export default MainApp;
