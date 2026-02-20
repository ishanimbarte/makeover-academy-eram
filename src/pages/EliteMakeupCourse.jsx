// src/pages/EliteMakeupCourse.jsx
import React from "react";
import { Link } from "react-router-dom";
import kitImage from "../assets/makeupKit.jpg"; // Replace with actual image
import brushSet from "../assets/brushSet.jpg";   // Replace with actual image
import airbrushImage from "../assets/airbrush.jpg"; // Replace with actual image
import fxImage from "../assets/fxMakeup.jpg"; // Replace with actual image

export default function EliteMakeupCourse() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">

      {/* Hero Section */}
      <div className="max-w-5xl text-center mt-40 mb-12">
        <h1 className="text-5xl md:text-4xl font-extrabold mb-4 text-[#EBD6FB] drop-shadow-lg">
          Elite Makeup Course
        </h1>
        <p className="text-md md:text-md text-gray-300 max-w-3xl mx-auto">
          Take your love for makeup to the next level with our Elite Makeup Course. Learn professional techniques, get a full kit, and gain certification for your career.
        </p>
      </div>

      {/* Course Kit Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mb-16">
        <img src={kitImage} alt="Professional Makeup Kit" className="w-80 h-80 rounded-xl shadow-lg"/>
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4 text-[#EBD6FB]">Professional Makeup Kit</h2>
          <p className="text-gray-300 mb-4">
            Each student receives a **Professional Makeup Kit** including all essential products for practice and client work.
          </p>
          <img src={brushSet} alt="Professional 24pc Brush Set" className="w-48 rounded-lg shadow-md"/>
          <p className="text-gray-300 mt-2">
            Complete your kit with a **Professional 24-piece Brush Set** for flawless application.
          </p>
        </div>
      </div>

      {/* What You Will Learn */}
      <div className="max-w-6xl mb-16">
        <h2 className="text-4xl font-bold mb-6 text-[#EBD6FB] text-center">What You Will Learn</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-3 text-lg">
          <li>Core Makeup Artistry</li>
          <li>Professional Pro Makeup Lab</li>
          <li>Makeup Kit Included</li>
          <li>Airbrush Makeup Techniques for Professional Makeup Artist <br/><img src={airbrushImage} alt="Airbrush Makeup" className="w-64 rounded-lg mt-2"/></li>
          <li>Special Effects Makeup <br/><img src={fxImage} alt="FX Makeup" className="w-64 rounded-lg mt-2"/></li>
        </ul>
      </div>

      {/* Online Class vs Makeup Schools */}
      <div className="max-w-5xl mb-16 bg-gray-900/80 backdrop-blur-md p-6 rounded-xl border border-[#e0c3f7] shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-[#EBD6FB]">How the Online Class Works vs Makeup Schools</h2>
        <p className="text-gray-300 mb-2">
          Our online Elite Makeup Course is designed to give you **flexibility, hands-on learning, and career support** without the limitations of traditional makeup schools.
        </p>
        <p className="text-gray-300">
          You get access to recorded tutorials, live sessions, interactive Q&A, and direct feedback from professional makeup artists. Unlike traditional schools, you can **learn at your own pace** and still gain practical experience.
        </p>
      </div>

      {/* Certification and Career Support */}
      <div className="max-w-5xl mb-16 bg-gray-900/80 backdrop-blur-md p-6 rounded-xl border border-[#e0c3f7] shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-[#EBD6FB]">Certification & Career Support</h2>
        <p className="text-gray-300 mb-2">
          Upon completion, students receive a **Professional Certification** recognized in the beauty industry.
        </p>
        <p className="text-gray-300">
          We also provide career guidance, portfolio building support, and assistance with placements, so you are ready to start your journey as a professional makeup artist.
        </p>
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
