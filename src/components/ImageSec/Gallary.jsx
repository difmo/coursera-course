import React from "react";

const Gallary = () => {
  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Image Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-6">
        {/* Image Box 1 */}
        <div className="relative group">
          <img
            src="https://via.placeholder.com/300"
            alt="Image 1"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-4xl">+</span>
          </div>
        </div>

        {/* Image Box 2 */}
        <div className="relative group">
          <img
            src="https://via.placeholder.com/300"
            alt="Image 2"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-4xl">+</span>
          </div>
        </div>

        {/* Image Box 3 */}
        <div className="relative group">
          <img
            src="https://via.placeholder.com/300"
            alt="Image 3"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-4xl">+</span>
          </div>
        </div>

        {/* Image Box 4 */}
        <div className="relative group">
          <img
            src="https://via.placeholder.com/300"
            alt="Image 4"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-4xl">+</span>
          </div>
        </div>

        {/* Image Box 5 */}
        <div className="relative group">
          <img
            src="https://via.placeholder.com/300"
            alt="Image 5"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-4xl">+</span>
          </div>
        </div>

        {/* Image Box 6 */}
        <div className="relative group">
          <img
            src="https://via.placeholder.com/300"
            alt="Image 6"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-4xl">+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
