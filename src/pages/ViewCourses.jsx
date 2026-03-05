import React, { useEffect, useState } from "react";
import CourseModal from "./CourseModal";
import axios from "axios";

export default function ViewCourses() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await axios.get(
        "https://eram-makeoverbackend-production.up.railway.app/courses"
      );
      setCourses(res.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="bg-black text-white min-h-screen">

      {/* Course Cards */}
      <section className="max-w-5xl mx-auto px-4 md:px-10 py-16 md:py-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
        
        {loading ? (
          <p className="text-center col-span-3 text-gray-400">
            Loading courses...
          </p>
        ) : (
          courses.map((course) => (
            <div
              key={course.courseId}
              className="bg-[#111] rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition duration-500"
            >
              <img
                src={course.imageUrl}
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
                  {course.description?.substring(0, 80)}...
                </p>

                <button
                  onClick={() => openModal(course)}
                  className="mt-3 md:mt-4 w-full bg-[#EBD6FB] text-black py-2 rounded-full font-semibold hover:bg-purple-300 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))
        )}

      </section>

      {/* Course Modal */}
      <CourseModal
        isOpen={!!selectedCourse}
        onClose={() => setSelectedCourse(null)}
        course={selectedCourse}
      />
    </div>
  );
}