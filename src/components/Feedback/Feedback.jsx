import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules"; // Import Swiper modules

const Feedback = () => {
  const feedbackData = [
    {
      name: 'John Doe',
      description:
        'Odyssey Informatics helped me develop the skills I needed to excel in the industry. The instructors were incredibly knowledgeable and supportive.',
      image: 'https://via.placeholder.com/150', // Placeholder for image
    },
    {
      name: 'Jane Smith',
      description:
        'The medical coding training at Odyssey Informatics was comprehensive and engaging. I feel confident in my ability to apply what I’ve learned.',
      image: 'https://via.placeholder.com/150', // Placeholder for image
    },
    {
      name: 'Alice Johnson',
      description:
        'I had a great experience with Odyssey Informatics. The curriculum was well-structured, and I appreciated the hands-on approach.',
      image: 'https://via.placeholder.com/150',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? feedbackData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === feedbackData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentFeedback = feedbackData[currentIndex];

  return (
    <div className="my-16 px-8 relative">
      {/* Headline */}
      <h2 className="text-4xl font-semibold text-center text-[#FF8C24] mb-8">
        What Students Are Saying About Odyssey Informatics
      </h2>

      {/* Feedback Card */}
      <div className="flex items-center justify-center relative">
        {/* Left Button */}
        <button
          onClick={handlePrev}
          className="absolute left-0 bg-[#FF8C24] text-white p-3 rounded-full shadow-md hover:bg-[#e67c1f] transition-all duration-300"
        >
          &lt;
        </button>

        {/* Feedback Content */}
        <div className="bg-white rounded-lg shadow-lg w-[630px] h-[340px] p-6 flex flex-col justify-between">
          <div className="flex items-center space-x-4">
            {/* Student Image */}
            <img
              src={currentFeedback.image}
              alt={currentFeedback.name}
              className="w-20 h-20 rounded-full object-cover"
            />
            {/* Student Name */}
            <div>
              <h3 className="font-semibold text-2xl text-gray-800">
                {currentFeedback.name}
              </h3>
            </div>
          </div>
          {/* Student Description */}
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            {currentFeedback.description}
          </p>
        </div>

        {/* Right Button */}
        <button
          onClick={handleNext}
          className="absolute right-0 bg-[#FF8C24] text-white p-3 rounded-full shadow-md hover:bg-[#e67c1f] transition-all duration-300"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Feedback;
