import React from "react";
import {
  FaUserGraduate,
  FaStarHalfAlt,
  FaChalkboardTeacher,
  FaUniversity,
  FaGraduationCap,
  FaClipboardCheck,
  FaUsers,
} from "react-icons/fa";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
const Home1 = () => {
  return (
    <>
      <div className="bg-gray-50 text-black ">
        {/* Stats Section */}
        <div className="grid grid-cols-4 gap-4 text-center py-10">
          <StatCard
            icon={<FaUserGraduate className="text-4xl mx-auto" />}
            number="1K+"
            description="Trained"
          />
          <StatCard
            icon={<FaStarHalfAlt className="text-4xl  mx-auto" />}
            number="2K+"
            description="Reviews With 4.5/5 Rating"
          />
          <StatCard
            icon={<FaChalkboardTeacher className="text-4xl mx-auto" />}
            number="4K+"
            description="Live Classes Every Month"
          />
          <StatCard
            icon={<FaUniversity className="text-4xl mx-auto" />}
            number="1K+"
            description="College Partner"
          />
        </div>
        <div className="flex items-center justify-center bg-gray-50 py-10 px-4">
          <div className="grid grid-cols-2 gap-8 max-w-7xl items-center">
            {/* Image Section */}
            <div className="relative">
              <img
                src="https://odysseymt.com/wp-content/uploads/2023/07/thinking-2048x1366.jpeg" // Replace with the actual image URL
                alt="Student Thinking"
                className="rounded-xl shadow-lg"
              />
              {/* Decorative Squares */}
              <div className="absolute top-0 left-0 bg-green-500 w-12 h-12 rounded-lg transform -rotate-12 -translate-x-4 -translate-y-4"></div>
              <div className="absolute bottom-0 right-0 bg-orange-500 w-12 h-12 rounded-lg transform rotate-12 translate-x-4 translate-y-4"></div>
            </div>

            {/* Text Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Why Us <span className="text-orange-500">?</span>
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center space-x-4">
                  <FaGraduationCap className="text-2xl text-blue-500" />
                  <span className="text-lg text-gray-700 font-medium">
                    100% Placement assistance
                  </span>
                </li>
                <li className="flex items-center space-x-4">
                  <FaChalkboardTeacher className="text-2xl text-green-500" />
                  <span className="text-lg text-gray-700 font-medium">
                    Online & Offline Classes
                  </span>
                </li>
                <li className="flex items-center space-x-4">
                  <FaClipboardCheck className="text-2xl text-yellow-500" />
                  <span className="text-lg text-gray-700 font-medium">
                    State-of-art classrooms
                  </span>
                </li>
                <li className="flex items-center space-x-4">
                  <FaUsers className="text-2xl text-purple-500" />
                  <span className="text-lg text-gray-700 font-medium">
                    Mentorship guidance
                  </span>
                </li>
              </ul>
              <button className="mt-6 bg-black text-white px-6 py-2 rounded-md shadow hover:bg-gray-800 transition">
                Discover More →
              </button>
            </div>
          </div>
        </div>{" "}
        {/* video */}
        <div className="justify-center flex items-center px-32 py-4">
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
  <div className="p-4 ">
    {icon}
    <h3 className="text-6xl font-serif t-2">{number}</h3>
    <p className="text-2xl text-gray-600">{description}</p>
  </div>
);

export default Home1;
