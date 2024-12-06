import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import blog from "../../assets/ImageSec/gallaryimg2.jpg";

const online = [
  {
    id: "1",
    titles: "Online Training",
    subtitle: "Join our Online Training Programs!",
    subtitlee: "Learn Anywhere, Anytime with our experts!",
    discraption:
      "Apart from self-paced sessions and LIVE sessions, we have One-on-One Live sessions where your trainer will be conducting classes exclusively for you only.",
    points: ["ICD-10 CM", "CPT-4", "HCPCS codes"],
    online:
      "https://odysseymt.com/wp-content/uploads/2023/07/online-training-2048x1363.jpg",
  },
];

const cards = [
  {
    title: "Card 1",
    description: "Explore coding manuals and concepts.",
    imgSrc: blog,
    link: "#",
  },
  {
    title: "Card 2",
    description: "Learn from certified trainers.",
    imgSrc: blog,
    link: "#",
  },
  {
    title: "Card 3",
    description: "Access live sessions anytime.",
    imgSrc: blog,
    link: "#",
  },
];

const courseDetails = [
  {
    id: 1,
    title: "Course Duration",
    description: "3-4 Months",
    iconClass: "fas fa-clock",
    iconBgColor: "bg-yellow-400",
  },
  {
    id: 2,
    title: "Schedule",
    description: "Live lectures on Google Meet for 1.5 Hours",
    iconClass: "fas fa-calendar-alt",
    iconBgColor: "bg-yellow-400",
  },
];

const settings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  dots: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

function Onlinetraining() {
  const {
    titles: onlineTitle,
    subtitle,
    subtitlee,
    discraption: onlineDescription,
    points,
    online: onlineImage,
  } = online[0];

  return (
    < >
    <div className="bg-gray-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-16 px-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold">{onlineTitle}</h1>
        <p className="mt-4 text-lg md:text-2xl">{subtitle}</p>
        <p className="mt-2 text-lg md:text-2xl">{subtitlee}</p>
      </motion.div>

      {/* Details Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{onlineTitle}</h2>
          <p className="text-lg text-gray-700 mb-4">{onlineDescription}</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={onlineImage}
            alt="Online Training"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </div>

      {/* Top Section: Course Duration and Schedule */}
      <div className="px-6 py-12 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center mb-12"
        >
          {courseDetails.map((detail) => (
            <div key={detail.id} className="flex flex-col items-center">
              <div
                className={`w-16 h-16 ${detail.iconBgColor} rounded-full flex items-center justify-center`}
              >
                <i className={`${detail.iconClass} text-white text-2xl`}></i>
              </div>
              <h2 className="text-xl font-semibold mt-4">{detail.title}</h2>
              <p className="text-gray-600">{detail.description}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Training Programs Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center text-gray-800 mb-12"
          >
            Explore Our Training Programs
          </motion.h2>
          <Slider {...settings}>
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="px-4"
              >
                <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center space-y-4 border border-gray-200">
                  <img
                    src={card.imgSrc}
                    alt={card.title}
                    className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-blue-500"
                  />
                  <h3 className="text-xl font-semibold text-gray-800">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {card.description}
                  </p>
                  <motion.a
                    href={card.link}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all"
                  >
                    Learn More
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    </div></>
  );
}
// o;skdfj;sodklzjfosdklx

export default Onlinetraining;
