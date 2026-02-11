// src/pages/AboutUs.jsx
import React from "react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">
      
      {/* Hero Section */}
      <div className="max-w-5xl text-center mt-40 mb-12">
        <h1 className="text-3xl md:text-6xl font-extrabold mb-4 text-[#EBD6FB] drop-shadow-lg">
          About GlamAcademy
        </h1>
        <p className="text-md md:text-md text-gray-300 max-w-3xl mx-auto">
          At GlamAcademy, we are passionate about empowering students to master the art of beauty and makeup. Our expert instructors provide hands-on training and guidance to help you transform your skills and career.
        </p>
      </div>

      {/* Our Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mb-40">
        <div className="bg-gray-900/80 backdrop-blur-md p-8 rounded-xl shadow-xl border border-[#EBD6FB] transition hover:scale-105 transform">
          <h2 className="text-xl font-bold mb-4 text-[#EBD6FB]">Our Mission</h2>
          <p className="text-gray-300 text-md">
            To provide professional makeup training with creativity, innovation, and practical experience, helping students excel in their beauty careers.
          </p>
        </div>
        <div className="bg-gray-900/80 backdrop-blur-md p-8 rounded-xl shadow-xl border border-[#EBD6FB] transition hover:scale-105 transform">
          <h2 className="text-xl font-bold mb-4 text-[#EBD6FB]">Our Vision</h2>
          <p className="text-gray-300 text-md">
            To be the leading academy in beauty and makeup education, recognized for excellence, innovation, and student success.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-5xl w-full text-center mb-20">
        <h2 className="text-4xl font-bold mb-10 text-[#EBD6FB]">Meet Our Experts</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: "Aisha Khan", role: "Lead Makeup Artist" },
            { name: "Rohan Mehta", role: "Beauty Instructor" },
            { name: "Sana Patel", role: "Skincare Specialist" },
          ].map((member, idx) => (
            <div
              key={idx}
              className="bg-gray-900/80 backdrop-blur-md p-6 rounded-xl shadow-xl border border-[#EBD6FB] hover:scale-105 transform transition"
            >
              <div className="w-32 h-32 mx-auto rounded-full bg-[#EBD6FB] mb-4 flex items-center justify-center text-2xl font-bold text-black">
                {member.name.split(" ").map(n => n[0]).join("")}
              </div>
              <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
              <p className="text-gray-300">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
