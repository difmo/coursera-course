import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Track menu open state
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll position

  let dropdownTimeout;

  const handleMouseEnter = () => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout = setTimeout(() => {
      setDropdownOpen(false);
    }, 300); // Delay of 300ms
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`px-4 md:px-8 py-3 flex items-center justify-between fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="h-16 md:h-20" />
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button
          className="text-3xl text-[#FF8C24] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {/* Dropdown */}
        <div
          className="relative group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className="text-gray-700 text-lg font-medium hover:text-[#FF8C24] flex items-center">
            Medical Coding Training
            <span className="ml-1">{dropdownOpen ? "▲" : "▼"}</span>
          </button>
          <div
            className={`absolute left-0 mt-2 bg-white shadow-lg rounded-lg transition-opacity duration-300 ${
              dropdownOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <a
              href="Onlinetraining"
              className="block px-6 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#FF8C24] text-lg"
            >
              Online Training
            </a>
            <a
              href="#classroom-training"
              className="block px-6 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#FF8C24] text-lg"
            >
              Classroom Training
            </a>
          </div>
        </div>

        <a
          href="#our-courses"
          className="text-gray-700 text-lg font-medium hover:text-[#FF8C24]"
        >
          Our Courses
        </a>
        <a
          href="#placement"
          className="text-gray-700 text-lg font-medium hover:text-[#FF8C24]"
        >
          Placement
        </a>
        <a
          href="#australian-coding"
          className="text-[#FF8C24] text-lg font-medium"
        >
          Australian Coding
        </a>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
          <a
            href="#online-training"
            className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#FF8C24] text-lg"
          >
            Online Training
          </a>
          <a
            href="#classroom-training"
            className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#FF8C24] text-lg"
          >
            Classroom Training
          </a>
          <a
            href="#our-courses"
            className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#FF8C24] text-lg"
          >
            Our Courses
          </a>
          <a
            href="#placement"
            className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#FF8C24] text-lg"
          >
            Placement
          </a>
          <a
            href="#australian-coding"
            className="block px-6 py-3 text-[#FF8C24] font-medium text-lg"
          >
            Australian Coding
          </a>
          <div className="px-6 py-3">
            <button className="bg-[#FF8C24] w-full text-white py-3 text-lg rounded-md hover:bg-[#FF7A19]">
              Enroll Me
            </button>
          </div>
        </div>
      )}

      {/* Enroll Button */}
      <div className="hidden md:block">
        <button className="bg-[#FF8C24] text-white px-6 py-3 rounded-md text-lg hover:bg-[#FF7A19]">
          Enroll Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
