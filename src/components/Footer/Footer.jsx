import React from "react";
import { useNavigate } from "react-router-dom";
import log from "../../assets/logo.png";
import { motion } from "framer-motion";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="pt-28 bg-gray-700">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-4">
          {/* First Section */}
          <div className="space-y-4 max-w-[300px]">
            <img src={log} />
          </div>

          {/* Second Section */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Courses</h1>
              <ul className="space-y-2 text-lg text-dark2">
                <li
                  className="duration-200 cursor-pointer hover:text-secondary"
                  onClick={() => navigate("/coursepage")}
                >
                  React Development
                </li>
                <li
                  className="duration-200 cursor-pointer hover:text-secondary"
                  onClick={() => navigate("/coursepage")}
                >
                  Mern Development
                </li>
                <li
                  className="duration-200 cursor-pointer hover:text-secondary"
                  onClick={() => navigate("/coursepage")}
                >
                  App Development
                </li>
                <li
                  className="duration-200 cursor-pointer hover:text-secondary"
                  onClick={() => navigate("/coursepage")}
                >
                  DSA
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Links</h1>
              <ul className="space-y-2 text-lg text-dark2">
                <li
                  className="duration-200 cursor-pointer hover:text-secondary"
                  onClick={() => navigate("/")}
                >
                  Home
                </li>
                <li
                  className="duration-200 cursor-pointer hover:text-secondary"
                  onClick={() => navigate("/courses")}
                >
                  Our Courses
                </li>
                <li
                  className="duration-200 cursor-pointer hover:text-secondary"
                  onClick={() => navigate("/about")}
                >
                  About
                </li>
                <li
                  className="duration-200 cursor-pointer hover:text-secondary"
                  onClick={() => navigate("/contactus")}
                >
                  Contact
                </li>
              </ul>
            </div>
          </div>

          {/* Third Section */}
          <div className="space-y-4 max-w-[300px]">
            <div className="iframe-tap-divs" id="iframeTapDivs">
              {/* Mute Button */}
              <div className="flex justify-start">
                <button
                  className="show-chat-btn bg-[#E7FEF2] ml-2 mt-2"
                  id="mute-btn"
                >
                  <img
                    src="./images/mute-speaker.svg"
                    alt=""
                    className="show-chat-icon"
                    id="speaker"
                  />
                </button>
              </div>

              {/* Main Content Section */}
              <div>
                <div className="flex justify-between items-center w-full px-2">
                  {/* Mic Button */}
                  <button
                    className="show-chat-btn bg-[#E7FEF2]"
                    id="iframe-start-btn"
                  >
                    <img
                      src="./images/mic.svg"
                      alt=""
                      className="show-chat-icon text-black"
                    />
                  </button>

                  {/* Text Input */}
                  <div className="text-inp-div">
                    <div className="chat-box"></div>
                    <div className="input-bar flex justify-between items-center rounded-2xl px-2 py-1 bg-white">
                      <textarea
                        className="text-inp resize-none"
                        placeholder="Type here..."
                        rows="1"
                      ></textarea>
                      <div className="flex items-end">
                        <button className="send-box" id="iframe-toggleSendBtn">
                          <img
                            src="./images/send_icon.svg"
                            alt=""
                            className="send-icon"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Section */}
                <div className="footer">
                  <a
                    href="https://thriftyai.com/"
                    className="footer-link text-decoration-none flex items-center"
                    target="_blank"
                  >
                    <span className="footer-text">Powered by</span>
                    <img
                      src="./images/Thrifty-White.png"
                      alt="Thrifty AI"
                      className="h-5"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Social Icons */}
          </div>
        </div>
      </motion.div>
      <hr className="bg-gray-200 h-[2px] mt-5 w-full" />
      <div className="text-dark2 items-center justify-center flex py-3">
        © 2024 Coding of World. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
