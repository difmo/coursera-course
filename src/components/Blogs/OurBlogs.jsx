import React from "react";
import Slider from "react-slick"; // Import Slider from react-slick
import "slick-carousel/slick/slick.css"; // Correct import for slick-carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Correct import for slick-carousel theme CSS
import blog from "../../assets/ImageSec/gallaryimg2.jpg";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
const OurBlogs = () => {
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

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="font-serif py-4 px-8">
        <h1 className="text-4xl font-bold text-gray-800 flex justify-center">
          Our Blogs
        </h1>
      </header>

      <main className="p-8">
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
                  <p
                    href={card.link} // You can change this link or provide an action like a modal
                    className=" text-[#ff8c24] py-2 px-4 rounded-mdtext-center"
                  >
                    Read More
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OurBlogs;
