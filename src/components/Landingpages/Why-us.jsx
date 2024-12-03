import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  FaUserGraduate,
  FaStarHalfAlt,
  FaChalkboardTeacher,
  FaUniversity,
  FaGraduationCap,
  FaClipboardCheck,
  FaUsers,
  FaCheck,
} from "react-icons/fa";
import { Player } from "video-react";
import "video-react/dist/video-react.css";

const Home1 = () => {
  return (
    <>
      <div className="bg-gray-50 text-black">
        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center py-10 px-4">
          <StatCard
            icon={<FaUserGraduate className="text-9xl mx-auto" />}
            number="1K+"
            description="Trained"
          />
          <StatCard
            icon={<FaStarHalfAlt className="text-9xl mx-auto" />}
            number="2K+"
            description="Reviews With 4.5/5 Rating"
          />
          <StatCard
            icon={<FaChalkboardTeacher className="text-9xl mx-auto" />}
            number="4K+"
            description="Live Classes Every Month"
          />
          <StatCard
            icon={<FaUniversity className="text-9xl mx-auto" />}
            number="1K+"
            description="College Partner"
          />
        </div>

        {/* Image and Text Section */}
        <div className="flex flex-col md:flex-row items-center justify-center bg-gray-50 py-10 px-4 md:px-8 lg:px-16">
          <div className="relative w-full md:w-1/2 max-w-md md:max-w-none">
            <img
              src="https://odysseymt.com/wp-content/uploads/2023/07/thinking-2048x1366.jpeg"
              alt="Student Thinking"
              className="rounded-xl shadow-lg w-full h-auto"
            />
            {/* <!-- Decorative Shape at Bottom Left --> */}
            <div className="absolute bottom-0 left-0 bg-green-500 w-8 h-8 md:w-12 md:h-12 rounded-lg transform -rotate-12 -translate-x-2 sm:-translate-x-4 -translate-y-2 sm:-translate-y-4"></div>
            {/* <!-- Decorative Shape at Top Right --> */}
            <div className="absolute top-0 right-0 bg-orange-500 w-8 h-8 md:w-12 md:h-12 rounded-lg transform rotate-12 translate-x-2 sm:translate-x-4 translate-y-2 sm:translate-y-4"></div>
          </div>

          <div className="mt-8 md:mt-0 md:ml-12 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Why Us <span className="text-orange-500">?</span>
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center justify-center md:justify-start space-x-4">
                <FaGraduationCap className="text-xl md:text-2xl text-blue-500" />
                <span className="text-sm md:text-lg text-gray-700 font-medium">
                  100% Placement assistance
                </span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-4">
                <FaChalkboardTeacher className="text-xl md:text-2xl text-green-500" />
                <span className="text-sm md:text-lg text-gray-700 font-medium">
                  Online & Offline Classes
                </span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-4">
                <FaClipboardCheck className="text-xl md:text-2xl text-yellow-500" />
                <span className="text-sm md:text-lg text-gray-700 font-medium">
                  State-of-art classrooms
                </span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-4">
                <FaUsers className="text-xl md:text-2xl text-purple-500" />
                <span className="text-sm md:text-lg text-gray-700 font-medium">
                  Mentorship guidance
                </span>
              </li>
            </ul>
            <button className="mt-6 bg-black text-white px-4 md:px-6 py-2 text-sm md:text-lg rounded-md shadow hover:bg-gray-800 transition">
              Discover More →
            </button>{" "}
            <div className="flex space-x-4 text-xl"></div>
          </div>
        </div>

        {/* Video Section */}
        <div className="flex justify-center items-center px-4 md:px-8 lg:px-32 py-6">
          <Player
            playsInline
            poster="/assets/poster.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          />
        </div>
      </div>
    </>
  );
};

const StatCard = ({ icon, number, description }) => (
  <div className="p-4">
    {icon}
    <h3 className="text-3xl md:text-8xl font-serif mt-2">{number}</h3>
    <p className="text-2xl md:text-3xl text-gray-600 mt-1">{description}</p>
  </div>
);

export default Home1;
