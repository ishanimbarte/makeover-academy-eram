// src/pages/MasterMakeupCourse.jsx
import React from "react";
import { Link } from "react-router-dom";
import onlineClassImg from "../assets/onlineClass.jpg"; // Replace with actual image
import bridalImg from "../assets/bridalMaster.jpg";     // Replace with actual image
import advancedImg from "../assets/advancedTech.jpg";   // Replace with actual image
import kitImg from "../assets/optionalKit.jpg";         // Replace with actual image

export default function MasterMakeupCourse() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">

      {/* Hero Section */}
      <div className="max-w-5xl text-center mt-40 mb-12">
        <h1 className="text-5xl md:text-4xl font-extrabold mb-4 text-[#EBD6FB] drop-shadow-lg">
          Master Makeup Course
        </h1>
        <p className="text-lg md:text-md text-gray-300 max-w-3xl mx-auto">
          Elevate your makeup skills and become a professional artist with our Master Makeup Course. Learn advanced techniques, bridal artistry, and stay ahead in the beauty industry.
        </p>
      </div>

      {/* How the Online Class Works */}
      <div className="max-w-6xl mb-16 bg-gray-900/80 backdrop-blur-md p-6 rounded-xl border border-[#e0c3f7] shadow-lg flex flex-col md:flex-row items-center gap-6">
        <img src={onlineClassImg} alt="Online Class" className="w-full md:w-1/2 rounded-xl shadow-lg" />
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4 text-[#EBD6FB]">How the Online Class Works</h2>
          <p className="text-gray-300">
            Our online classes are designed to provide flexibility, interactive learning, and practical experience. Students can access live sessions, recorded tutorials, and join a supportive community of Master Makeup Artists.
          </p>
        </div>
      </div>

      {/* Master Makeup Artist Community */}
      <div className="max-w-6xl mb-16 bg-gray-900/80 backdrop-blur-md p-6 rounded-xl border border-[#e0c3f7] shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-[#EBD6FB]">Master Makeup Artist Community</h2>
        <p className="text-gray-300">
          Join a vibrant community of professional makeup artists, share techniques, get feedback, and stay connected with industry leaders and peers.
        </p>
      </div>

      {/* Advanced Techniques & Latest Trends */}
      <div className="max-w-6xl mb-16 bg-gray-900/80 backdrop-blur-md p-6 rounded-xl border border-[#e0c3f7] shadow-lg flex flex-col md:flex-row items-center gap-6">
        <img src={advancedImg} alt="Advanced Techniques" className="w-80 h-80  rounded-xl shadow-lg" />
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4 text-[#EBD6FB]">Advanced Techniques & Latest Trends</h2>
          <p className="text-gray-300">
            Learn the latest makeup trends, advanced techniques, and special effects to elevate your artistry. Stay ahead in the industry and specialize in multiple makeup disciplines.
          </p>
        </div>
      </div>

      {/* Bridal Makeup Specialist */}
      <div className="max-w-6xl mb-16 bg-gray-900/80 backdrop-blur-md p-6 rounded-xl border border-[#e0c3f7] shadow-lg flex flex-col md:flex-row items-center gap-6">
        <img src={bridalImg} alt="Bridal Makeup Specialist" className="w-80 h-80 rounded-xl shadow-lg" />
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4 text-[#EBD6FB]">Bridal Makeup Specialist</h2>
          <p className="text-gray-300">
            Master bridal makeup artistry and create flawless, professional bridal looks for clients. Learn couture techniques for weddings, events, and photoshoots.
          </p>
        </div>
      </div>

      {/* Makeup Artistry Specializations */}
      <div className="max-w-6xl mb-16 bg-gray-900/80 backdrop-blur-md p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-[#EBD6FB]">Makeup Artistry Specializations</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Beauty Makeup Foundations</li>
          <li>Optional Makeup Kit Upgrade</li>
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
