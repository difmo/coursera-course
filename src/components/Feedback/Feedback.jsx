import React from 'react';

const Feedback = () => {
  const feedbackData = [
    {
      name: "Tuhina Jawla - CPC",
      description:
        'Odyssey Informatics helped me develop the skills I needed to excel in the industry. The instructors were incredibly knowledgeable and supportive.',
      image: 'https://via.placeholder.com/150', // Placeholder for image
    },
    {
      name: "Prachi Gupta - CPC",
      description:
        'The medical coding training at Odyssey Informatics was comprehensive and engaging. I feel confident in my ability to apply what I’ve learned.',
      image: 'https://via.placeholder.com/150', // Placeholder for image
    },
    {
      name: "John Doe - CPC",
      description:
        "Odyssey Informatics helped me develop the skills I needed to excel in the industry. The instructors were incredibly knowledgeable and supportive.",
      image: "https://via.placeholder.com/150", // Replace with real image URL
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
