import React from "react";
import img1 from "../../assets/Courseimg/medicalcourseimg1.svg"; // Example image path
import img2 from "../../assets/Courseimg/medicalcourseimg2.svg"; // Example image path
import img3 from "../../assets/Courseimg/medicalcourseimg3.svg"; // Example image path

const Coursescard4 = () => {
  const courseModules = [
    {
      id: 1,
      title: "Medical Terminology",
      image: img1,
      points: [
        "Dynamics of Medical Vocabulary",
        "Human Anatomy and Physiology",
        "Medical Instruments and Equipment",
      ],
    },
    {
      id: 2,
      title: "Medical Records",
      image: img2,
      points: [
        "Electronic Medical Records",
        "Interpreting Medical Records & Dictation",
        "Outpatient Reports",
      ],
    },
    {
      id: 3,
      title: "Medical Coding",
      image: img3,
      points: [
        "ICD-10 Codes and Guidelines",
        "CPT Coding Book Guidelines",
        "Unlisted Procedures",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#008ECC] text-gray-800">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold h-56 flex justify-center items-center">Medical Scribe</h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-100 max-w-3xl">
          Medical Scribe is a healthcare professional and a personal assistant to a physician to document patients'
          details during visits.
        </p>
      </div>

      {/* Eligibility Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-5xl mb-10">
        <h2 className="text-2xl font-semibold text-center mb-4 text-[#008ECC]">
          Eligibility to join Medical Scribe Course
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Students of Pharma</li>
          <li>BDS, BPT</li>
          <li>BSC Biology, BSC Biomedical</li>
          <li>BSC Microbiology, BSC Nursing</li>
        </ul>
      </div>

      {/* Course Modules Section */}
      <div className="max-w-6xl">
        <h2 className="text-2xl font-semibold text-center mb-6 text-[#008ECC]">
          Medical Scribe Course Module
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseModules.map((module) => (
            <div key={module.id} className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src={module.image}
                alt={module.title}
                className="w-full h-32 object-cover rounded-md mb-4"
              />
              <h3 className="font-semibold text-lg text-[#008ECC]">{module.title}</h3>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                {module.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Scope Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mt-10">
        <h2 className="text-2xl font-semibold text-center mb-4 text-[#008ECC]">Scope</h2>
        <p className="text-gray-700 text-center">
          The average salary of a medical scribe is approximately ₹xx,xxx to ₹xx,xxx per month for a fresher. Many scribe
          professionals work remotely or take work from home in this field.
        </p>
      </div>
    </div>
  );
};

export default Coursescard4;
