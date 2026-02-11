import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import eliteImg from "../assets/elite.jpg";
import masterImg from "../assets/master.jpg";
import bridalImg from "../assets/bridal.jpg";

export default function CoursesSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // animation only once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const courses = [
    { img: eliteImg, title: "Elite Makeup Course", link: "/elite-course" }, // Add link here
    { img: masterImg, title: "Master Makeup Course", link: "/master-course" },
    { img: bridalImg, title: "Bridal Makeup Course", link: "/bridal-course" },
  ];

  return (
  <section ref={sectionRef} className="bg-black py-14 md:py-24">
    <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">

      {/* Gold Gradient Heading */}
      <h2
        className={`text-3xl sm:text-4xl md:text-6xl font-extrabold mb-8 md:mb-16 tracking-tight bg-gradient-to-r from-[#d4af37] via-[#f7e7a9] to-[#b8860b] bg-clip-text text-transparent ${
          visible ? "animate-fadeUp" : "opacity-0"
        }`}
      >
        TOP BEAUTY & MAKEUP COURSES
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
        {courses.map((course, index) => {
          const card = (
            <div
              className={`relative group rounded-3xl overflow-hidden shadow-xl transform transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl ${
                visible ? "animate-fadeUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-[320px] sm:h-[380px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/30"></div>

              <div className="absolute bottom-6 md:bottom-10 left-0 right-0 text-white text-xl sm:text-2xl md:text-4xl font-semibold drop-shadow-lg px-4">
                {course.title}
              </div>
            </div>
          );

          if (course.link) {
            return (
              <Link key={index} to={course.link}>
                {card}
              </Link>
            );
          }

          return <div key={index}>{card}</div>;
        })}
      </div>

      {/* Button */}
      <div
        className={`mt-10 md:mt-16 ${
          visible ? "animate-fadeUp" : "opacity-0"
        }`}
        style={{ animationDelay: "600ms" }}
      >
        <button className="bg-[#EBD6FB] hover:bg-[#e0c3f7] text-black px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg shadow-lg transition duration-300 hover:scale-110">
          ENROLL TODAY!
        </button>
      </div>

    </div>
  </section>
);
}
