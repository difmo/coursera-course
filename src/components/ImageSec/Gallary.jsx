import React from "react";
import img1 from "../../assets/ImageSec/gallaryimg1.jpg";
import img2 from "../../assets/ImageSec/gallaryimg2.jpg";
import img3 from "../../assets/ImageSec/gallaryimg3.jpg";
import img4 from "../../assets/ImageSec/gallaryimg4.jpg";
import img5 from "../../assets/ImageSec/gallaryimg5.jpg";
import img6 from "../../assets/ImageSec/gallaryimg6.jpg";

const Gallary = () => {
  const images = [
    { src: img1, alt: "Beautiful Landscape 1" },
    { src: img2, alt: "Beautiful Landscape 2" },
    { src: img3, alt: "Beautiful Landscape 3" },
    { src: img4, alt: "Beautiful Landscape 4" },
    { src: img5, alt: "Beautiful Landscape 5" },
    { src: img6, alt: "Beautiful Landscape 6" },
  ];

  return (
    <div
      className="min-h-screen py-12 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/bg.svg')`,
        backgroundSize: "cover",
      }}
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-indigo-600">
        Image Gallery
      </h2>
      <div className="grid grid-cols-1 gap-4 px-4 sm:px-6 lg:px-8 sm:grid-cols-2 md:grid-cols-3">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            {/* Maintain aspect ratio */}
            <div className="w-full aspect-w-1 aspect-h-1 sm:aspect-w-4 sm:aspect-h-3">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-md shadow-md"
              />
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
              <span className="text-white text-sm sm:text-lg md:text-xl font-bold">
                View
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallary;
