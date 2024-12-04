import React, { useState } from "react";

const Feedback = () => {
  const feedbackData = [
    {
      name: "John Doe",
      description:
        "Odyssey Informatics helped me develop the skills I needed to excel in the industry. The instructors were incredibly knowledgeable and supportive.",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.zg8PeiMn0oQApeDAckXsHAHaIY&pid=Api&P=0&h=180",
    },
    {
      name: "Jane Smith",
      description:
        "The medical coding training at Odyssey Informatics was comprehensive and engaging. I feel confident in my ability to apply what I’ve learned.",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.PEGPSahgXhP1IUYdX4X4KgHaHi&pid=Api&P=0&h=180",
    },
    {
      name: "Alice Johnson",
      description:
        "I had a great experience with Odyssey Informatics. The curriculum was well-structured, and I appreciated the hands-on approach.",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.-7WoTpYEPjnccwC4iK383AHaHa&pid=Api&P=0&h=180",
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
    <div className="my-16 px-4 sm:px-8 relative ">
      {/* Headline */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-[#FF8C24] mb-8 ">
        What Students Are Saying About Odyssey Informatics
      </h2>

      {/* Feedback Card */}
      <div className="relative flex flex-col items-center ">
        <div className="bg-[#008ECC] rounded-lg shadow-lg w-full sm:w-[700px] md:w-[800px] h-auto sm:h-[400px] p-6 flex items-center justify-center"
         style={{
          backgroundImage: `url('/bg.svg')`,
          background:'cover', 
          backgroundSize:'50%',
          backgroundRepeat: 'no-repeat',
        }}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Student Image */}
            <div className="flex-shrink-0">
              <img
                src={currentFeedback.image}
                alt={currentFeedback.name}
                className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-full object-cover"
              />
            </div>

            {/* Title and Description */}
            <div className="text-center sm:text-left">
              <h3 className="font-semibold text-xl sm:text-2xl text-gray-800 mb-4">
                {currentFeedback.name}
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                {currentFeedback.description}
              </p>
            </div>
          </div>
        </div>

        {/* Buttons Positioned Outside */}
        <div className="w-full flex justify-between items-center mt-6">
          {/* Left Button */}
          <button
            onClick={handlePrev}
            className="bg-gray-200 hover:bg-gray-300 text-black p-3 sm:p-4 rounded-full shadow-md transition-all duration-300"
          >
            &lt;
          </button>

          {/* Right Button */}
          <button
            onClick={handleNext}
            className="bg-gray-200 hover:bg-gray-300 text-black p-3 sm:p-4 rounded-full shadow-md transition-all duration-300"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
