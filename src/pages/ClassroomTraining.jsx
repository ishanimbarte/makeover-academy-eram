// src/pages/ClassroomTraining.jsx
import React from "react";
import basicMakeup from "../assets/basicMakeup.jpg";
import bridalMakeup from "../assets/bridalMakeup.jpg";
import skincare from "../assets/skincare.jpg";
import hairstyling from "../assets/hairstyling.jpg";
import fashionMakeup from "../assets/fashionMakeup.jpg";

export default function ClassroomTraining() {
  const courses = [
    {
      name: "Basic Makeup Artistry",
      duration: "4 Weeks",
      price: "₹10,000",
      description:
        "Learn the fundamentals of makeup, including tools, techniques, and face shaping for everyday looks.",
      image: basicMakeup,
    },
    {
      name: "Advanced Bridal Makeup",
      duration: "6 Weeks",
      price: "₹18,000",
      description:
        "Master professional bridal makeup, including couture looks, HD makeup, and working with different skin tones.",
      image: bridalMakeup,
    },
    {
      name: "Skincare & Beauty Therapy",
      duration: "3 Weeks",
      price: "₹8,500",
      description:
        "Understand skincare, facial treatments, and beauty therapy techniques to enhance your services.",
      image: skincare,
    },
    {
      name: "Hairstyling & Updos",
      duration: "2 Weeks",
      price: "₹7,500",
      description:
        "Learn professional hairstyling, braiding, and updos for weddings, events, and photoshoots.",
      image: hairstyling,
    },
    {
      name: "Fashion & Editorial Makeup",
      duration: "5 Weeks",
      price: "₹15,000",
      description:
        "Train for photoshoots, runway shows, and editorial work with advanced creative techniques.",
      image: fashionMakeup,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">
      {/* Hero Section */}
      <div className="max-w-5xl text-center mt-20 mb-12">
        <h1 className="text-5xl md:text-5xl font-extrabold mb-4 text-[#EBD6FB] drop-shadow-lg">
          Classroom Training Courses
        </h1>
        <p className="text-lg md:text-md text-gray-300 max-w-3xl mx-auto">
          Explore our wide range of classroom training courses designed to enhance your skills and prepare you for a professional career in makeup and beauty.
        </p>
      </div>

      {/* Courses List */}
      <div className="max-w-6xl w-full flex flex-col gap-6 mb-20">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-center bg-gray-900/80 backdrop-blur-md rounded-xl shadow-xl border border-[#EBD6FB] overflow-hidden hover:scale-105 transform transition"
          >
            {/* Course Image */}
            <img
              src={course.image}
              alt={course.name}
              className="w-full md:w-40 h-40 object-cover md:rounded-l-xl pl-10"
            />

            {/* Course Info */}
            <div className="p-8 flex-1 flex flex-col gap-2">
              <h2 className="text-xl font-bold text-white">{course.name}</h2>
              <p className="text-gray-400">{course.duration}</p>
              <p className="text-gray-300">{course.description}</p>
              <p className="text-[#EBD6FB] font-semibold text-md">{course.price}</p>
            </div>
          </div>
        ))}
      </div>

{/* this */}
      {/* Call to Action */}
      <div className="mb-20">
        <a
          href="/free-demo"
          className="bg-[#EBD6FB] text-black font-semibold px-8 py-4 rounded-full hover:bg-[#e0c3f7] hover:scale-105 transition transform"
        >
          Register for a Free Demo Class
        </a>
      </div>
    </div>
  );
}
