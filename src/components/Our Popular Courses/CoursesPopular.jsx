import React from "react";
import Slider from "react-slick"; // Import Slider from react-slick
import "slick-carousel/slick/slick.css"; // Correct import for slick-carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Correct import for slick-carousel theme CSS
import "video-react/dist/video-react.css";

const CoursesPopular = () => {
  const cards = [
    {
      title: "Computer Science 101",
      description:
        "CS101 is a self-paced course that teaches the essential ideas of Computer Science for a zero-prior-experience audience. Computers can appear very complicated, but in reality, computers work within just a few, simple patterns. CS101 demystifies and brings those patterns to life, which is useful for anyone using computers today.",
      imgSrc: "https://online.stanford.edu/sites/default/files/styles/widescreen_large/public/2018-03/engineering-computer-science-computer-science-101_soe-ycscs101-sp.jpg?h=ae1281eb&itok=RHdC0YME",
      link: "https://online.stanford.edu/courses/soe-ycscs101-computer-science-101",
    },
    {
      title: "R Programming Fundamentals",
      description:
        "This course covers the basics of R: a free programming language and software environment used for statistical computing and graphics. R is widely used by data analysts, statisticians, and data scientists around the world. This course covers an introduction to R, from installation to basic statistical functions. You will learn to work with variable and external data sets, write functions, and hear from one of the co-creators of the R language, Robert Gentleman.",
      imgSrc: "https://online.stanford.edu/sites/default/files/styles/widescreen_large/public/2018-03/r-programming-fundamentals_xfds111.jpg?h=66807ab2&itok=ds4RQdtM",
      link: "https://online.stanford.edu/courses/xfds112-r-programming-fundamentals",
    },
    {
      title: "Product Management Program Preview",
      description: "This short preview will give you a chance to experience what it’s like to take courses in this Product Management Program. You will access the course platform, watch videos, and complete short activities. You will get to know the teaching styles of the instructors and get a taste of the content you can learn throughout the program. This preview highlights three courses:",
      imgSrc: "https://online.stanford.edu/sites/default/files/styles/widescreen_large/public/2023-02/Product-Management-Program-Preview.jpg?h=8abcec71&itok=7Nhz8uOL",
      link: "https://online.stanford.edu/courses/xprod100-product-management-program-preview",
    },
    {
      title: "Designing Your Career",
      description: "This online course uses a design thinking approach to help people of any age and academic background develop a constructive and effective approach to designing their vocation. This course is primarily comprised of 5 career-oriented vocational way-finding concepts, illustrated through videos and expanded through personal reflections and exercises.",
      imgSrc: "https://online.stanford.edu/sites/default/files/styles/widescreen_large/public/2018-04/_design-creativity-entrepreneurship-business-management-designing-career_TDS-Y0003.jpg?h=66807ab2&itok=g1OdEpvd",
      link: "https://online.stanford.edu/courses/tds-y0003-designing-your-career",
    },
    // {
    //   title: "Card 5",
    //   description: "This is the description for card 5.",
    //   imgSrc: courses,
    //   link: "https://online.stanford.edu/courses/xine100-innovation-and-entrepreneurship-program-preview",
    // },
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
      <header className="font-serif py-6 px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 text-center">
          Our Popular Courses
        </h1>
      </header>
      <main className="p-4 sm:p-8">
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
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base px-2 sm:px-4 overflow-hidden text-ellipsis whitespace-nowrap mb-2">
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
      </main>
    </div>
  );
};

export default CoursesPopular;
