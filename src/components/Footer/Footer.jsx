import React from "react";
import { useNavigate } from "react-router-dom";
import log from "../../assets/logo.png";
import { motion } from "framer-motion";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer
      className="pt-4 bg-[#91deff] text-gray-700"
      style={{
        backgroundImage: `url('/footerbg.svg')`,
        background: "cover",
        backgroundSize: "20%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* First Section */}
          <div className="space-y-4 max-w-[300px]">
            <img src={log} alt="Logo" className="w-48 md:w-64" />
          </div>

          {/* Second Section */}
          <div className="grid grid-cols-2 gap-10">
            {/* Links */}
            <div className="space-y-4">
              <h1 className="text-lg sm:text-xl font-bold">Links</h1>
              <ul className="space-y-2 text-sm sm:text-base">
                <li
                  className="duration-200 cursor-pointer hover:text-secondary"
                  onClick={() => navigate("/")}
                >
                  Home
                </li>
                <li
                  className="duration-200 cursor-pointer hover:text-secondary"
                  onClick={() => navigate("/CoursesPopular")}
                >
                  Our Courses
                </li>
                <li
                  className="duration-200 cursor-pointer hover:text-secondary"
                  onClick={() => navigate("/AboutPage")}
                >
                  About
                </li>
              </ul>
            </div>

            {/* Courses */}
            <div className="space-y-4">
              <h1 className="text-lg sm:text-xl font-bold">Help & Support</h1>
              <ul className="space-y-2 text-sm sm:text-base">
                <li
                  className="duration-200 cursor-pointer hover:text-secondary"
                  onClick={() => navigate("/coursepage")}
                >
                  T&C
                </li>
                <li
                  className="duration-200 cursor-pointer hover:text-secondary"
                  onClick={() => navigate("/OurBlogs")}
                >
                  Blog
                </li>
                <li
                  className="duration-200 cursor-pointer hover:text-secondary"
                  onClick={() => navigate("/ContactUs")}
                >
                  Contact Us
                </li>
              </ul>
            </div>
          </div>

          {/* Third Section */}
          <div className="space-y-4 max-w-[300px]">
            <div className="iframe-tap-divs" id="iframeTapDivs">
              <div>
                <div className="flex justify-between items-center w-full px-2"></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <hr className="bg-gray-200 h-[2px] mt-5 w-full" />

      <div className="flex justify-center  py-2">
        <p>© 2024 ClassCourse. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
