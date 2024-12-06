import React from "react";
import { motion } from "framer-motion";

const placementCompanies = [
  { name: "Google", logo: "https://cdn-icons-png.freepik.com/256/13170/13170545.png?uid=R175915010&ga=GA1.1.1302421477.1730100475&semt=ais_hybrid" },
  { name: "Microsoft", logo: "https://cdn-icons-png.freepik.com/256/732/732221.png?uid=R175915010&ga=GA1.1.1302421477.1730100475&semt=ais_hybrid" },
  { name: "Amazon", logo: "https://s.yimg.com/fz/api/res/1.2/Lj4kuvnAIOt_fGY8yu5CFg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/744da6d7-90a6-3a8d-bfd3-fee921e794a4/t_500x300" },
  { name: "Infosys", logo: "https://s.yimg.com/fz/api/res/1.2/06U.3rUFT4QmH_6gNvAfIQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/ffd22cf1-afe1-3dc3-8019-54b2e3a97c96/t_500x300" },
  { name: "TCS", logo: "https://s.yimg.com/fz/api/res/1.2/PRJk8OvilVfWxE.OdTQXuw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/b116e9e1-105a-3d01-b8c8-88f8d9ad8fa7/t_500x300" },
];

const processSteps = [
  "Resume Building & Guidance",
  "Technical & Soft Skills Training",
  "Mock Interviews with Experts",
  "Campus Recruitment Drives",
  "Continuous Placement Support",
];

const achievements = [
  "500+ Students Placed",
  "100+ Companies Onboard",
  "80% Placement Success Rate",
  "Highest Package: ₹40 LPA",
  "Average Package: ₹8 LPA",
];

function PlacementSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-16">
      {/* Placement Heading Section */}
      <motion.section
        className="text-center py-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="py-12 bg-gradient-to-r from-[#008fcc] to-[#008fccf0] text-white rounded-lg shadow-lg">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Placement Opportunities
          </motion.h1>
          <motion.h2
            className="mt-4 text-xl sm:text-2xl md:text-3xl py-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Empowering Students for a Brighter Future
          </motion.h2>
        </div>
        <motion.p
          className="mt-6 text-lg sm:text-xl mx-auto max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          We ensure that our students are industry-ready with comprehensive
          training and placement assistance. Our strong ties with top companies
          open doors to exciting career opportunities.
        </motion.p>
      </motion.section>

      {/* Companies Section */}
      <motion.section
        className="py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 text-center">
          Top Hiring Companies
        </h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-center">
          {placementCompanies.map((company, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-16 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Placement Process Section */}
      <motion.section
        className="py-12 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 text-center">
          Placement Process
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-800">{step}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        className="py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 text-center">
          Achievements
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gradient-to-r from-green-500 to-green-400 text-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg sm:text-xl font-semibold">{achievement}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

export default PlacementSection;
