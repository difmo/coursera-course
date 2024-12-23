import React from "react";
import Home1 from "./Landingpages/Why-us";
import OurOfferings from "./Landingpages/OurOfferings";
import Gallary from "./ImageSec/Gallary";
import Feedback from "./Feedback/Feedback";
import CoursesPopular from "./Our Popular Courses/CoursesPopular";
import ContactUs from "./Blogs/Contact/ContactUs";
import OurBlogs from "./Blogs/OurBlogs";
// import ClassroomTrain from "./MedicalCoding/ClassroomTrain";

function Home() {
  return (
    <>
      <div className="bg-[#008ECC]  px-4 md:px-20 h-auto flex items-center "   style={{
              backgroundImage: `url('/bg.svg')`,
              background: "cover",
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
            }}>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div
            className="flex flex-col pt-10 justify-center items-start space-y-6 h-full"
          
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight">
              Join Medical Coding, A{" "}
              <span className="text-[#ff8c24]">High-Growth</span> Career
            </h2>
            <p className="text-base sm:text-lg text-gray-100">
              An education that provides higher growth.
            </p>

            <form
              action="/#wpcf7-f213-p42-o1"
              method="post"
              className="space-y-4 w-full max-w-md"
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
                  className="bg-[#FF8C24] text-white px-6 py-3 rounded-full  hover:bg-[#FF7A19]"                />
              </div>
            </form>

            <div className="flex items-center space-x-4">
              <p className="text-xl md:text-2xl text-white font-bold">
                Over <span className="text-[#ff8c24] ">150,000 students</span>{" "}
                all over the world.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative flex justify-center items-center ">
            <img
              src="https://odysseymt.com/wp-content/uploads/elementor/thumbs/girl2-1-q9b1112txcsq911nxoca2ek393shthrou1wkxgc074.png"
              alt="girl"
              className="w-full max-w-[500px] sm:max-w-[400px] md:max-w-[500px] h-auto mx-auto"
            />

            <div className="absolute -bottom-4 sm:bottom-[-20px] md:bottom-[-50px] w-full sm:w-72 right-0 sm:right-4 bg-white p-4 shadow-lg rounded-lg text-center">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-800">
                Join Job Integrated Program now & ensure placement
              </h4>
              <a href="#" className="text-[#ff8c24] hover:underline block mt-2">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
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
