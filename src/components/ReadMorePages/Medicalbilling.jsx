import React from "react";
import icd10Image from "../../assets/ImageSec/gallaryimg1.jpg"; // Include the file extension

const Medicalbilling = () => {
  return (
    <div className="min-h-screen py-10">
      {/* Header Section */}
      <div className="h-72 bg-[#008ECC] flex justify-center items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Medical Coding for CPC exam preparation (ICD-10 CM)
        </h1>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto mt-10 px-5">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            <span className="italic text-orange-600">*Odyssey.</span> We are the{" "}
            <span className="underline text-orange-600">experts.</span>
          </h2>
          <p className="mt-4 text-gray-700 text-base">
            At <span className="italic text-orange-600">*Odyssey</span>, we saw
            again and again how the seemingly simple act of creating can be a
            force for growth, change, and discovery in people’s lives. We want
            to inspire and multiply the kind of creative exploration that
            fosters expression, learning, and application.
          </p>
        </div>

        {/* ICD-10 Section */}
        <div className="mt-10 flex flex-col md:flex-row items-center gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src={icd10Image}
              alt="ICD-10"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2">
            <h3 className="text-4xl font-bold text-gray-900">ICD-10 CM</h3>
            <p className="mt-4 text-gray-700 text-base">
              The “CM” in ICD-10 codes stands for clinical modification. It’s a
              diagnostic coding system and like ICD-9-CM, the ICD-10-CM is based
              upon the International Classification of Diseases, which is
              published by the World Health Organization (WHO) and which uses
              unique alphanumeric codes to identify known diseases and other
              health problems.
            </p>
            <ul className="mt-6 space-y-2">
              <li className="text-gray-700">✔ Includes 180 hours of training sessions</li>
              <li className="text-gray-700">✔ Medical Terminology</li>
              <li className="text-gray-700">✔ Human Anatomy</li>
              <li className="text-gray-700">✔ ICD-10 CM</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medicalbilling;
