import React from "react";

const Classcodingpages = () => {
  // List of courses with added image section
  const courses = [
    {
      id: 1,
      heading: "Google Project Management",
      link: "https://www.coursya.com/product/google-project-management-2/?utm_source=LinkedIn+&utm_campaign=sr",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      heading: "IBM Project Manager",
      link: "https://www.coursya.com/product/ibm-project-manager/?utm_source=LinkedIn+&utm_campaign=sr",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      heading: "AI Product Management Specialization",
      link: "https://www.coursya.com/product/ai-product-management-specialization/?utm_source=LinkedIn+&utm_campaign=sr",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      heading: "Google Cybersecurity Professional Certificate",
      link: "https://imp.i384100.net/B0R11q",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      heading: "Microsoft Cybersecurity Professional Certificate",
      link: "https://imp.i384100.net/5gQVL1",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      heading: "TryHackMe: Intro to Cyber Security",
      link: "https://tryhackme.com/path/outline/introtocyber",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      heading: "Meta UI/UX Design",
      link: "https://lnkd.in/gjCp7x8E",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      heading: "Google UX Design Professional Certificate",
      link: "https://www.coursera.org/professional-certificates/google-ux-design",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 9,
      heading: "MIT Data Science and Machine Learning Program",
      link: "https://idss-gl.mit.edu/mit-idss-data-science-machine-learning-program",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 10,
      heading: "IIIT Bangalore Data Science Course",
      link: "https://cpe.iiitb.ac.in/courses/epgp-data-science",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 11,
      heading: "Free Financial Modeling 101 Course",
      link: "https://bit.ly/3A1bSt1",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 12,
      heading: "AWS Cloud Certifications (Cybersecurity)",
      link: "https://lnkd.in/gaDGWdkm",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 13,
      heading: "Innovative Teaching with ChatGPT",
      link: "https://lnkd.in/gbSf5Ebw",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 14,
      heading: "Design Thinking for Innovation",
      link: "https://lnkd.in/gMjjahbX",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 15,
      heading: "StationX Complete Cybersecurity Program",
      link: "https://paykstrt.com/32681/122343",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 16,
      heading: "Digital Forensics Essentials (DFE)",
      link: "https://lnkd.in/gPrkYcDH",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 17,
      heading: "Ethical Hacking Essentials (EHE)",
      link: "https://lnkd.in/gRBGCud7",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 18,
      heading: "Cyber Security Expert by Simplilearn",
      link: "https://www.simplilearn.com/cyber-security-expert-master-program-training-course",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 19,
      heading: "HarvardX: CS50’s Introduction to Cybersecurity",
      link: "https://edx.sjv.io/GmBvq9",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 20,
      heading: "Google Cloud Training",
      link: "https://lnkd.in/get8rnkh",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 21,
      heading: "Pros and Cons of Budgeting",
      link: "https://bit.ly/3KxBUZC",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 22,
      heading: "Financial Modeling Best Practices",
      link: "https://bit.ly/3L20x25",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 23,
      heading: "Creating an Impactful Management Report",
      link: "https://bit.ly/3nJtaIo",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 24,
      heading: "Sales Analysis",
      link: "https://bit.ly/3L3bQao",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 25,
      heading: "RedTeaming",
      link: "https://lnkd.in/et_T2DEa",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 26,
      heading: "Developing Secure Software",
      link: "https://lnkd.in/gQRwTzKU",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 27,
      heading: "Certified in Cybersecurity (CC)",
      link: "https://lnkd.in/gW3w8Jqu",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 28,
      heading: "Cybersecurity Essentials",
      link: "https://lnkd.in/gZe6bf-t",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 29,
      heading: "Financial Modeling with Excel365",
      link: "https://bit.ly/3mqtfR1",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 30,
      heading: "Software Security",
      link: "https://lnkd.in/gG4P5bkr",
      img: "https://via.placeholder.com/150",
    },
    // New added links
    {
      id: 31,
      heading: "HackTheBox Academy",
      link: "https://academy.hackthebox.com/",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 32,
      heading: "Cybrary Foundations Career Path",
      link: "https://www.cybrary.it/career-path/foundations",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 33,
      heading: "Risk Management by Open University",
      link: "https://www.open.edu/openlearn/money-business/risk-management?active-tab=description-tab",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 34,
      heading: "Certified Cloud Security Professional (CCSP)",
      link: "https://www.isc2.org/Certifications/CC",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 35,
      heading: "Best Network Security Courses by Digital Defynd",
      link: "https://digitaldefynd.com/best-network-security-courses/?redirccnasecurity/",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 36,
      heading: "EC-Council Code Red Cybersecurity",
      link: "https://codered.eccouncil.org/?logged=false",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 37,
      heading: "EC-Council Code Red Cybersecurity (Duplicate)",
      link: "https://codered.eccouncil.org/?logged=false",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 38,
      heading: "Introduction to Dark Web, Anonymity & Cryptocurrency",
      link: "https://codered.eccouncil.org/course/introduction-to-dark-web-anonymity-and-cryptocurrency?logged=false",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 39,
      heading: "Digital Forensics by Open University",
      link: "https://www.open.edu/openlearn/ocw/mod/oucontent/view.php?id=87190&section=3",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 40,
      heading: "Blockchain for Business",
      link: "https://www.open.edu/openlearn/ocw/mod/oucontent/view.php?id=82939&section=3",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 41,
      heading: "Data Analytics Course",
      link: "https://digitaldefynd.com/best-data-analytics-courses/?redirctutorial/",
      img: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {courses.map((course) => (
        <div key={course.id} className="border p-4 shadow-md rounded-lg">
          <img src={course.img} alt={course.heading} className="w-full h-40 object-cover mb-4" />
          <h3 className="text-xl font-semibold mb-2">{course.heading}</h3>
          <a
            href={course.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Enroll Now
          </a>
        </div>
      ))}
    </div>
  );
};

export default Classcodingpages;
