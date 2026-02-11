import React, { useState } from "react";
import CourseModal from "./CourseModal";

// Example images
import elite from "../assets/elite.jpg";
import premier from "../assets/premier.jpg";
import bridal from "../assets/bridal.jpg";
import tvFilm from "../assets/tv&film.jpg";
import social from "../assets/social-media.jpg";
import mens from "../assets/mens-makeup.jpg";
import mehndi from "../assets/mehndi.jpg";
import nail from "../assets/nail.jpg";
import spa from "../assets/spa.jpg";

export default function ViewCourses() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const courses = [
    {
      title: "Elite Makeup Course",
      duration: "6 Months",
      level: "Advanced",
      image: elite,
      price: "₹8,500",
      description:
        "Master high-fashion, editorial, and special effects makeup with hands-on professional training.",
      learn: [
        "Advanced contouring & highlighting",
        "Special effects makeup",
        "Editorial & runway techniques",
        "Portfolio creation"
      ]
    },
    {
      title: "Premier Makeup Course",
      duration: "4 Months",
      level: "Professional",
      image: premier,
      price: "₹8,500",
      description:
        "Comprehensive training covering bridal, party, and runway makeup techniques.",
      learn: [
        "Bridal & party makeup",
        "Runway techniques",
        "Product knowledge",
        "Client consultation"
      ]
    },
    {
      title: "Bridal Makeup Course",
      duration: "2 Months",
      level: "Specialized",
      image: bridal,
      price: "₹8,500",
      description:
        "Become a certified bridal makeup expert with traditional and modern bridal looks.",
      learn: [
        "Traditional bridal makeup",
        "Modern bridal looks",
        "Skin preparation",
        "Portfolio building"
      ]
    },
    {
      title: "TV & Film Makeup Course",
      duration: "3 Months",
      level: "Professional",
      image: tvFilm,
      price: "₹8,500",
      description:
        "Learn makeup for camera, lighting, and character transformations in TV, movies, and theatre.",
      learn: [
        "Camera-friendly makeup",
        "Character transformations",
        "Lighting & shadow techniques",
        "Professional portfolio"
      ]
    },
    {
      title: "Social Media Makeup Artistry",
      duration: "1 Month",
      level: "Beginner-Intermediate",
      image: social,
      price: "₹8,500",
      description:
        "Create eye-catching looks for Instagram, TikTok, and YouTube with trending techniques.",
      learn: [
        "Trendy looks for social media",
        "Video & photo ready makeup",
        "Creative styling",
        "Branding & marketing tips"
      ]
    },
    {
      title: "Men’s Grooming & Makeup",
      duration: "2 Months",
      level: "Specialized",
      image: mens,
      price: "₹8,500",
      description:
        "Master male makeup, skincare, and grooming for photo shoots, weddings, and special events.",
      learn: [
        "Male skincare & grooming",
        "Makeup for photoshoots",
        "Event & bridal makeup for men",
        "Portfolio creation"
      ]
    },
    {
      title: "Mehndi Courses",
      duration: "2 Months",
      level: "Specialized",
      image: mehndi,
      price: "₹8,500",
      description:
        "Professional mehndi design training from basic to advanced bridal patterns.",
      learn: [
        "Arabic & Indian mehndi styles",
        "Bridal mehndi designs",
        "Speed techniques",
        "Client handling"
      ]
    },
    {
      title: "Nail Courses",
      duration: "2 Months",
      level: "Specialized",
      image: nail,
      price: "₹8,500",
      description:
        "Learn nail art, extensions, gel polish, and professional salon techniques.",
      learn: [
        "Nail extensions",
        "Gel & acrylic systems",
        "Creative nail art",
        "Salon hygiene"
      ]
    },
    {
      title: "Spa Courses",
      duration: "2 Months",
      level: "Specialized",
      image: spa,
      price: "₹8,500",
      description:
        "Professional spa therapy and skincare treatment training.",
      learn: [
        "Facial treatments",
        "Body spa therapy",
        "Skin analysis",
        "Client consultation"
      ]
    }
  ];

  const openModal = (course) => {
    setSelectedCourse(course);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCourse(null);
    setModalOpen(false);
  };

  return (
    <div className="bg-black text-white min-h-screen">

      {/* Course Cards */}
      <section className="max-w-5xl mx-auto px-4 md:px-10 py-16 md:py-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
        
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-[#111] rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition duration-500"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 sm:h-56 md:h-60 object-cover"
            />

            <div className="p-4 md:p-6 space-y-3 md:space-y-4">
              <h3 className="text-lg md:text-xl font-semibold text-[#EBD6FB]">
                {course.title}
              </h3>

              <div className="flex justify-between text-xs md:text-sm text-gray-400">
                <span>{course.duration}</span>
                <span>{course.level}</span>
              </div>

              <p className="text-gray-300 text-sm">
                {course.description.substring(0, 80)}...
              </p>

              <button
                onClick={() => openModal(course)}
                className="mt-3 md:mt-4 w-full bg-[#EBD6FB] text-black py-2 rounded-full font-semibold hover:bg-purple-300 transition"
              >
                View Details
              </button>
            </div>
          </div>
        ))}

      </section>

      {/* Course Modal */}
      {selectedCourse && (
        <CourseModal
          isOpen={modalOpen}
          onClose={closeModal}
          course={selectedCourse}
        />
      )}
    </div>
  );
}
