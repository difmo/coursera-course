import React from "react";

const scheduleItems = [
  "Weekend Classes (Saturday and Sunday) 2.5 Hours lecture",
  "Timings: 11:00 am onwards, 10 minutes (tea break)",
];

const courseContentItems = [
  "ICD-10-CM manual (Diagnosis Coding)",
  "CPT-4 manual (Procedure Coding)",
  "CPC Certification exam preparation",
  "5 CPC pattern Mock exams (100 Questions each)",
  "HCPCS Level II and HIPAA",
  "Human Anatomy, Medical Terminology (prefix-suffix)",
  "Interview Preparation",
];

function ClassroomTrain() {
  return (
    <div className="max-w-7xl mx-auto px-4  mt-28">
      {/* Heading Section */}
      <section className="py-12 text-center">
        <h1 className="text-3xl font-semibold text-gray-800 sm:text-4xl md:text-7xl py-5">
          Classroom Training
        </h1>
        <h2 className="mt-4 text-2xl text-gray-600 sm:text-2xl md:text-5xl py-5">
          Join our Classroom Training for the Best Learning Experience
        </h2>
        <p className="mt-6 text-lg text-gray-600 sm:text-xl mx-auto">
          Personal interaction with our expert trainers will help you become
          more proficient in Medical Coding. During classroom training, students
          can take part in face-to-face discussions, ask doubts related to CPC
          exam questions and seek clarification on the subject with their
          mentors.
        </p>
        <div className="mt-8">
          <img
            className="w-full rounded-lg shadow-lg"
            src="https://odysseymt.com/wp-content/uploads/2023/08/hgf.png"
            alt="Classroom Image"
          />
        </div>
      </section>

      {/* Our Classroom Section */}
      <section className="py-12">
        <h2 className="text-2xl md:text-5xl py-5 font-semibold text-gray-800 text-center">
          Our Classroom:
        </h2>
        <p className="mt-4 text-lg text-gray-600 sm:text-xl  mx-auto">
          Classroom Training can help students to create a network with their
          fellow students and trainers in the healthcare industry, creating more
          opportunities in the future. We have smart classrooms well equipped
          with TV screens and Wi-Fi for better understanding of the topics like
          Human Anatomy and medical procedures, which are better learned with a
          visual presentation.
        </p>
      </section>

      {/* Schedule Section */}
      <section className="py-12 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 ">
          Our Classroom Training Schedule:
        </h2>
        <ul className="mt-4 text-lg text-gray-600 md:text-2xl ">
          {scheduleItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="mt-8 space-y-8 md:flex md:space-x-8 md:space-y-0">
          <div className="w-full md:w-1/3">
            <img
              className="w-full rounded-lg shadow-lg"
              src="https://odysseymt.com/wp-content/uploads/2023/08/IMG-9458-768x512.jpg"
              alt="Classroom 1"
            />
          </div>
        </div>
        <div className="w-full py-5 ">
          <img
            className="w-full rounded-lg shadow-lg"
            src="https://odysseymt.com/wp-content/uploads/2023/08/image_50441729-2048x1536.jpg"
            alt="Classroom 2"
          />
        </div>
      </section>

      {/* Course Content Section */}
      <section className="py-12">
        <h2 className="text-2xl md:text-5xl font-semibold text-gray-800  py-5">
          Course Content:
        </h2>
        <p className="mt-4 text-lg text-gray-600 sm:text-xl   mx-auto">
          The Medical Coding Training program at Odyssey Informatics includes
          the following coding manuals and contents:
        </p>
        <ul className="mt-6 list-inside text-lg text-gray-600 sm:text-xl">
          {courseContentItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default ClassroomTrain;
