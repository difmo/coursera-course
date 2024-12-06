import React, { useEffect } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

const scheduleItems = [
  "Weekend Classes (Saturday and Sunday) 2.5 Hours lecture",
  "Timings: 11:00 am onwards, 10 minutes (tea break)",
];

const courseContentItems = [
  "ICD-10-CM manual (Diagnosis Coding)",
  "CPT-4 manual (Procedure Coding)",
  "CPC Certification exam preparation",
  "5 CPC pattern Mock exams (100 Questions each)",
  "HCPCS Level II and HIPAA",
  "Human Anatomy, Medical Terminology (prefix-suffix)",
  "Interview Preparation",
];

function ClassroomTrain() {
  useEffect(() => {
    // Optional: You can add additional logic here if you want to trigger actions when the page loads
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 mt-16">
      {/* Heading Section with Motion Animation */}
      <motion.section
        className="py-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center py-16 px-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
            Classroom Training
          </h1>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl py-5">
            Join our Classroom Training for the Best Learning Experience
          </h2>
        </div>
        <p className="mt-6 text-lg sm:text-xl mx-auto max-w-3xl">
          Personal interaction with our expert trainers will help you become
          more proficient in Medical Coding. During classroom training, students
          can take part in face-to-face discussions, ask doubts related to CPC
          exam questions, and seek clarification on the subject with their
          mentors.
        </p>
        <div className="mt-8">
          <motion.img
            className="w-full rounded-lg shadow-lg max-h-[400px] object-cover"
            src="https://odysseymt.com/wp-content/uploads/2023/08/hgf.png"
            alt="Classroom Image"
            initial={{ opacity: 0, x: "-100vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 25 }}
          />
        </div>
      </motion.section>

      {/* Our Classroom Section with Motion Animation */}
      <motion.section
        className="py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl py-5 font-semibold text-gray-800 text-center">
          Our Classroom:
        </h2>
        <p className="mt-4 text-lg sm:text-xl mx-auto max-w-3xl">
          Classroom training helps students create a network with their fellow
          students and trainers in the healthcare industry, opening up more
          opportunities in the future. Our classrooms are equipped with smart
          TVs and high-speed Wi-Fi to enhance the learning experience with visual
          aids, particularly for topics like Human Anatomy and medical procedures.
        </p>
      </motion.section>

      {/* Schedule Section with Motion Animation */}
      <motion.section
        className="py-12 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
          Our Classroom Training Schedule:
        </h2>
        <ul className="mt-4 text-lg text-gray-600 sm:text-xl">
          {scheduleItems.map((item, index) => (
            <li key={index} className="mb-3">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-8 space-y-8 md:flex md:space-x-8 md:space-y-0">
          <div className="w-full md:w-1/2">
            <motion.img
              className="w-full rounded-lg shadow-lg max-h-[400px] object-cover"
              src="https://odysseymt.com/wp-content/uploads/2023/08/IMG-9458-768x512.jpg"
              alt="Classroom 1"
              initial={{ opacity: 0, x: "-100vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} // Triggers animation when the image comes into the viewport
            />
          </div>
          <div className="w-full md:w-1/2">
            <motion.img
              className="w-full rounded-lg shadow-lg max-h-[400px] object-cover"
              src="https://odysseymt.com/wp-content/uploads/2023/08/image_50441729-2048x1536.jpg"
              alt="Classroom 2"
              initial={{ opacity: 0, x: "100vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} // Triggers animation when the image comes into the viewport
            />
          </div>
        </div>
      </motion.section>

      {/* Course Content Section with Motion Animation */}
      <motion.section
        className="py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 py-5">
          Course Content:
        </h2>
        <p className="mt-4 text-lg sm:text-xl mx-auto max-w-3xl">
          The Medical Coding Training program at Odyssey Informatics includes
          the following coding manuals and contents:
        </p>
        <ul className="mt-6 list-inside text-lg text-gray-600 sm:text-xl">
          {courseContentItems.map((item, index) => (
            <li key={index} className="mb-3">
              {item}
            </li>
          ))}
        </ul>
      </motion.section>
    </div>
  );
}

export default ClassroomTrain;
