import React, { useState } from 'react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Left Side */}
      <div className="flex items-center space-x-6">
        {/* Dropdown Menu */}
        <div
          className="relative group"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <a
            href="#"
            className="text-gray-700 font-medium hover:text-blue-600"
          >
            Medical Coding Training
          </a>
          {dropdownOpen && (
            <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md">
              <a
                href="#online-training"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
              >
                Online Training
              </a>
              <a
                href="#classroom-training"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
              >
                Classroom Training
              </a>
            </div>
          )}
        </div>
        <a
          href="#our-courses"
          className="text-gray-700 font-medium hover:text-blue-600"
        >
          Our Courses
        </a>
        <a
          href="#placement"
          className="text-gray-700 font-medium hover:text-blue-600"
        >
          Placement
        </a>
        <a
          href="#australian-coding"
          className="text-gray-700 font-medium hover:text-blue-600"
        >
          Australian Coding
        </a>
      </div>

      {/* Right Side */}
      <div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700">
          Enroll Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
