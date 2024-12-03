import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import blog from "../../assets/ImageSec/gallaryimg2.jpg";

const online = [
  {
    id: "1",
    titles: "Online Training",
    subtitle: "Join our Online Training Programs!",
    subtitlee: " Learn Anywhere, Anytime with our experts!",
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
    description: "This is the description for card 1.",
    imgSrc: blog,
    link: "#", // Add a link or action here
  },
  {
    title: "Card 2",
    description: "This is the description for card 2.",
    imgSrc: blog,
    link: "#", // Add a link or action here
  },
  {
    title: "Card 3",
    description: "This is the description for card 3.",
    imgSrc: blog,
    link: "#", // Add a link or action here
  },
  {
    title: "Card 4",
    description: "This is the description for card 4.",
    imgSrc: blog,
    link: "#", // Add a link or action here
  },
  {
    title: "Card 5",
    description: "This is the description for card 5.",
    imgSrc: blog,
    link: "#", // Add a link or action here
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

const courseContent = [
  "ICD-10-CM manual (Diagnosis Coding)",
  "CPT-4 manual (Procedure Coding)",
  "CPC Certification exam preparation",
  "5 CPC pattern Mock exams (100 Questions each)",
  "HCPCS Level II and HIPAA",
  "Human Anatomy, Medical Terminology (prefix-suffix)",
  "Interview Preparation",
];

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
    <div className="px-6 py-8 mt-12 bg-gray-100">
      {/* Online Training Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-bold py-36 text-gray-800">
          {onlineTitle}
        </h1>
        <p className="text-xl md:text-5xl leading-relaxed text-gray-800  py-4 font-bold px-8 mt-4">
          {subtitle}
        </p>
        <p className="text-xl md:text-5xl leading-relaxed text-gray-800  py-2 font-bold px-8 md:px-40 mt-4">
          {subtitlee}
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 py-4">
            {onlineTitle}
          </h2>
          <p className="text-gray-700 text-lg mb-4">{onlineDescription}</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {points.map((point, index) => (
              <li key={index} className="text-base">
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Image Content */}
        <div className="flex-1">
          <img
            src={onlineImage}
            alt="Online Training"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Group Classes Section */}
      <main className="p-8 gap-6">
        <section>
          <div className="relative">
            <Slider {...settings}>
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg shadow-lg bg-white flex flex-col items-center space-y-4 space-x-5"
                >
                  <img
                    src={card.imgSrc}
                    alt={card.title}
                    className="w-full h-full object-cover rounded-full"
                  />
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <p className="text-gray-600">{card.description}</p>
                  <a
                    href={card.link} // You can change this link or provide an action like a modal
                    className="text-[#ff8c24] py-2 px-4 rounded-md text-center"
                  >
                    Read More
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </main>

      <div className="px-6 py-12 bg-gray-50">
        {/* Top Section: Course Duration and Schedule */}
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-6 text-center  mb-12">
          {courseDetails.map((detail) => (
            <div key={detail.id} className="flex flex-col items-center">
              <div
                className={`w-16 h-16 ${detail.iconBgColor} rounded-full flex items-center justify-around`}
              >
                <i className={`${detail.iconClass} text-white text-2xl`}></i>
              </div>
              <h2 className="text-xl font-semibold mt-4">{detail.title}</h2>
              <p className="text-gray-600">{detail.description}</p>
            </div>
          ))}
        </div>

        {/* Middle Section: Image and Course Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <img
              src="https://odysseymt.com/wp-content/uploads/2023/07/online-training-2048x1363.jpg"
              alt="Online Training"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Course Content */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Course Content:
            </h1>
            <p className="text-gray-700 mb-6">
              The Medical Coding Training program at Odyssey Informatics
              includes the following coding manuals and contents:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-3">
              {courseContent.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <button className="mt-6 px-6 py-3 bg-black text-white rounded-md shadow-lg hover:bg-gray-800">
              Join Now →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Onlinetraining;
