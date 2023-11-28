// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-semibold text-gray-800">Degreease</h1>
          </div>
          {/* Add more navbar items if needed */}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
