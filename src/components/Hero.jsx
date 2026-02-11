import heroBg from "../assets/makeover-bg.jpg";
import heroMobile from "../assets/makeover-mb.jpg"; 
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* Desktop Background Image */}
      <img
        src={heroBg}
        alt="Makeup Academy"
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
      />

      {/* Mobile Background Image */}
      <img
        src={heroMobile}
        alt="Makeup Academy Mobile"
        className="block md:hidden absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content (Animation KEPT) */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 md:px-2 md:ml-20">
        
        <h1 className="animate-fadeUp text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight max-w-3xl">
          Become a Certified  
          <span className="text-[#EBD6FB]"> Makeup Artist</span>
        </h1>

        <p className="animate-fadeUp delay-200 mt-6 text-base sm:text-lg text-gray-300 max-w-2xl">
          Learn professional makeup through luxury classroom & online training
          guided by industry experts.
        </p>

        <div className="animate-fadeUp delay-400 mt-8 md:mt-10 flex flex-col sm:flex-row gap-4">
          <Link 
            to="/courses"
            className="text-center bg-[#EBD6FB] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#e0c3f7] transition"
          >
            View Courses
          </Link>

          <Link 
            to="/free-demo"
            className="text-center border border-[#EBD6FB] text-[#EBD6FB] px-8 py-3 rounded-full hover:bg-[#EBD6FB] hover:text-black transition"
          >
            Free Demo Class
          </Link>
        </div>

      </div>
    </section>
  );
}
