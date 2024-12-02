import React from "react";

const offerings = [
  {
    id: "1",
    title: "Medical Coding",
    image:
      "https://odysseymt.com/wp-content/uploads/2023/07/1-Medical-Coding-e1689761564720.jpg", // Replace with actual image path
    points: ["ICD-10 CM", "CPT-4", "HCPCS codes"],
  },
  {
    id: "2",
    title: "Australian Coding",
    image:
      "https://odysseymt.com/wp-content/uploads/2023/07/1-Medical-Coding-e1689761564720.jpg", // Replace with actual image path
    points: ["ICD-10 AM", "ACHI", "ACS"],
  },
  {
    id: "3",
    title: "Medical Billing",
    image:
      "https://odysseymt.com/wp-content/uploads/2023/07/Medical-Billing-Company-Names-e1689762580567.webp", // Replace with actual image path
    points: ["Charge Posting", "Payment Posting", "Account Receivable"],
  },
  {
    id: "4",
    title: "Medical Billing",
    image:
      "https://odysseymt.com/wp-content/uploads/2023/07/maxresdefault-1-1-e1689762204387.jpg", // Replace with actual image path
    points: ["Charge Posting", "Payment Posting", "Account Receivable"],
  },
];

const OurOfferings = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container  px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Offerings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={offering.image}
                alt={offering.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold py-5">{offering.title}</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {offering.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurOfferings;
