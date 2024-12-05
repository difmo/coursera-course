import React from "react";

function EnrollNow() {
  return (
    <div className="flex items-center justify-center py-12 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white">
      <div className="text-center space-y-6 max-w-4xl px-4 w-full">
        {/* Enroll Button */}
        <div className="flex justify-center">
          <button className="bg-white text-black py-3 px-8 rounded-lg font-bold text-lg shadow-lg hover:bg-gray-200 transition-all duration-300">
            Enroll Now
          </button>
        </div>

        {/* Heading */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            What are you waiting for?
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Call us now
          </h1>
        </div>

        {/* Contact Information */}
        <div className="space-y-4 text-lg sm:text-xl md:text-2xl">
          <p className="flex items-center justify-center space-x-2">
            <span className="bg-white text-black px-3 py-1 rounded-lg font-semibold shadow-md">
              +91-98181 74285
            </span>
          </p>
          <p className="flex items-center justify-center space-x-2">
            <span className="bg-white text-black px-3 py-1 rounded-lg font-semibold shadow-md">
              classcourse25@gmail.com
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default EnrollNow;
