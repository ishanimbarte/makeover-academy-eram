// src/pages/Careers.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Careers() {
  const opportunities = [
    {
      title: "Makeup Instructor",
      description: "Teach our students professional makeup techniques and guide them in practical sessions.",
    },
    {
      title: "Beauty Therapist",
      description: "Provide skincare, facial, and beauty therapy guidance for our classroom training programs.",
    },
    {
      title: "Salon Manager",
      description: "Manage salon operations and help coordinate students and trainers in practical sessions.",
    },
    {
      title: "Content & Social Media Manager",
      description: "Create content for marketing and social media platforms to promote our courses and events.",
    },
  ];

  const benefits = [
    "Work in a professional and creative environment",
    "Learn from industry experts and enhance your skills",
    "Flexible working hours and growth opportunities",
    "Access to our exclusive academy resources and events",
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">

      {/* Hero Section */}
      <div className="max-w-5xl text-center mt-40 mb-12">
        <h1 className="text-5xl md:text-5xl font-extrabold mb-4 text-[#EBD6FB] drop-shadow-lg">
          Careers at GlamAcademy
        </h1>
        <p className="text-lg md:text-md text-gray-300 max-w-3xl mx-auto">
          Join our team and become part of a vibrant, creative, and professional environment that empowers students and promotes excellence in the beauty industry.
        </p>
      </div>

      {/* Opportunities */}
      <div className="max-w-5xl w-full mb-20">
        <h2 className="text-4xl font-bold mb-8 text-[#EBD6FB] text-center">
          Current Opportunities
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {opportunities.map((job, idx) => (
            <div
              key={idx}
              className="bg-gray-900/80 backdrop-blur-md p-8 rounded-xl shadow-xl border border-black hover:scale-105 transform transition"
            >
              <h3 className="text-md font-bold mb-2 text-white">{job.title}</h3>
              <p className="text-gray-300 text-md">{job.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="max-w-5xl w-full mb-16 text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#EBD6FB]">Why Work With Us</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-3 text-lg">
          {benefits.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Call to Action */}
      <div className="mb-20 text-center">
        <p className="text-gray-300 mb-10 text-lg">
          Interested? Send your resume and portfolio to our email:
        </p>
        <a
          href="mailto:careers@glamacademy.com"
          className="bg-[#EBD6FB] text-black font-semibold px-8 py-4 rounded-full hover:bg-[#e0c3f7] hover:scale-105 transition transform"
        >
          <Link to="/contact">Apply Now</Link>
        </a>
      </div>

    </div>
  );
}
