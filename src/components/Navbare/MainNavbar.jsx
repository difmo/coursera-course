import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  let dropdownTimeout;

  const handleMouseEnter = () => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout = setTimeout(() => {
      setDropdownOpen(false);
    }, 300);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClassCodingClick = () => {
    navigate("/classcodingpages");
  };

  return (
    <nav
      className={`px-4 md:px-8 py-3 flex items-center justify-between sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div
        className={`flex items-center transition-transform duration-300 ${
          isScrolled ? "" : "translate-y-0"
        }`}
      >
        <img
          src={logo}
          alt="Logo"
          className="h-12 md:h-20  transition-all duration-300"
        />
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
            <Link
              to="Onlinetraining"
              className="block px-6 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#FF8C24] text-lg"
            >
              Online Training
            </Link>
            <Link
              to="ClassroomTrain"
              className="block px-6 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#FF8C24] text-lg"
            >
              Classroom Training
            </Link>
          </div>
        </div>
        <Link
          to="CoursesPopular"
          className="text-gray-700 text-lg font-medium hover:text-[#FF8C24]"
        >
          Our Courses
        </Link>
        <Link
          to="#placement"
          className="text-gray-700 text-lg font-medium hover:text-[#FF8C24]"
        >
          Placement
        </Link>
        <Link
          to="Classcodingpages"
          className="text-[#FF8C24] text-lg font-medium cursor-pointer"
        >
          Class Coding
        </Link>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full  left-0 w-full bg-white shadow-lg md:hidden">
          <Link
            to="#online-training"
            className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#FF8C24] text-lg"
          >
            Online Training
          </Link>
          <Link
            to="#classroom-training"
            className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#FF8C24] text-lg"
          >
            Classroom Training
          </Link>
          <Link
            to="#our-courses"
            className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#FF8C24] text-lg"
          >
            Our Courses
          </Link>
          <Link
            to="#placement"
            className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#FF8C24] text-lg"
          >
            Placement
          </Link>
          {/* <Link
            to="#australian-coding"
            className="block px-6 py-3 text-[#FF8C24] font-medium text-lg"
          >
            Australian Coding
          </Link> */}
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
