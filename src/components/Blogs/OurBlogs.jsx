import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurBlogs = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Revolutionizing Healthcare with AI",
      description:
        "Discover how artificial intelligence is transforming diagnostics, patient care, and personalized medicine.",
      image:
        "https://img.freepik.com/free-photo/young-female-doctor-wearing-vr-glasses-holding-her-hand-up-high-quality-photo_144627-75383.jpg?uid=R175915010&ga=GA1.1.1302421477.1730100475&semt=ais_tags_boosted",
      link: "/DataScienceBlog",
    },
    {
      title: "Big Data",
      description:
        "Explore the role of big data in uncovering insights, optimizing operations, and driving innovation across industries.",
      image:
        "https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169850.jpg?uid=R175915010&ga=GA1.1.1302421477.1730100475&semt=ais_tags_boosted",
      link: "/BigData",
    },
    {
      title: "Cloud Computing",
      description:
        "Learn how cloud technology enables scalability, flexibility, and cost-efficiency for businesses in a connected world.",
      image:
        "https://img.freepik.com/free-vector/cloud-computing-infographic_23-2147488748.jpg?uid=R175915010&ga=GA1.1.1302421477.1730100475&semt=ais_tags_boosted",
      link: "/CloudComputing",
    },
    {
      title: "The Rise of Machine Learning",
      description:
        "Understand the impact of machine learning in automating processes and enhancing decision-making.",
      image:
        "https://img.freepik.com/free-photo/robot-assembly-line_1048-2674.jpg?uid=R175915010&ga=GA1.1.1302421477.1730100475&semt=ais_tags_boosted",
      link: "/MachineLearning",
    },
    {
      title: "Cybersecurity in the Digital Age",
      description:
        "Delve into advanced techniques and tools safeguarding data and systems against modern cyber threats.",
      image:
        "https://img.freepik.com/free-photo/medium-shot-man-with-hoodie-holding-laptop_23-2149192118.jpg?uid=R175915010&ga=GA1.1.1302421477.1730100475&semt=ais_tags_boosted",
      link: "/Cybersecurity",
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
    <div className="bg-gray-50 py-8">
      {/* Header Section */}
      <header className="font-serif py-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 sm:text-3xl md:text-4xl">
          Our Blogs
        </h1>
        <p className="text-gray-600 mt-2 text-lg sm:text-base">
          Insights, trends, and innovations
        </p>
      </header>

      <main className="px-4 sm:px-2">
        <section>
          <Slider {...settings}>
            {cards.map((card, index) => (
              <div key={index} className="p-4 sm:p-2">
                <div className="rounded-lg shadow-lg bg-white overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-48 object-cover sm:h-40 md:h-48"
                  />
                  <div className="p-4 flex flex-col items-center text-center">
                    <h3 className="text-lg font-semibold text-gray-800 sm:text-base">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-2 sm:text-xs">
                      {card.description}
                    </p>
                    <button
                      onClick={() => navigate(card.link)}
                      className="mt-4 py-2 px-6 rounded-md border border-[#ff8c24] text-[#ff8c24] hover:bg-[#ff8c24] hover:text-white transition duration-300 text-sm sm:text-xs"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </section>
      </main>
    </div>
  );
};

export default OurBlogs;
