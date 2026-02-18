import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function CourseForm() {
  const location = useLocation();
const navigate = useNavigate();
const course = location.state?.course;

if (!course) {
  return (
    <div className="text-center mt-20 text-white">
      <h2>No course selected</h2>
    </div>
  );
}


  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Enrollment submitted for ${course.title}`);
  };

  return (
    <div className="bg-black min-h-screen flex justify-center items-center px-4 py-20">

      <div className="bg-[#111] rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-5 md:p-6 relative shadow-lg">

        {/* Close Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 text-gray-300 hover:text-white text-xl font-bold"
        >
          ✕
        </button>

        <div className="grid md:grid-cols-2 gap-8 mt-6">

          {/* LEFT SIDE — ENROLL FORM */}
          <div>
            <h2 className="text-2xl font-bold text-[#EBD6FB] mb-4">
              Enroll in {course.title}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-[#EBD6FB]"
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-[#EBD6FB]"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-[#EBD6FB]"
              />

              <textarea
                placeholder="Any Message (Optional)"
                rows="3"
                className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-[#EBD6FB]"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#EBD6FB] text-black font-semibold py-3 rounded-lg hover:bg-[#d8b9f8] transition duration-300"
              >
                Confirm Enrollment
              </button>
            </form>
          </div>

          {/* RIGHT SIDE — COURSE DETAILS */}
          <div>
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 md:h-56 object-cover rounded-lg mb-4"
            />

            <h3 className="text-xl font-bold text-[#EBD6FB] mb-2">
              {course.title}
            </h3>

            <div className="text-sm text-[#eee2f7] space-y-1 mb-3">
              <p>Duration: {course.duration}</p>
              <p>Level: {course.level}</p>
              <p>Price: {course.price}</p>
            </div>

            <p className="text-gray-300 text-sm mb-4">
              {course.description}
            </p>

            {course.learn && (
              <div>
                <h4 className="text-lg font-semibold text-[#EBD6FB] mb-2">
                  What You'll Learn
                </h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                  {course.learn.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
