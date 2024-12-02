import React from "react";
import Home1 from "./Landingpages/Why-us";
import OurOfferings from "./Landingpages/OurOfferings";
import Gallary from "./ImageSec/Gallary";
import { FcFeedback } from "react-icons/fc";
import Feedback from "./Feedback/Feedback";
import CoursesPopular from "./Our Popular Courses/CoursesPopular";
import ContactUs from "./Contact/ContactUs";
import OurBlogs from "./Blogs/OurBlogs";

function Home() {
  return (
    <>
      <div>
        <div className="bg-[#ddfdf2] py-12 px-4 md:px-20  h-[850px]">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div
              className="flex flex-col justify-center items-start space-y-6 animated fadeInDown"
              data-animation-delay="400"
            >
              <h2 className="text-3xl md:text-5xl w-full font-semibold text-gray-800 ">
                Join Medical Coding, a<span className=""> high-growth </span>
                career
              </h2>
              <p className="text-lg text-gray-600">
                An education that provides higher growth.
              </p>

              <form
                action="/#wpcf7-f213-p42-o1"
                method="post"
                className="space-y-4 w-full"
              >
                <div>
                  <input
                    type="tel"
                    name="tel-466"
                    placeholder="Contact number"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="submit"
                    value="Request a Quote"
                    className=" absolute w-40 bottom-[46px] right-[51%] bg-[#ff8c24] text-white py-3 rounded-md hover:bg-[#ff8c24] transition duration-200"
                  />
                </div>
              </form>

              <div className="flex items-center space-x-4">
                <div className="text-4xl font-sem">
                  <p className="text-lg text-black">
                    Over{" "}
                    <span className="text-[#ff8c24]">150,000 students</span> all
                    over the world.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="relative">
                <img
                  src="https://odysseymt.com/wp-content/uploads/elementor/thumbs/girl2-1-q9b1112txcsq911nxoca2ek393shthrou1wkxgc074.png"
                  alt="girl"
                  className=" w-[500px] h-[800px]"
                />
              </div>

              <div className="absolute -bottom-[300PX] right-20 w-64  text-center space-y-4 animated fadeInUp">
                <div className="bg-white p-4 shadow-lg rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-600">
                    Join Job Integrated Program now & ensure placement
                  </h4>
                  <a
                    href="https://odysseymt.com/courses-offered/"
                    className="text-blue-600 hover:underline"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* uidcbwdvkjbwrgr  */}
      <Home1 />
      <OurOfferings />
      <CoursesPopular />
      <Gallary />
      <Feedback />
      <ContactUs />
      <OurBlogs />
    </>
  );
}

export default Home;
