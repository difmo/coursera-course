import React from "react";
import { Link } from "react-router-dom";

const ContentUs = () => {
  return (
    <div className=" bg-[#f3fbff] flex flex-col justify-center items-center py-4 px-6 sm:px-8">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-gray-700 py-14">
          Flexible learning options that fit your life
        </h1>
        <p className="text-2xl text-gray-600 my-5">
          Ready to unlock your potential?
        </p>

        <div className="space-x-4 py-3">
          <Link
            to="tel:7317001012"
            className="inline-block px-6 py-3 text-gray-600 bg-[#a5e4ff] rounded-lg text-lg font-medium"
          >
            Call us at 7317001012
          </Link>
          <Link
            to="mailto:classcourse25@gmail.com"
            className="inline-block px-6 py-3 text-gray-600 bg-[#a5e4ff] rounded-lg text-lg font-medium"
          >
            Email us at classcourse25@gmail.com
          </Link>
        </div>

        <div className="mt-8 text-lg  font-semibold text-gray-700">
          <p className="space-x-4">
            <button
              onClick={() => (window.location.href = "Classcodingpages")}
              className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600"
            >
              ClassCourse
            </button>
            <button
              onClick={() =>
                (window.location.href =
                  "https://www.example.com/personalizedlearning")
              }
              className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600"
            >
              PersonalizedLearning
            </button>
            <button
              onClick={() =>
                (window.location.href =
                  "https://www.example.com/onlineeducation")
              }
              className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600"
            >
              OnlineEducation
            </button>
            <button
              onClick={() =>
                (window.location.href =
                  "https://www.example.com/futureoflearning")
              }
              className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600"
            >
              FutureofLearning
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentUs;

// import React from "react";
// const cards = [
//   {
//     title: "Head Office",
//     description: "4/37 Vibhav Khand Gomti Nagar, Lucknow, Uttar Pradesh, 226010",
//     imgSrc:
//       "https://odysseymt.com/wp-content/uploads/2023/07/Flag_of_India.svg.webp",
//     subtitle: "India",
//     mobno: "+91 7317001012",

//   },
//   {
//     title: "Card 2",
//     description:
//       "4/37 Vibhav Khand Gomti Nagar, Lucknow, Uttar Pradesh, 226010",
//     imgSrc:
//       "https://tse4.mm.bing.net/th?id=OIP.onx9IraiCbuEyC7NWLKvawHaE8&pid=Api&P=0&h=180",
//     subtitle: "India",
//     mobno: "+91 7317001012",

//   },
//   {
//     title: "Card 3",
//     description:
//       "4/37 Vibhav Khand Gomti Nagar, Lucknow, Uttar Pradesh, 226010",
//     imgSrc:
//       "https://s.yimg.com/fz/api/res/1.2/HFald34SD39EVpsDZBXoBQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjA7cT04MDt3PTQ0MA--/https://s.yimg.com/zb/imgv1/c4611c00-d0f1-3c89-bcc7-b42f18c93195/t_500x300",
//     subtitle: "India",
//     mobno: "+91 7317001012",

//   },
// ];
// function ContactUs() {
//   return (
//     <>
//       <div className="bg-gray-50 py-10">
//         {/* Header */}
//         <div className="flex justify-center text-3xl sm:text-4xl font-bold py-5">
//           <h1>Contact Us</h1>
//         </div>

//         {/* Contact Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 sm:px-12 lg:px-20">
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className="p-4 rounded-lg border-2 bg-white flex flex-col space-y-4"
//             >
//               <div className="flex items-center space-x-4">
//                 <img
//                   src={card.imgSrc}
//                   alt={card.title}
//                   className="w-24 h-24 object-contain rounded-md"
//                 />
//                 <h3 className="text-xl md:text-4xl font-semibold">
//                   {card.subtitle}
//                 </h3>
//               </div>
//               <h3 className="text-lg sm:text-xl font-bold">{card.title}</h3>
//               <p className="text-gray-600 text-lg ">{card.description}</p>
//               <a
//                 href={`tel:${card.mobno}`}
//                 className="text-blue-600 text-xl  hover:underline"
//               >
//                 {card.mobno}
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default ContactUs;
