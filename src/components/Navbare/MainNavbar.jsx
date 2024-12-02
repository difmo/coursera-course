import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png'; // Correct relative path

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Track menu open state
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll position

  let dropdownTimeout;

  const handleMouseEnter = () => {
    // Clear the timeout if any exists to prevent sudden closing
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    // Set a timeout to close the dropdown after 300ms when mouse leaves
    dropdownTimeout = setTimeout(() => {
      setDropdownOpen(false);
    }, 300); // Delay of 300ms
  };

  // Add scroll event listener to change navbar's background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`shadow-md px-8 py-6 flex items-center justify-evenly sticky top-8 z-10 transition-all duration-300 h-32 ${
        isScrolled ? 'rounded-xl bg-white' : 'bg-transparent ' // Change bg to white on scroll
      }`}
    >
      {/* Left Side (Logo) */}
      <div className="flex items-center space-x-6">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-24 w-auto" />
      </div>

      {/* Hamburger Icon for Small Devices */}
      <div className="md:hidden flex items-center" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="text-[#FF8C24] text-4xl">
          {menuOpen ? '✖' : '☰'} {/* Toggle between hamburger and cross icon */}
        </span>
      </div>

      {/* Right Side - Full Menu (Hidden on small devices) */}
      <div className="hidden md:flex items-center space-x-10">
        {/* Dropdown Menu */}
        <div
          className="relative group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href="#"
            className="text-gray-700 font-medium hover:text-[#FF8C24] flex items-center text-xl"
          >
            Medical Coding Training
            <span className="ml-2">
              {dropdownOpen ? '▲' : '▼'}
            </span>
          </a>
          <div
            className={`absolute left-0 mt-2 bg-white shadow-lg rounded-md transition-opacity duration-300 ${
              dropdownOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <a
              href="#online-training"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#FF8C24] text-xl"
            >
              Online Training
            </a>
            <a
              href="#classroom-training"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#FF8C24] text-xl"
            >
              Classroom Training
            </a>
          </div>
        </div>

        {/* Other Navigation Links */}
        <a
          href="#our-courses"
          className="text-gray-700 font-medium hover:text-[#FF8C24] text-xl"
        >
          Our Courses
        </a>
        <a
          href="#placement"
          className="text-gray-700 font-medium hover:text-[#FF8C24] text-xl"
        >
          Placement
        </a>
        <a
          href="#australian-coding"
          className="text-[#FF8C24] font-medium text-xl"
        >
          Australian Coding
        </a>
      </div>

      {/* Mobile Menu (hidden by default, shown when menuOpen is true) */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          menuOpen ? 'block' : 'hidden'
        }`}
      >
        <a
          href="#online-training"
          className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#FF8C24] text-xl"
        >
          Online Training
        </a>
        <a
          href="#classroom-training"
          className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#FF8C24] text-xl"
        >
          Classroom Training
        </a>
        <a
          href="#our-courses"
          className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#FF8C24] text-xl"
        >
          Our Courses
        </a>
        <a
          href="#placement"
          className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#FF8C24] text-xl"
        >
          Placement
        </a>
        <a
          href="#australian-coding"
          className="block px-6 py-3 text-[#FF8C24] font-medium text-xl"
        >
          Australian Coding
        </a>
        <div className="px-6 py-3">
          <button className="bg-[#FF8C24] text-white px-6 py-3 text-xl rounded-md shadow-md hover:bg-[#FF7A19]">
            Enroll Me
          </button>
        </div>
      </div>

      {/* Enroll Me Button (Hidden on small devices, shown on larger ones) */}
      <div className="hidden md:block">
        <button className="bg-[#FF8C24] text-white w-44 h-14 px-6 py-3 text-xl rounded-md shadow-md hover:bg-[#FF7A19]">
          Enroll Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
