// src/pages/BridalMakeupCourse.jsx
import React from "react";
import { Link } from "react-router-dom";
import bridal1 from "../assets/bridal1.jpg"; // Replace with your uploaded images
import bridal2 from "../assets/bridal2.jpg";
import bridal3 from "../assets/bridal3.jpg";
import bridal4 from "../assets/bridal4.jpg";

export default function BridalMakeupCourse() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">

      {/* Hero Section */}
      <div className="max-w-5xl text-center mt-40 mb-20">
        <h1 className="text-4xl md:text-4xl font-extrabold mb-4 text-[#EBD6FB] drop-shadow-lg">
          Bridal Makeup Course
        </h1>
        <p className="text-md md:text-md text-gray-300 max-w-3xl mx-auto">
          Launch your career as a professional Bridal Makeup Artist. Gain hands-on experience, build a portfolio, and learn workflows trusted by industry experts.
        </p>
      </div>

      {/* Professional Kit & Brush Set */}
      <div className="max-w-7xl mb-20 grid md:grid-cols-2 gap-20">
        <div className="flex flex-col items-center">
          {/* <img src={bridal1} alt="Professional Makeup Kit" className="rounded-xl shadow-lg w-80 mb-4"/> */}
          <h2 className="text-2xl font-bold mb-2 text-[#EBD6FB]">Professional Makeup Kit</h2>
          <p className="text-gray-300 text-center">
            All essential products included for practice and real client sessions.
          </p>
        </div>
        <div className="flex flex-col items-center">
          {/* <img src={bridal2} alt="Professional Brush Set" className="rounded-xl shadow-lg w-80 mb-4"/> */}
          <h2 className="text-2xl font-bold mb-2 text-[#EBD6FB]">Professional Brush Set</h2>
          <p className="text-gray-300 text-center">
            Complete your kit with a 24-piece brush set for flawless application.
          </p>
        </div>
      </div>

      {/* Course Curriculum */}
      <div className="max-w-6xl mb-16 bg-gray-900/80 backdrop-blur-md p-6 rounded-xl border border-[#EBD6FB] shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-[#EBD6FB] text-center">Course Curriculum</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-3 text-md">
          <li>Launch Your Bridal Makeup Career as a Bridal Makeup Artist</li>
          <li>What You’ll Learn in the Bridal Makeup Course</li>
          <li>Hands-On Training with Real Feedback</li>
          <li>Bridal Toolkit Guidance</li>
          <li>Wedding-Day Workflow You Can Trust</li>
          <li>Building a Strong Bridal Portfolio</li>
        </ul>
      </div>

      {/* Images Gallery */}
      <div className="max-w-6xl mb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <img src={bridal1} alt="Bridal Look 1" className="rounded-xl shadow-lg"/>
        <img src={bridal2} alt="Bridal Look 2" className="rounded-xl shadow-lg"/>
        <img src={bridal3} alt="Bridal Look 3" className="rounded-xl shadow-lg"/>
        <img src={bridal4} alt="Bridal Look 4" className="rounded-xl shadow-lg"/>
      </div>

      {/* Outcomes, Certificate & Career Support */}
      <div className="max-w-6xl mb-20 bg-gray-900/80 backdrop-blur-md p-6 rounded-xl border border-[#EBD6FB] shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-[#EBD6FB] text-center">Outcomes & Career Support</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-3 text-md">
          <li>Build a professional bridal portfolio</li>
          <li>Receive an accredited certificate recognized in the beauty industry</li>
          <li>Access career guidance and placement support</li>
          <li>Gain real-world experience and confidence for your bridal makeup career</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="mb-20 text-center">
        <Link
          to="/free-demo"
          className="bg-[#EBD6FB] text-black font-semibold px-8 py-4 rounded-full hover:bg-[#e0c3f7] hover:scale-105 transition transform"
        >
          Register for a Free Demo Class
        </Link>
      </div>
    </div>
  );
}
