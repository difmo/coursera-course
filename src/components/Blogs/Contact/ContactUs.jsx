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
      "https://odysseymt.com/wp-content/uploads/2023/07/Flag_of_India.svg.webp",
    subtitle: "India",
    mobno: "+91 9818174285",
  },
  {
    title: "Card 3",
    description:
      "4/37 Vibhav Khand Gomti Nagar, Lucknow, Uttar Pradesh, 226010",
    imgSrc:
      "https://odysseymt.com/wp-content/uploads/2023/07/Flag_of_India.svg.webp",
    subtitle: "India",
    mobno: "+91 9818174285",
  },
];
function ContactUs() {
  return (
    <>
      <div className="flex justify-center text-4xl font-bold py-5">
        <h1>Contanct Us</h1>
      </div>
      <div className="grid md:grid-cols-3 gap-6 px-20 py-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="p-4 rounded-lg shadow-lg bg-white flex flex-col  space-y-4"
          >
            <div className="flex  ">
              <div>
                <img
                  src={card.imgSrc}
                  alt={card.title}
                  className="w-32 h-20 object-cover "
                />
              </div>
              <div>
                <h3 className="text-2xl px-3 py-3">{card.subtitle}</h3>
              </div>
            </div>
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <p className="text-gray-600 text-xl">{card.description}</p>
            <a className="text-gray-600 text-xl">{card.mobno} </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default ContactUs;
