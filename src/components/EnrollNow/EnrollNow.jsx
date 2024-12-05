import React from "react";
import { motion } from "framer-motion"; // Import motion

function EnrollNow() {
  return (
    <div className="flex items-center justify-center py-12 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white">
      <div className="text-center space-y-6 max-w-4xl px-4 w-full">
        {/* Enroll Button with Motion */}
        <div className="flex justify-center">
          <motion.button
            className="bg-white text-black py-3 px-8 rounded-lg font-bold text-lg shadow-lg hover:bg-gray-200 transition-all duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Enroll Now
          </motion.button>
        </div>

        {/* Heading with Motion */}
        <div className="space-y-4">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            What are you waiting for?
          </motion.h1>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Call us now
          </motion.h1>
        </div>

        {/* Contact Information with Motion */}
        <div className="space-y-4 text-lg sm:text-xl md:text-2xl">
          <motion.p
            className="flex items-center justify-center space-x-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <span className="bg-white text-black px-3 py-1 rounded-lg font-semibold shadow-md">
              +91-98181 74285
            </span>
          </motion.p>
          <motion.p
            className="flex items-center justify-center space-x-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <span className="bg-white text-black px-3 py-1 rounded-lg font-semibold shadow-md">
              classcourse25@gmail.com
            </span>
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default EnrollNow;
