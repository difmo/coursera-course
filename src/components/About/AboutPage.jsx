import React from "react";

const AboutPage = () => {
  // Data for the course features
  const courseFeatures = [
    {
      title: "Bite-sized lessons & on-demand content",
      description:
        "Learn at your own pace with easy-to-digest lessons, perfect for busy schedules ⌚",
    },
    {
      title: "Interactive learning experiences",
      description:
        "Stay engaged with dynamic content that makes learning both fun and effective.",
    },
    {
      title: "A vast library of courses",
      description:
        "Explore courses across various disciplines and discover new passions!",
    },
    {
      title: "Flexible learning options",
      description: "Fit learning into your life – on your terms, at your pace.",
    },
  ];

  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold mb-4">Unlock Your Potential</h1>
          <h2 className="text-3xl mb-8">
            Dive into Personalized Learning with ClassCourse!
          </h2>
        </div>

        <div className="max-w-4xl mx-auto text-lg space-y-6">
          <p>
            Tired of one-size-fits-all online courses? Yearn to learn on your
            terms and fuel your passions? Look no further than{" "}
            <span className="font-semibold">ClassCourse</span>, your gateway to
            a world of engaging, customized education!
          </p>
          <p>
            We're revolutionizing online learning with a platform that caters to{" "}
            <span className="font-semibold">YOU</span>. High school student
            aiming for academic excellence? Busy professional seeking in-demand
            career skills? ClassCourse has courses for every learner, every
            goal.
          </p>

          <div className="mt-8 bg-purple-700 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Did you know?</h3>
            <ul className="list-disc pl-6">
              <li>
                The global online learning market is expected to reach a
                whopping{" "}
                <span className="font-semibold">$370 billion by 2026</span>!
              </li>
              <li>
                Over{" "}
                <span className="font-semibold">
                  1.5 billion learners worldwide
                </span>{" "}
                are already taking advantage of online education!
              </li>
            </ul>
          </div>

          <p className="mt-8">
            At <span className="font-semibold">ClassCourse</span>, we're at the
            forefront of this exciting trend, offering you:
          </p>

          {/* Render course features dynamically using map */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {courseFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white text-black p-6 rounded-lg shadow-md"
              >
                <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-xl">Ready to unlock your potential?</p>
            <p className="mt-4 text-lg">
              Call us at <span className="font-semibold">7317001012</span> or
              email{" "}
              <span className="font-semibold">classcourse25@gmail.com</span> to
              learn more!
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold">Join the Future of Learning!</h3>
          <p className="text-lg mt-2">
            #ClassCourse #PersonalizedLearning #OnlineEducation
            #FutureofLearning
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
