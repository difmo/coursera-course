import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CoursesPopular = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="bg-white shadow py-4 px-8">
        <h1 className="text-xl font-bold text-gray-800">Odyssey Informatics</h1>
      </header>

      {/* Content Section */}
      <main className="p-8">
        {/* Course Slider Section */}
        <section>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="my-8"
          >
            {/* Medical Billing Card */}
            <SwiperSlide>
              <div className="bg-white shadow rounded overflow-hidden">
                <img
                  src="https://via.placeholder.com/400x200" // Replace with your image URL
                  alt="Medical Billing"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Medical Billing
                  </h2>
                  <p className="text-sm text-gray-600 mt-2">
                    Odyssey Informatics CPB medical billing course provides
                    up-to-date information relating to the health insurance
                    industry and reimbursement methodologies for correct claim
                    submission.
                  </p>
                  <a
                    href="#"
                    className="text-blue-500 text-sm font-medium hover:underline mt-4 inline-block"
                  >
                    Read More --&gt;
                  </a>
                </div>
              </div>
            </SwiperSlide>

            {/* Australian Medical Coding Card */}
            <SwiperSlide>
              <div className="bg-white shadow rounded overflow-hidden">
                <img
                  src="https://via.placeholder.com/400x200" // Replace with your image URL
                  alt="Australian Medical Coding"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Australian Medical Coding
                  </h2>
                  <p className="text-sm text-gray-600 mt-2">
                    Also known as Australian Module or ICD-10 AM is the latest
                    in a series of healthcare industry standards.
                  </p>
                  <a
                    href="#"
                    className="text-blue-500 text-sm font-medium hover:underline mt-4 inline-block"
                  >
                    Read More --&gt;
                  </a>
                </div>
              </div>
            </SwiperSlide>

            {/* Medical Coding Card */}
            <SwiperSlide>
              <div className="bg-white shadow rounded overflow-hidden">
                <img
                  src="https://via.placeholder.com/400x200" // Replace with your image URL
                  alt="Medical Coding"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Medical Coding
                  </h2>
                  <p className="text-sm text-gray-600 mt-2">
                    Medical Coding focuses on analyzing medical procedures and
                    linking them with standardized codes.
                  </p>
                  <a
                    href="#"
                    className="text-blue-500 text-sm font-medium hover:underline mt-4 inline-block"
                  >
                    Read More --&gt;
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

        {/* Placement Assistance Section */}
        <section className="bg-gray-100 mt-16 p-8 rounded">
          <div className="flex flex-col md:flex-row items-center">
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
            <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8">
              <img
                src="https://via.placeholder.com/400x300" // Replace with your image URL
                alt="Placement Assistance"
                className="rounded shadow"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CoursesPopular;
