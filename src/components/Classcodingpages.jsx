import React from "react";
import { Link } from "react-router-dom";

const Classcodingpages = () => {
  const courses = [
    {
      id: 1,
      heading: "Google Project Management",
      link: "https://www.coursya.com/product/google-project-management-2/?utm_source=LinkedIn+&utm_campaign=sr",
      img: "https://img.freepik.com/free-vector/sea-optimization-infographic-concept_1284-37796.jpg?uid=R175915010&ga=GA1.1.1302421477.1730100475&semt=ais_hybrid",
    },
    {
      id: 2,
      heading: "IBM Project Manager",
      link: "https://www.coursya.com/product/ibm-project-manager/?utm_source=LinkedIn+&utm_campaign=sr",
      img: "https://tse1.mm.bing.net/th?id=OIP.bXp0iFRjVIs7Dve6l8uqRQHaHa&pid=Api&P=0&h=180",
    },
    {
      id: 3,
      heading: "AI Product Management Specialization",
      link: "https://www.coursya.com/product/ai-product-management-specialization/?utm_source=LinkedIn+&utm_campaign=sr",
      img: "https://img.freepik.com/free-photo/3d-rendering-biorobots-concept_23-2149524401.jpg?uid=R175915010&ga=GA1.1.1302421477.1730100475&semt=ais_hybrid",
    },
    {
      id: 4,
      heading: "Google Cybersecurity Professional Certificate",
      link: "https://imp.i384100.net/B0R11q",
      img: "https://tse4.mm.bing.net/th?id=OIP._VscKvUjc_oysnXrDwLYzQHaHa&pid=Api&P=0&h=180",
    },
    {
      id: 5,
      heading: "Microsoft Cybersecurity Professional Certificate",
      link: "https://imp.i384100.net/5gQVL1",
      img: "https://tse4.mm.bing.net/th?id=OIP.jT10meTNnPZ3ABf3KEXXfwHaHa&pid=Api&P=0&h=180",
    },
    {
      id: 6,
      heading: "TryHackMe: Intro to Cyber Security",
      link: "https://tryhackme.com/path/outline/introtocyber",
      img: "https://tse2.mm.bing.net/th?id=OIP.1xQIcXZHHUFPXCi2sCkjfAHaEJ&pid=Api&P=0&h=180",
    },
    {
      id: 7,
      heading: "Meta UI/UX Design",
      link: "https://www.coursera.org/learn/principles-of-ux-ui-design?irclickid=UiHQrKW8XxyKTNBzH1yZnU6OUkCVHt29d30Qxw0&irgwc=1&utm_medium=partners&utm_source=impact&utm_campaign=5092896&utm_content=b2c",
      img: "https://tse2.mm.bing.net/th?id=OIP.S2aJUN1opzxXr-tWYQWQ-AHaDy&pid=Api&P=0&h=180",
    },
    {
      id: 8,
      heading: "Google UX Design Professional Certificate",
      link: "https://www.coursera.org/professional-certificates/google-ux-design",
      img: "https://tse1.mm.bing.net/th?id=OIP.xepyPINqzTrzz3L3W-P_ZwHaHa&pid=Api&P=0&h=180",
    },
    {
      id: 9,
      heading: "MIT Data Science and Machine Learning Program",
      link: "https://idss-gl.mit.edu/mit-idss-data-science-machine-learning-program",
      img: "https://tse2.mm.bing.net/th?id=OIP.Ndb0oTwLWyhbsp24zJvLtQHaJl&pid=Api&P=0&h=180",
    },
    {
      id: 10,
      heading: "IIIT Bangalore Data Science Course",
      link: "https://cpe.iiitb.ac.in/courses/epgp-data-science",
      img: "https://tse3.mm.bing.net/th?id=OIP.sanEsTm7BO8fsPtGUUcHVQHaFj&pid=Api&P=0&h=180",
    },
    {
      id: 11,
      heading: "Free Financial Modeling 101 Course",
      link: "https://www.financialmodelingeducation.com/",
      img: "https://tse2.mm.bing.net/th?id=OIP.7nWhSX7s0qh9fv2CCxKL7QHaEK&pid=Api&P=0&h=180",
    },
    {
      id: 12,
      heading: "AWS Cloud Certifications (Cybersecurity)",
      link: "https://explore.skillbuilder.aws/learn/signin",
      img: "https://tse4.mm.bing.net/th?id=OIP.ZMMENEhU86Qa2JV3xSeVBwHaHa&pid=Api&P=0&h=180",
    },
    {
      id: 13,
      heading: "Innovative Teaching with ChatGPT",
      link: "https://www.coursera.org/learn/chatgpt-innovative-teaching?irclickid=UiHQrKW8XxyKTNBzH1yZnU6OUkCVHv1pd30Qxw0&irgwc=1&utm_medium=partners&utm_source=impact&utm_campaign=5815485&utm_content=b2c",
      img: "https://tse4.mm.bing.net/th?id=OIP.-yD6qjf5ihgWRaXsYkkMsAHaHa&pid=Api&P=0&h=180",
    },
    {
      id: 14,
      heading: "Design Thinking for Innovation",
      link: "https://www.coursera.org/learn/uva-darden-design-thinking-innovation?irclickid=UiHQrKW8XxyKTNBzH1yZnU6OUkCVHvyRd30Qxw0&irgwc=1&utm_medium=partners&utm_source=impact&utm_campaign=5815485&utm_content=b2c",
      img: "https://tse3.mm.bing.net/th?id=OIP.XWmvjb-8kdgV53M-X7ljcgHaFK&pid=Api&P=0&h=180",
    },
    {
      id: 15,
      heading: "StationX Complete Cybersecurity Program",
      link: "https://paykstrt.com/32681/122343",
      img: "https://tse1.mm.bing.net/th?id=OIP.Ls2bHVT8z7ksQZVWgsvtlwHaD4&pid=Api&P=0&h=180",
    },
    {
      id: 16,
      heading: "Digital Forensics Essentials (DFE)",
      link: "https://codered.eccouncil.org/?logged=false",
      img: "https://tse2.mm.bing.net/th?id=OIP.pcQwzzPFnMzUEeWWRYsVHwHaEK&pid=Api&P=0&h=180",
    },
    {
      id: 17,
      heading: "Ethical Hacking Essentials (EHE)",
      link: "https://codered.eccouncil.org/?logged=false",
      img: "https://tse4.mm.bing.net/th?id=OIP.XyyrPUXgAZSV9In50Y83LwHaFL&pid=Api&P=0&h=180",
    },
    {
      id: 18,
      heading: "Cyber Security Expert by Simplilearn",
      link: "https://www.simplilearn.com/cyber-security-expert-master-program-training-course",
      img: "https://tse4.mm.bing.net/th?id=OIP.K9m7UTY8oL5aP5FH8XaJ2QHaEK&pid=Api&P=0&h=180",
    },
    {
      id: 19,
      heading: "HarvardX: CS50’s Introduction to Cybersecurity",
      link: "https://edx.sjv.io/GmBvq9",
      img: "https://tse1.mm.bing.net/th?id=OIP.F2Gf7ZelkT_n94JnJbJNbQHaDt&pid=Api&P=0&h=180",
    },
    {
      id: 20,
      heading: "Google Cloud Training",
      link: "https://cloud.google.com/learn/training",
      img: "https://tse4.mm.bing.net/th?id=OIP.6NdmMJ0i5OVV7bO8rF3KMwHaHa&pid=Api&P=0&h=180",
    },
    {
      id: 21,
      heading: "Finance 101 Course: Budgeting",
      link: "https://www.bpidk.org/finance-consulting-services",
      img: "https://tse4.mm.bing.net/th?id=OIP.cXK0y76m9vIjiIIH3Q9BygHaE8&pid=Api&P=0&h=180",
    },
    {
      id: 22,
      heading: "Finance 101 Course: Budget vs. Actual",
      link: "https://bit.ly/3A2Ufcm",
      img: "https://tse2.mm.bing.net/th?id=OIP.xGDBX4nNg1OWWWWER_NvSgHaDt&pid=Api&P=0&h=180",
    },
    {
      id: 23,
      heading: "Finance 101 Course: Budget Version",
      link: "https://bit.ly/3L3aRHe",
      img: "https://tse3.mm.bing.net/th?id=OIP.eHrqMlNA1Zuv-laxG-KpZQHaHa&pid=Api&P=0&h=180",
    },
    {
      id: 24,
      heading: "Finance 101 Course: Measuring Budget Performance",
      link: "https://bit.ly/40hBzA5",
      img: "https://tse1.mm.bing.net/th?id=OIP.wb-Ffx_H5zcALrdDBXtw-gHaFD&pid=Api&P=0&h=180",
    },
    {
      id: 25,
      heading:
        "Finance 101 Course: 10 Commandments for Planning and Forecasting",
      link: "https://bit.ly/3GdfStZ",
      img: "https://tse1.mm.bing.net/th?id=OIP.ct7sc8K8miLLMSsChIOcCgHaE8&pid=Api&P=0&h=180",
    },
    {
      id: 26,
      heading: "Financial Analysis and Modelling",
      link: "https://bit.ly/3o0j2p2",
      img: "https://tse4.mm.bing.net/th?id=OIP.NjmzSvWx5RwRezVgbKitdAHaEK&pid=Api&P=0&h=180",
    },
    {
      id: 27,
      heading: "Introduction to Data Science with Python",
      link: "https://bit.ly/3pqyLgI",
      img: "https://tse4.mm.bing.net/th?id=OIP.JF5LAyPzzwgiCe_AjKH7IgHaD4&pid=Api&P=0&h=180",
    },
    {
      id: 28,
      heading: "Data Science Fundamentals",
      link: "https://bit.ly/3FE9oeD",
      img: "https://tse3.mm.bing.net/th?id=OIP.3kAr-HpNwAAOafxdvjJdjAAAAA&pid=Api&P=0&h=180",
    },
    {
      id: 29,
      heading: "Data Science and Machine Learning Bootcamp",
      link: "https://bit.ly/3DPyDkg",
      img: "https://tse2.mm.bing.net/th?id=OIP.HjYHw0tEOZLEyx-ksIZgpwHaFj&pid=Api&P=0&h=180",
    },
    {
      id: 30,
      heading: "Deep Learning Specialization",
      link: "https://bit.ly/3JDqDw1",
      img: "https://tse1.mm.bing.net/th?id=OIP.03f3BOXy2cEkDIQSUWEw_gHaHa&pid=Api&P=0&h=180",
    },
    {
      id: 31,
      heading: "Full Stack Web Development with React",
      link: "https://bit.ly/3G4XwLs",
      img: "https://tse4.mm.bing.net/th?id=OIP.jMvVvFF_GQhrOY3wRzbS0AHaEK&pid=Api&P=0&h=180",
    },
    {
      id: 32,
      heading: "Intro to Machine Learning with TensorFlow",
      link: "https://bit.ly/3LyySxs",
      img: "https://tse3.mm.bing.net/th?id=OIP.JHeBiK-zx13tt45Xotl6LwHaEY&pid=Api&P=0&h=180",
    },
    {
      id: 33,
      heading: "Deep Learning with Python",
      link: "https://bit.ly/3EHR2fi",
      img: "https://tse1.mm.bing.net/th?id=OIP.ptjnTZWLMD6p22IKloDqqwAAAA&pid=Api&P=0&h=180",
    },
    {
      id: 34,
      heading: "Advanced Data Science",
      link: "https://bit.ly/3z6FxlS",
      img: "https://tse2.mm.bing.net/th?id=OIP.U19oy49OXC3nXq-FaKxrAQHaD3&pid=Api&P=0&h=180",
    },
    {
      id: 35,
      heading: "The Complete JavaScript Course",
      link: "https://bit.ly/3nUpX3I",
      img: "https://tse1.mm.bing.net/th?id=OIP.9Y7uuVK4R2yWMfgwE4SnYgHaEK&pid=Api&P=0&h=180",
    },
    {
      id: 36,
      heading: "Machine Learning by Stanford University",
      link: "https://bit.ly/3rYTe72",
      img: "https://tse1.mm.bing.net/th?id=OIP.JMC_CwksIpj-rydwr3m3XAHaEK&pid=Api&P=0&h=180",
    },
    {
      id: 37,
      heading: "Data Science with R",
      link: "https://bit.ly/3H4C0sb",
      img: "https://tse4.mm.bing.net/th?id=OIP._iP2080En005_m87xe6KqQHaHY&pid=Api&P=0&h=180",
    },
    {
      id: 38,
      heading: "Modern Python for Data Science",
      link: "https://bit.ly/3l9tDTy",
      img: "https://tse4.mm.bing.net/th?id=OIP.LxP1qwPjHE1CDFmLBh3bxQHaDu&pid=Api&P=0&h=180",
    },
    {
      id: 39,
      heading: "Practical Deep Learning for Coders",
      link: "https://bit.ly/3PY0yB9",
      img: "https://tse2.mm.bing.net/th?id=OIP.Q5-xzZKaO3LnPWis5yfntAAAAA&pid=Api&P=0&h=180",
    },
    {
      id: 40,
      heading: "Python for Data Analysis",
      link: "https://bit.ly/3HZhmom",
      img: "https://tse2.mm.bing.net/th?id=OIP.KSWFwCWD7SIiZhawL7KeeAHaHa&pid=Api&P=0&h=180",
    },
    {
      id: 41,
      heading: "AI in Finance",
      link: "https://bit.ly/3z38ST7",
      img: "https://tse1.mm.bing.net/th?id=OIP.TqeDMGoQkVCe_JZ-ywtDmgHaEO&pid=Api&P=0&h=180",
    },
    {
      id: 42,
      heading: "Blockchain and Cryptocurrency Explained",
      link: "https://bit.ly/3RGzEGQ",
      img: "https://tse3.mm.bing.net/th?id=OIP.uSqpsMFCKiflJiX35jktWgHaHa&pid=Api&P=0&h=180",
    },
    {
      id: 43,
      heading: "Introduction to Artificial Intelligence",
      link: "https://bit.ly/3FUQC8O",
      img: "https://tse4.mm.bing.net/th?id=OIP.V4gqDrD6jPblWjGhErqkYwHaHa&pid=Api&P=0&h=180",
    },
    {
      id: 44,
      heading: "Computer Vision Basics",
      link: "https://bit.ly/3i1hTqO",
      img: "https://tse3.mm.bing.net/th?id=OIP.KMCdG3ZNLlHEjJMj8RvUrgHaD4&pid=Api&P=0&h=180",
    },
    {
      id: 45,
      heading: "Introduction to Cloud Computing",
      link: "https://bit.ly/3A5uFV2",
      img: "https://tse4.mm.bing.net/th?id=OIP.eXEYoMfKBnVy6C01fCvlKAHaEO&pid=Api&P=0&h=180",
    },
    {
      id: 46,
      heading: "Introduction to Data Engineering",
      link: "https://bit.ly/3Vg7FFy",
      img: "https://tse4.mm.bing.net/th?id=OIP.A_V6mPU1wAjuuQgIGWEcGwHaEK&pid=Api&P=0&h=180",
    },
    {
      id: 47,
      heading: "Practical Data Engineering",
      link: "https://bit.ly/3t5KvH7",
      img: "https://tse3.mm.bing.net/th?id=OIP.8_5EVPiRy6M4YAwY_w9M1AHaE8&pid=Api&P=0&h=180",
    },
    {
      id: 48,
      heading: "Kubernetes for Developers",
      link: "https://bit.ly/3r7VYeq",
      img: "https://tse1.mm.bing.net/th?id=OIP.4Of95zjA5mzoUYa3DmFReAHaEN&pid=Api&P=0&h=180",
    },
    {
      id: 49,
      heading: "AWS Solutions Architect Course",
      link: "https://bit.ly/3GeUcmg",
      img: "https://tse2.mm.bing.net/th?id=OIP.Vjfr_sjE9jrsJiCTldlRMAAAAA&pid=Api&P=0&h=180",
    },
    {
      id: 50,
      heading: "Cloud Architecture Fundamentals",
      link: "https://bit.ly/3fFwKre",
      img: "https://tse4.mm.bing.net/th?id=OIP.zNbNljNbGq4Vj6VQGmXOQwHaFj&pid=Api&P=0&h=180",
    },
  ];

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url('/bg.svg')`,
        background: "cover",
        backgroundSize: "100%",
        // backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex justify-center items-center py-6 ps-4">
        <h1 className="text-4xl flex justify-center sm:text-5xl md:text-6xl font-bold text-gray-800">
          Class Coding Pages
        </h1>
      </div>

      <div className="flex flex-col gap-6 p-4 max-w-3xl w-full shadow-xl">
        {courses.map((course) => (
          <div
            key={course.id}
            className="flex flex-col sm:flex-row items-center sm:items-start border p-6 shadow-lg rounded-lg bg-white min-h-[250px] h-auto" // Added min-h-[250px]
          >
            {/* Image Section */}
            <img
              src={course.img}
              alt={course.heading}
              className="w-64 h-64 object-contain rounded-lg mb-4 sm:mb-0 sm:mr-6"
            />

            {/* Content Section */}
            <div className="flex self-center flex-col justify-between ">
              <h3 className="text-xl font-semibold my-2">{course.heading}</h3>
              <div className="flex justify-start">
                <Link
                  to={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-blue-500  border bg  font-medium p-4 rounded-xl hover:shadow "
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classcodingpages;
