import React from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function CourseModal({ isOpen, onClose, course }) {
  const navigate = useNavigate();

  // const navigate = useNavigate();

  const handleEnroll = () => {
  const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

  // ✅ CHECK IF COURSE ALREADY EXISTS
  const exists = existingCart.find(
    (item) => item.title === course.title
  );

  if (!exists) {
    existingCart.push(course);
    localStorage.setItem("cart", JSON.stringify(existingCart));
    alert("Course added to cart ✅");
  } else {
    alert("Course already added in cart ⚠️");
  }
};
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

                {/* Enroll Button */}
        <div className="mt-6">
  <button
  onClick={() => {
    handleEnroll();
    navigate("/cart"); // optional redirect
  }}
  className="w-full bg-[#EBD6FB] text-black font-semibold py-3 rounded-lg hover:bg-[#d8b9f8] transition duration-300"
>
  Enroll Course Now
</button>
</div>



      </div>
    </div>
  );
}
