import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CoursesPopular = () => {
  const cards = [
    {
      title: "Computer Science 101",
      description:
        "CS101 is a self-paced course that teaches the essential ideas of Computer Science for a zero-prior-experience audience.",
      imgSrc:
        "https://online.stanford.edu/sites/default/files/styles/widescreen_large/public/2018-03/engineering-computer-science-computer-science-101_soe-ycscs101-sp.jpg?h=ae1281eb&itok=RHdC0YME",
      link: "https://online.stanford.edu/courses/soe-ycscs101-computer-science-101",
    },
    {
      title: "R Programming Fundamentals",
      description:
        "This course covers the basics of R, a free programming language widely used for statistical computing and graphics.",
      imgSrc:
        "https://online.stanford.edu/sites/default/files/styles/widescreen_large/public/2018-03/r-programming-fundamentals_xfds111.jpg?h=66807ab2&itok=ds4RQdtM",
      link: "https://online.stanford.edu/courses/xfds112-r-programming-fundamentals",
    },
    {
      title: "Product Management Program Preview",
      description:
        "This short preview offers a glimpse into the Product Management Program with engaging videos and activities.",
      imgSrc:
        "https://online.stanford.edu/sites/default/files/styles/widescreen_large/public/2023-02/Product-Management-Program-Preview.jpg?h=8abcec71&itok=7Nhz8uOL",
      link: "https://online.stanford.edu/courses/xprod100-product-management-program-preview",
    },
    {
      title: "Designing Your Career",
      description:
        "A design thinking approach to help individuals of any background craft a meaningful and fulfilling career.",
      imgSrc:
        "https://online.stanford.edu/sites/default/files/styles/widescreen_large/public/2018-04/_design-creativity-entrepreneurship-business-management-designing-career_TDS-Y0003.jpg?h=66807ab2&itok=g1OdEpvd",
      link: "https://online.stanford.edu/courses/tds-y0003-designing-your-career",
    },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 3, // Default: 3 slides on larger screens
    slidesToScroll: 1, // Scroll one slide at a time
    speed: 500, // Transition speed
    dots: true, // Show dots for navigation
    arrows: false, // Default arrows hidden
    responsive: [
      {
        breakpoint: 1024, // For tablet screens
        settings: {
          slidesToShow: 2, // Show 2 slides
          arrows: true, // Show arrows
        },
      },
      {
        breakpoint: 768, // For small tablets and larger mobile devices
        settings: {
          slidesToShow: 1, // Show only 1 slide
          arrows: true, // Show arrows
          dots: false, // Hide dots to save space on small screens
        },
      },
      {
        breakpoint: 480, // For very small screens (e.g., mobile portrait)
        settings: {
          slidesToShow: 1, // Show 1 slide
          arrows: false, // Hide arrows
          dots: false, // Hide dots as well for cleaner UI
        },
      },
    ],
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="font-serif py-6 px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 text-center">
          Our Popular Courses
        </h1>
      </header>

      {/* Slider Section */}
      <main className="flex-grow p-4 ">
        <section>
          <div className="relative">
            <Slider {...settings}>
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg shadow-lg bg-white flex flex-col items-center space-y-4 h-full w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1rem)] mx-auto"
                >
                  <img
                    src={card.imgSrc}
                    alt={card.title}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg"
                  />
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 text-center">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base py-4 px-4 text-center line-clamp-3">
                    {card.description}
                  </p>
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-6 rounded-md text-sm sm:text-base bg-[#ff8c24] text-white hover:bg-[#e97d1f] transition-all duration-300"
                  >
                    Read More
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CoursesPopular;
