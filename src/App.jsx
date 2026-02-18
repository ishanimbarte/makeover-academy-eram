// App.jsx

import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import AboutSection from "./components/AboutSection";
import CoursesSection from "./components/CoursesSection";
import CertifiedSection from "./components/CertifiedSection";
import Footer from "./components/Footer";

import ViewCourses from "./pages/ViewCourses";
import FreeDemo from "./pages/FreeDemo";
import AboutUs from "./pages/AboutUs";
import StudentSuccess from "./pages/StudentSuccess";
import ClassroomTraining from "./pages/ClassroomTraining";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import EliteMakeupCourse from "./pages/EliteMakeupCourse";
import MasterMakeupCourse from "./pages/MasterMakeupCourse";
import BridalMakeupCourse from "./pages/BridalMakeupCourse";
import CourseModal from "./pages/CourseModal";
import CourseForm from "./pages/CourseForm";


/* 🔥 Scroll To Top Component */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}


function App() {
  return (
    <>
      {/* 👇 This makes every route start from top */}
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Stats />
              <AboutSection />
              <CoursesSection />
              <CertifiedSection />
            </>
          }
        />

        <Route path="/courses" element={<ViewCourses />} />
        <Route path="/free-demo" element={<FreeDemo />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/success" element={<StudentSuccess />} />
        <Route path="/training" element={<ClassroomTraining />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/elite-course" element={<EliteMakeupCourse />} />
        <Route path="/master-course" element={<MasterMakeupCourse />} />
        <Route path="/bridal-course" element={<BridalMakeupCourse />} />
        <Route path="/course" element={<CourseModal />} />
        <Route path="/courseform" element={<CourseForm />} />
        
      </Routes>

      <Footer />
    </>
  );
}

export default App;
