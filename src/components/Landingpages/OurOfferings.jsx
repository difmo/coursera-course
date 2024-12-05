import React from "react";
import { motion } from "framer-motion";

const offerings = [
  {
    id: "1",
    title: "Artificial Intelligence",
    image:
      "https://img.freepik.com/free-photo/ai-nuclear-energy-future-innovation-disruptive-technology_53876-129784.jpg?uid=R175915010&ga=GA1.1.1302421477.1730100475&semt=ais_tags_boosted  ",
    points: [
      "Machine Learning (ML)",
      "Natural Language Processing",
      "Computer Vision",
    ],
    button: "Read more",
    link: "https://coursya.com/product/coursera/ai-product-management-specialization/?utm_source=LinkedIn%20&utm_campaign=sr", // External link for this offering
  },
  {
    id: "2",
    title: "Data Science",
    image:
      "https://img.freepik.com/free-vector/illustration-social-media-concept_53876-18141.jpg?uid=R175915010&ga=GA1.1.1302421477.1730100475&semt=ais_tags_boosted",
    points: [
      "Data Analysis and Visualization",
      "Statistical Modeling",
      "Machine Learning Techniques",
    ],
    button: "Read more",
    link: "https://cpe.iiitb.ac.in/courses/epgp-data-science", // External link for this offering
  },
  {
    id: "3",
    title: "Big Data",
    image:
      "https://img.freepik.com/free-vector/abstract-particles-dark-background_1217-1472.jpg?uid=R175915010&ga=GA1.1.1302421477.1730100475&semt=ais_tags_boosted ",
    points: [
      "Distributed Computing",
      "Data Storage and Management",
      "Real-time Data Processing",
    ],
    button: "Read more",
    link: "https://coursya.com/product/coursera/google-project-management-2/?utm_source=LinkedIn%20&utm_campaign=sr", // External link for this offering
  },
  {
    id: "4",
    title: "Cloud Computing",
    image:
      "https://img.freepik.com/free-vector/people-use-smart-technology-life-business_81522-3214.jpg?uid=R175915010&ga=GA1.1.1302421477.1730100475&semt=ais_tags_boosted",
    points: ["AWS", "Docker", "Cloud Security and Compliance "],
    button: "Read more",
    link: "https://cloud.google.com/learn/training", 
  },
];

const OurOfferings = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-2xl sm:text-3xl font-bold text-center mb-8 text-black"
        >
          Letest Courses
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((offering) => (
            <motion.div
              key={offering.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <img
                  src={offering.image}
                  alt={offering.title}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg sm:text-xl font-semibold py-2 text-indigo-800">
                  {offering.title}
                </h3>
                <ul className="list-disc list-inside text-gray-600 mb-4 text-sm sm:text-base">
                  {offering.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <a
                  href={offering.link} // Use the link directly
                  target="_blank"
                  rel="noopener noreferrer" // For security and performance
                  className="bg-[#ff8c24] text-white py-2 px-4 text-sm sm:text-base rounded-md  transition-colors duration-300 w-full text-center block"
                >
                  {offering.button}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurOfferings;
