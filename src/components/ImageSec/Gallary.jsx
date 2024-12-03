import React from "react";
import img1 from "../../assets/ImageSec/gallaryimg1.jpg";
import img2 from "../../assets/ImageSec/gallaryimg2.jpg";
import img3 from "../../assets/ImageSec/gallaryimg3.jpg";
import img4 from "../../assets/ImageSec/gallaryimg4.jpg";
import img5 from "../../assets/ImageSec/gallaryimg5.jpg";
import img6 from "../../assets/ImageSec/gallaryimg6.jpg";

const Gallary = () => {
  const images = [
    { src: img1, alt: "Image 1" },
    { src: img2, alt: "Image 2" },
    { src: img3, alt: "Image 3" },
    { src: img4, alt: "Image 4" },
    { src: img5, alt: "Image 5" },
    { src: img6, alt: "Image 6" },
  ];

  return (
    <div
      className="min-h-screen py-12 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/bg.svg')`,
        background:'cover', 
        backgroundSize:'40%,50%'
      }}
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 text-indigo-600">
        Image Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-md"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-2xl sm:text-3xl lg:text-4xl">
                +
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallary;
