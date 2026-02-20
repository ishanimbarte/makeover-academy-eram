// src/pages/StudentSuccess.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function StudentSuccess() {
  const achievements = [
    { title: "500+ Graduates", description: "Our students have successfully completed professional makeup courses and launched their careers." },
    { title: "300+ Certified Artists", description: "Many of our graduates are now certified makeup artists working in salons, media, and fashion." },
    { title: "Industry Placements", description: "We help students connect with salons, studios, and brands for real job opportunities." },
  ];

  const testimonials = [
    { name: "Ayesha R.", feedback: "GlamAcademy transformed my skills! The hands-on training and support from instructors were amazing." },
    { name: "Rohit S.", feedback: "Thanks to GlamAcademy, I now work as a professional makeup artist in high-profile fashion events." },
    { name: "Sana K.", feedback: "The courses were detailed, practical, and fun. I learned more here than anywhere else!" },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">

      {/* Hero Section */}
      <div className="max-w-5xl text-center mt-40 mb-12">
        <h1 className="text-5xl md:text-5xl font-extrabold mb-4 text-[#EBD6FB] drop-shadow-lg">
          Student Success Stories
        </h1>
        <p className="text-md md:text-md text-gray-300 max-w-3xl mx-auto">
          At GlamAcademy, we take pride in our students' achievements. Our training programs are designed to equip you with the skills, confidence, and industry connections to succeed in the beauty and makeup world.
        </p>
      </div>

      {/* Achievements */}
      <div className="max-w-6xl w-full grid md:grid-cols-3 gap-8 mb-40">
        {achievements.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-900/80 backdrop-blur-md p-6 rounded-xl shadow-xl border border-black hover:scale-105 transform transition"
          >
            <h3 className="text-xl font-bold mb-2 text-[#EBD6FB]">{item.title}</h3>
            <p className="text-gray-300 text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl w-full text-center mb-40">
        <h2 className="text-4xl font-bold mb-10 text-[#EBD6FB]">What Our Students Say</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-gray-900/80 backdrop-blur-md p-6 rounded-xl shadow-xl border border-[#EBD6FB] hover:scale-105 transform transition"
            >
              <p className="text-gray-300 mb-4">"{t.feedback}"</p>
              <h4 className="text-white font-semibold">{t.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Informative Section */}
      <div className="max-w-5xl text-center mb-20">
        <h2 className="text-4xl font-bold mb-4 text-[#EBD6FB]">Why Our Students Excel</h2>
        <p className="text-gray-300 mb-4">
          Our curriculum is designed to combine theory, practical exercises, and real-world exposure. Students learn from expert instructors who provide personal guidance and mentorship throughout the course.
        </p>
        <p className="text-gray-300 mb-4">
          We focus on hands-on learning with real products, professional equipment, and live model training. Every student gets the chance to build a strong portfolio that opens doors in the beauty industry.
        </p>
        <p className="text-gray-300">
          From makeup artistry to skincare and professional styling, our programs ensure that graduates are confident, creative, and fully prepared to succeed in their careers.
        </p>
      </div>

      {/* Call to Action */}
      <div className="mb-20">
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
