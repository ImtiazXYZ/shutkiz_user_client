"use client"
import React, { useState } from 'react';

const Dropdown1 = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar bg-gray-800 text-white p-4 relative z-10">
      <div className="container mx-auto flex justify-between">
        <div className="logo">
          <h1>My Website</h1>
        </div>
        <div className="menu">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="relative z-10"
          >
            Menu
          </button>
          {dropdownOpen && (
            <div
              className="dropdown fixed top-16 right-10 py-2 w-48 bg-white text-black shadow-lg z-50"
            >
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Link 1
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Link 2
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Link 3
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Dropdown1;