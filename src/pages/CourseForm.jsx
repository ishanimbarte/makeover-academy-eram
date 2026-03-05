import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createOrUpdateProfile, uploadImage } from "../api/api";

export default function CourseForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const coursesFromState = location.state?.courses;

  const [courses, setCourses] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    gender: "",
    city: "",
    state: "",
    pinCode: "",
    courseName: "",
    batchTiming: "",
    priorExperience: "",
    experienceDescription: "",
    skillLevel: "",
    whyJoin: "",
    careerGoal: "",
    message: ""
  });

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCourses(coursesFromState || cart);
  }, [coursesFromState]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ✅ Upload image to backend
  const handleImageUpload = async () => {
  if (!selectedFile) {
    alert("Please select an image first");
    return;
  }

  try {
    setUploading(true);

    const formDataImage = new FormData();
    formDataImage.append("file", selectedFile);

    const res = await uploadImage(formDataImage);

    const imageUrl = res.data.imageUrl || res.data.url;

    setUploadedImageUrl(imageUrl);

    setFormData((prev) => ({
      ...prev,
      imageUrl: imageUrl
    }));

    alert("Image uploaded successfully!");
  } catch (error) {
    console.error(error);
    alert("Image upload failed");
  } finally {
    setUploading(false);
  }
};

  const course = courses[0];

  if (!course) {
    return (
      <div className="text-center mt-20 text-white">
        <h2>No courses selected</h2>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createOrUpdateProfile({
        ...formData,
        courseName: courses.map((c) => c.title).join(", ")
      });

      alert("Enrollment submitted successfully!");
      localStorage.removeItem("cart");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Failed to submit enrollment");
    }
  };

  return (
    <div className="bg-black min-h-screen flex justify-center items-center px-4 py-20">
      <div className="bg-[#111] rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-5 md:p-6 relative shadow-lg">

        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 text-gray-300 hover:text-white text-xl font-bold"
        >
          ✕
        </button>

        <div className="grid md:grid-cols-2 gap-8 mt-6">

          <div>
            <h2 className="text-2xl font-bold text-[#EBD6FB] mb-4">
              Enroll in Selected Courses
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Profile Photo Upload */}
              <div className="flex flex-col items-center mb-4">
                <div className="w-24 h-24 rounded-full bg-[#1a1a1a] border border-gray-600 flex items-center justify-center overflow-hidden">
                  {uploadedImageUrl ? (
                    <img
                      src={uploadedImageUrl}
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
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                  className="mt-3 text-sm text-white"
                />

                <button
                  type="button"
                  onClick={handleImageUpload}
                  disabled={!selectedFile || uploading}
                  className="mt-2 bg-[#EBD6FB] text-black px-4 py-2 rounded-lg text-sm"
                >
                  {uploading ? "Uploading..." : "Upload Image"}
                </button>
              </div>

              {/* Inputs (UNCHANGED STYLING) */}

              <input
                type="text"
                name="fullName"
                onChange={handleChange}
                required
                placeholder="Full Name"
                className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-[#EBD6FB]"
              />

              <input
                type="email"
                name="email"
                onChange={handleChange}
                required
                placeholder="Email Address"
                className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-[#EBD6FB]"
              />

              <input
                type="tel"
                name="phoneNumber"
                onChange={handleChange}
                required
                placeholder="Phone Number"
                className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-[#EBD6FB]"
              />

              <input
                type="date"
                name="dateOfBirth"
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-[#EBD6FB]"
              />

              <select
                name="gender"
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-[#EBD6FB]"
              >
                <option value="">Select Gender</option>
                <option>Female</option>
                <option>Male</option>
                <option>Other</option>
              </select>

              <input
                type="text"
                name="city"
                onChange={handleChange}
                placeholder="City"
                className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-[#EBD6FB]"
              />

              <input
                type="text"
                name="state"
                onChange={handleChange}
                placeholder="State"
                className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-[#EBD6FB]"
              />

              <input
                type="text"
                name="pinCode"
                onChange={handleChange}
                placeholder="PIN Code"
                className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-[#EBD6FB]"
              />

              <select
                name="batchTiming"
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-[#EBD6FB]"
              >
                <option value="">Batch Timing</option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
                <option>Weekend</option>
              </select>

              <select
                name="priorExperience"
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-[#EBD6FB]"
              >
                <option value="">Prior Makeup Experience?</option>
                <option>Yes</option>
                <option>No</option>
              </select>

              <textarea
                name="experienceDescription"
                onChange={handleChange}
                rows="2"
                placeholder="If Yes, describe your experience"
                className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-[#EBD6FB]"
              />

              <select
                name="skillLevel"
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-[#EBD6FB]"
              >
                <option value="">Skill Level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Professional</option>
              </select>

              <textarea
                name="whyJoin"
                onChange={handleChange}
                rows="3"
                placeholder="Why do you want to join this course?"
                className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-[#EBD6FB]"
              />

              <select
                name="careerGoal"
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-[#EBD6FB]"
              >
                <option value="">Career Goal After Course</option>
                <option>Freelance Artist</option>
                <option>Salon Job</option>
                <option>Start Own Business</option>
                <option>Personal Learning</option>
              </select>

              <textarea
                name="message"
                onChange={handleChange}
                rows="3"
                placeholder="Any Message (Optional)"
                className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-[#EBD6FB]"
              />

              <button
                type="submit"
                className="w-full bg-[#EBD6FB] text-black font-semibold py-3 rounded-lg hover:bg-[#d8b9f8] transition duration-300"
              >
                Confirm Enrollment
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}