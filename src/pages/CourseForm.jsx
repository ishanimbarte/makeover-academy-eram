import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CourseForm() {
  const [profileImage, setProfileImage] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const coursesFromState = location.state?.courses;

  const handleImageUpload = (e) => {
  const file = e.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfileImage(reader.result);

      // Save to localStorage
      localStorage.setItem("profileImage", reader.result);
    };

    reader.readAsDataURL(file);
  }
};

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCourses(coursesFromState || cart);
  }, [coursesFromState]);

  const course = courses[0];

  if (!course) {
    return (
      <div className="text-center mt-20 text-white">
        <h2>No courses selected</h2>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Enrollment submitted for ${courses.map(c => c.title).join(', ')}`);
    localStorage.removeItem("cart"); // Clear cart after enrollment
    navigate("/"); // Redirect to home or success page
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
              Enroll in Selected Courses
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Profile Photo Upload */}
<div className="flex flex-col items-center mb-4">
  <label className="cursor-pointer">
    <div className="w-24 h-24 rounded-full bg-[#1a1a1a] border border-gray-600 flex items-center justify-center overflow-hidden">
      {profileImage ? (
        <img
          src={profileImage}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="text-gray-400 text-sm">Upload</span>
      )}
    </div>

    <input
      type="file"
      accept="image/*"
      onChange={handleImageUpload}
      className="hidden"
    />
  </label>

  <p className="text-gray-400 text-xs mt-2">
    Upload Profile Photo
  </p>
</div>

              {/* Basic Info */}
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

              {/* NEW FIELDS */}

              <input
                type="date"
                placeholder="Date of Birth"
                className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-[#EBD6FB]"
              />

              <select className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-[#EBD6FB]">
                <option value="">Select Gender</option>
                <option>Female</option>
                <option>Male</option>
                <option>Other</option>
              </select>

              <input
                type="text"
                placeholder="City"
                className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-[#EBD6FB]"
              />

              <input
                type="text"
                placeholder="State"
                className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-[#EBD6FB]"
              />

              <input
                type="text"
                placeholder="PIN Code"
                className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-[#EBD6FB]"
              />

              <select className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-[#EBD6FB]">
                <option value="">Batch Timing</option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
                <option>Weekend</option>
              </select>

              {/* <input
                type="date"
                placeholder="Preferred Start Date"
                className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-[#EBD6FB]"
              /> */}

              <select className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-[#EBD6FB]">
                <option value="">Prior Makeup Experience?</option>
                <option>Yes</option>
                <option>No</option>
              </select>

              <textarea
                placeholder="If Yes, describe your experience"
                rows="2"
                className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-[#EBD6FB]"
              ></textarea>

              <select className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-[#EBD6FB]">
                <option value="">Skill Level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Professional</option>
              </select>

              <textarea
                placeholder="Why do you want to join this course?"
                rows="3"
                className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-[#EBD6FB]"
              ></textarea>

              <select className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-[#EBD6FB]">
                <option value="">Career Goal After Course</option>
                <option>Freelance Artist</option>
                <option>Salon Job</option>
                <option>Start Own Business</option>
                <option>Personal Learning</option>
              </select>

              {/* Existing Message */}
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
            <h3 className="text-xl font-bold text-[#EBD6FB] mb-2">
              Selected Courses
            </h3>
            {courses.map((c, index) => (
              <div key={index} className="mb-4 border-b border-gray-700 pb-4">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-32 object-cover rounded-lg mb-2"
                />
                <h4 className="text-lg font-semibold text-[#EBD6FB]">{c.title}</h4>
                <div className="text-sm text-[#eee2f7] space-y-1">
                  <p>Duration: {c.duration}</p>
                  <p>Level: {c.level}</p>
                  <p>Price: {c.price}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}