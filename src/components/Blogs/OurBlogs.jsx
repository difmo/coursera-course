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
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-50 py-8">
      {/* Header Section */}
      <header className="font-serif py-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Our Blogs</h1>
        <p className="text-gray-600 mt-2">Insights, trends, and innovations</p>
      </header>

      <main className="px-4">
        <section>
          <Slider {...settings}>
            {cards.map((card, index) => (
              <div key={index} className="p-4">
                <div className="rounded-lg shadow-lg bg-white overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex flex-col items-center text-center">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                      {card.description}
                    </p>
                    <button
                      onClick={() => navigate(card.link)}
                      className="mt-4 py-2 px-6 rounded-md border border-[#ff8c24] text-[#ff8c24] hover:bg-[#ff8c24] hover:text-white transition duration-300"
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
