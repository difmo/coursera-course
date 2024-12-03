import React from "react";
import Slider from "react-slick"; // Import Slider from react-slick
import "slick-carousel/slick/slick.css"; // Correct import for slick-carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Correct import for slick-carousel theme CSS
import courses from "../../assets/ImageSec/gallaryimg1.jpg";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
const CoursesPopular = () => {
  const cards = [
    {
      title: "Card 1",
      description: "This is the description for card 1.",
      imgSrc: courses,
      link: "#", // Add a link or action here
    },
    {
      title: "Card 2",
      description: "This is the description for card 2.",
      imgSrc: courses,
      link: "#", // Add a link or action here
    },
    {
      title: "Card 3",
      description: "This is the description for card 3.",
      imgSrc: courses,
      link: "#", // Add a link or action here
    },
    {
      title: "Card 4",
      description: "This is the description for card 4.",
      imgSrc: courses,
      link: "#", // Add a link or action here
    },
    {
      title: "Card 5",
      description: "This is the description for card 5.",
      imgSrc: courses,
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
      <header className="font-serif py-6 px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 text-center">
          Our Popular Courses
        </h1>
      </header>

      {/* Content Section */}
      <main className="p-4 sm:p-8">
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
                    className="w-full h-40 sm:h-48 lg:h-56 object-cover rounded-lg"
                  />
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base px-2 sm:px-4">
                    {card.description}
                  </p>
                  <a
                    href={card.link}
                    className="text-[#ff8c24] py-2 px-4 rounded-md text-sm sm:text-base"
                  >
                    Read More
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* Placement Assistance Section */}
        <section className="bg-gray-100 mt-16 p-6 sm:p-8 rounded">
          <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 ">
            <div className="md:w-1/2">
              <img
                src={courses} // Replace with your image URL
                alt="Placement Assistance"
                className="rounded shadow w-full object-cover"
              />
            </div>
            <div className="md:w-1/2  px-7 md:text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
                100% Placement Assistance
              </h2>
              <p className="text-gray-600 mt-4 text-xl">
                Odyssey Informatics not only helps you to clear your certificate
                exam but also provides you with 100% placement assistance.
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-4 text-xl">
                <li>Dedicated HR Cell</li>
                <li>Collaboration with multmd:inational companies</li>
                <li>Strong networking with alumni</li>
                <li>Industry-ready training</li>
              </ul>
              <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-xl">
                Discover More
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Testimonial Section */}
      <section className="py-10 px-4 sm:px-8 bg-white">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8">
          What Our Trainees Say
        </h1>
        <div className="flex justify-center items-center px-4 sm:px-16">
          <Player
            playsInline
            poster="/assets/poster.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            className="w-full sm:w-3/4 lg:w-1/2"
          />
        </div>
      </section>
    </div>
  );
};

export default CoursesPopular;
