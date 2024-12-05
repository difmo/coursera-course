import React from "react";

const DataScienceBlog = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062008.jpg?uid=R175915010&ga=GA1.1.1302421477.1730100475&semt=ais_hybrid"
          alt="Data Science"
          className="w-full h-72 sm:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white">
            The Future of Data Science
          </h1>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto p-6 sm:p-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
          Understanding Data Science in Today’s World
        </h2>
        <p className="text-gray-700 text-base sm:text-lg leading-7 mb-4">
          Data science is a multidisciplinary field that extracts insights and
          knowledge from structured and unstructured data. It employs
          scientific methods, processes, algorithms, and systems to analyze and
          interpret data, empowering businesses and individuals to make
          informed decisions.
        </p>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
          Why Is Data Science Important?
        </h3>
        <p className="text-gray-700 text-base sm:text-lg leading-7 mb-4">
          The importance of data science lies in its ability to turn raw data
          into actionable insights. From predicting customer behavior in
          e-commerce to identifying trends in global markets, data science is
          revolutionizing industries. It allows companies to make decisions
          backed by real-time data and enhances productivity and innovation.
        </p>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
          Tools and Techniques
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Python: The most popular programming language for data science.</li>
          <li>R: Ideal for statistical analysis and graphical representation.</li>
          <li>SQL: Essential for database management and querying.</li>
          <li>Machine Learning: Used to create predictive models from data.</li>
          <li>Data Visualization: Tools like Tableau and Matplotlib help in creating meaningful visuals.</li>
        </ul>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
          Applications of Data Science
        </h3>
        <p className="text-gray-700 text-base sm:text-lg leading-7 mb-4">
          Data science is applied in numerous domains:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Healthcare: Predicting diseases and personalizing treatments.</li>
          <li>Finance: Fraud detection and risk assessment.</li>
          <li>Retail: Enhancing customer experience and inventory management.</li>
          <li>Technology: Building AI and automation systems.</li>
        </ul>
        <p className="text-gray-700 text-base sm:text-lg leading-7 mb-6">
          With the advent of big data and AI, data science is at the forefront
          of technological advancement. Professionals equipped with data science
          skills are highly sought after across all industries.
        </p>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
          Conclusion
        </h3>
        <p className="text-gray-700 text-base sm:text-lg leading-7 mb-6">
          Data science is not just a field; it’s a revolution. Its significance
          in shaping the future is undeniable, and investing in data science
          knowledge is a step towards unlocking countless opportunities in the
          modern era.
        </p>
      </div>
    </div>
  );
};

export default DataScienceBlog;
