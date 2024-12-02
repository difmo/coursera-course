import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules"; // Import Swiper modules

const Feedback = () => {
  const feedbackData = [
    {
      name: "Tuhina Jawla - CPC",
      description:
        "Best institute for Medical Coding training with a positive environment. The institute is blessed with hardworking and very supportive trainers who are a constant source of inspiration.",
      image: "https://via.placeholder.com/150", // Replace with real image URL
    },
    {
      name: "Prachi Gupta - CPC",
      description:
        "My experience at Odyssey has been wonderful. I have learned a lot from my mentors and got guidance during the sessions for exam and interview preparation. I am thankful to Odyssey.",
      image: "https://via.placeholder.com/150", // Replace with real image URL
    },
    {
      name: "John Doe - CPC",
      description:
        "Odyssey Informatics helped me develop the skills I needed to excel in the industry. The instructors were incredibly knowledgeable and supportive.",
      image: "https://via.placeholder.com/150", // Replace with real image URL
    },
  ];

  return (
    <div className="my-16 px-4">
      {/* Section Header */}
      <h2 className="text-4xl font-bold text-center text-[#FF8C24] mb-8">
        What Students Are Saying About Odyssey Informatics
      </h2>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 }, // 1 slide for small screens
          1024: { slidesPerView: 2 }, // 2 slides for medium screens
        }}
        className="py-8"
      >
        {feedbackData.map((feedback, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 text-center">
              <img
                src={feedback.image}
                alt={feedback.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feedback.name}
              </h3>
              <p className="text-gray-600">{feedback.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Feedback;
