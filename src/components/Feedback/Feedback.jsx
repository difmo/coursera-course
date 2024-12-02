import React from 'react';

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
      image: 'https://via.placeholder.com/150', // Placeholder for image
    },
    // Add more feedback as needed
  ];

  return (
    <div className="my-16 px-8">
      {/* Headline */}
      <h2 className="text-4xl font-semibold text-center text-[#FF8C24] mb-8">
        What Students Are Saying About Odyssey Informatics
      </h2>

      {/* Feedback Scroller */}
      <div className="flex overflow-x-auto space-x-6 pb-4">
        {feedbackData.map((feedback, index) => (
          <div key={index} className="flex-shrink-0 bg-white rounded-lg shadow-lg w-80 p-6">
            <div className="flex items-center space-x-4">
              {/* Student Image */}
              <img
                src={feedback.image}
                alt={feedback.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              {/* Student Name and Description */}
              <div>
                <h3 className="font-semibold text-xl text-gray-800">{feedback.name}</h3>
                <p className="text-gray-600 mt-2">{feedback.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
