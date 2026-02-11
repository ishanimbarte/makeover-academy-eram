import React from "react";

export default function CourseModal({ isOpen, onClose, course }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 px-4">
      
      {/* Modal Box */}
      <div className="bg-[#111] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-5 md:p-6 relative shadow-lg">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white text-xl font-bold"
        >
          ✕
        </button>

        {/* Course Image */}
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg mb-6"
        />

        {/* Course Info */}
        <h2 className="text-xl md:text-2xl font-bold text-[#EBD6FB] mb-2">
          {course.title}
        </h2>

        <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-[#eee2f7] mb-4 gap-2">
          <span>Duration: {course.duration}</span>
          <span>Level: {course.level}</span>
          <span>Price: {course.price}</span>
        </div>

        <p className="text-gray-300 text-sm md:text-base mb-4">
          {course.description}
        </p>

        {/* What You'll Learn */}
        {course.learn && (
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-[#EBD6FB] mb-2">
              What You'll Learn
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm md:text-base">
              {course.learn.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
