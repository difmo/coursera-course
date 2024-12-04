import React from "react";
const cards = [
  {
    title: "Head Office",
    description: "91 Springboard C-2, Sector-1 Noida 201310 Uttar Pradesh,",
    imgSrc:
      "https://odysseymt.com/wp-content/uploads/2023/07/Flag_of_India.svg.webp",
    subtitle: "India",
    mobno: "+91 9818174285",
  },
  {
    title: "Card 2",
    description:
      "4/37 Vibhav Khand Gomti Nagar, Lucknow, Uttar Pradesh, 226010",
    imgSrc:
      "https://tse4.mm.bing.net/th?id=OIP.onx9IraiCbuEyC7NWLKvawHaE8&pid=Api&P=0&h=180",
    subtitle: "Pakistan",
    mobno: "+91 9818174285",
  },
  {
    title: "Card 3",
    description:
      "4/37 Vibhav Khand Gomti Nagar, Lucknow, Uttar Pradesh, 226010",
    imgSrc:
      "https://s.yimg.com/fz/api/res/1.2/HFald34SD39EVpsDZBXoBQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjA7cT04MDt3PTQ0MA--/https://s.yimg.com/zb/imgv1/c4611c00-d0f1-3c89-bcc7-b42f18c93195/t_500x300",
    subtitle: "Australia",
    mobno: "+91 9818174285",
  },
];
function ContactUs() {
  return (
    <>
      <div className="bg-gray-50 py-10">
        {/* Header */}
        <div className="flex justify-center text-3xl sm:text-4xl font-bold py-5">
          <h1>Contact Us</h1>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 sm:px-12 lg:px-20">
          {cards.map((card, index) => (
            <div
              key={index}
              className="p-4 rounded-lg border-2 bg-white flex flex-col space-y-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={card.imgSrc}
                  alt={card.title}
                  className="w-24 h-24 object-contain rounded-md"
                />
                <h3 className="text-xl md:text-4xl font-semibold">
                  {card.subtitle}
                </h3>
              </div>
              <h3 className="text-lg sm:text-xl font-bold">{card.title}</h3>
              <p className="text-gray-600 text-lg ">{card.description}</p>
              <a
                href={`tel:${card.mobno}`}
                className="text-blue-600 text-xl  hover:underline"
              >
                {card.mobno}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ContactUs;
