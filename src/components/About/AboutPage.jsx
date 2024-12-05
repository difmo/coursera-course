// src/AboutPage.js
import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gray-100 text-gray-900 p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600">
          Unlock Your Potential: Dive into Personalized Learning with
          ClassCourse!
        </h1>
      </header>

      <section className="max-w-4xl mx-auto text-lg space-y-6">
        <p>
          Tired of one-size-fits-all online courses? Yearn to learn on your
          terms and fuel your passions? Look no further than{" "}
          <strong className="font-semibold text-blue-600">ClassCourse</strong>,
          your gateway to a world of engaging, customized education!
        </p>

        <p>
          We're revolutionizing online learning with a platform that caters to
          YOU. Whether you're a high school student aiming for academic
          excellence or a busy professional seeking in-demand career skills,
          ClassCourse has courses for every learner, every goal.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600">Did you know?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            The global online learning market is expected to reach a whopping{" "}
            <strong className="text-blue-600">$370 billion by 2026!</strong>
          </li>
          <li>
            Over <strong className="text-blue-600">1.5 billion learners</strong>{" "}
            worldwide are already taking advantage of online education!
          </li>
        </ul>

        <p>
          At ClassCourse, we're at the forefront of this exciting trend,
          offering you:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Bite-sized lessons & on-demand content for busy schedules ⌚</li>
          <li>Interactive learning experiences to keep you engaged</li>
          <li>A vast library of courses across diverse disciplines</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;
