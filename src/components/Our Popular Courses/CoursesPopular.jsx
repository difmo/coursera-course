import React from "react";
import Slider from "react-slick"; // Import Slider from react-slick
import "slick-carousel/slick/slick.css"; // Correct import for slick-carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Correct import for slick-carousel theme CSS

import { Player } from "video-react";
import "video-react/dist/video-react.css";
const CoursesPopular = () => {
  const cards = [
    {
      title: "Card 1",
      description: "This is the description for card 1.",
      imgSrc: "https://via.placeholder.com/300x200",
      link: "#", // Add a link or action here
    },
    {
      title: "Card 2",
      description: "This is the description for card 2.",
      imgSrc: "https://via.placeholder.com/300x200",
      link: "#", // Add a link or action here
    },
    {
      title: "Card 3",
      description: "This is the description for card 3.",
      imgSrc: "https://via.placeholder.com/300x200",
      link: "#", // Add a link or action here
    },
    {
      title: "Card 4",
      description: "This is the description for card 4.",
      imgSrc: "https://via.placeholder.com/300x200",
      link: "#", // Add a link or action here
    },
    {
      title: "Card 5",
      description: "This is the description for card 5.",
      imgSrc: "https://via.placeholder.com/300x200",
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

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="font-serif py-4 px-8">
        <h1 className="text-4xl font-bold text-gray-800 flex justify-center">
          Our Popular Courses
        </h1>
      </header>

      {/* Content Section */}
      <main className="p-8">
        {/* Course Slider Section */}
        <section>
          <div className="relative">
            <Slider {...settings}>
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg shadow-lg bg-white flex flex-col items-center space-y-4"
                >
                  <img
                    src={card.imgSrc}
                    alt={card.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <p className="text-gray-600">{card.description}</p>
                  <a
                    href={card.link} // You can change this link or provide an action like a modal
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 text-center"
                  >
                    Read More
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* Placement Assistance Section */}
        <section className="bg-gray-100 mt-16 p-8 rounded">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8">
              <img
                src="https://via.placeholder.com/400x300" // Replace with your image URL
                alt="Placement Assistance"
                className="rounded shadow"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800">
                100% Placement Assistance
              </h2>
              <p className="text-gray-600 mt-4">
                Odyssey Informatics not only helps you to clear your certificate
                exam but also provides you with 100% placement assistance.
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-4">
                <li>Dedicated HR Cell</li>
                <li>Collaboration with multinational companies</li>
                <li>Strong networking with alumni</li>
                <li>Industry-ready training</li>
              </ul>
              <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Discover More
              </button>
            </div>
          </div>
        </section>
      </main>
      <div>
        <h1 className="font-bold text-5xl justify-center flex py-5">
          What Our Trainees Say
        </h1>
        <div className="justify-center flex items-center px-32 py-4">
          <Player
            playsInline
            poster="/assets/poster.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          />
        </div>
      </div>
    </div>
  );
};

export default CoursesPopular;
