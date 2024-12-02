import React from "react";
import { motion } from "framer-motion";

const offerings = [
  {
    id: "1",
    title: "Medical Coding",
    image:
      "https://odysseymt.com/wp-content/uploads/2023/07/1-Medical-Coding-e1689761564720.jpg",
    points: ["ICD-10 CM", "CPT-4", "HCPCS codes"],
    button: "Read more",
  },
  {
    id: "2",
    title: "Australian Coding",
    image:
      "https://odysseymt.com/wp-content/uploads/2023/07/1-Medical-Coding-e1689761564720.jpg",
    points: ["ICD-10 AM", "ACHI", "ACS"],
    button: "Read more",
  },
  {
    id: "3",
    title: "Medical Billing",
    image:
      "https://odysseymt.com/wp-content/uploads/2023/07/Medical-Billing-Company-Names-e1689762580567.webp",
    points: ["Charge Posting", "Payment Posting", "Account Receivable"],
    button: "Read more",
  },
  {
    id: "4",
    title: "Medical Billing",
    image:
      "https://odysseymt.com/wp-content/uploads/2023/07/maxresdefault-1-1-e1689762204387.jpg",
    points: ["Charge Posting", "Payment Posting", "Account Receivable"],
    button: "Read more",
  },
];

const OurOfferings = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-center mb-8 text-indigo-600"
        >
          Our Offerings
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((offering) => (
            <motion.div
              key={offering.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={offering.image}
                alt={offering.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold py-3 text-indigo-800">
                  {offering.title}
                </h3>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                  {offering.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <button className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500 transition-colors duration-300">
                  {offering.button}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurOfferings;
