import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Scroll background effect
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = [
    { name: "Makeup Courses", path: "/courses" },
    { name: "About Us", path: "/about" },
    { name: "Student Success", path: "/success" },
    { name: "Classroom Training", path: "/training" },
    { name: "Careers", path: "/careers" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black shadow-lg" : "bg-black/20 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide text-[#EBD6FB]"
        >
          EramAcademy
        </Link>

        {/* Desktop Menu (UNCHANGED) */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-300">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `hover:text-[#EBD6FB] transition ${
                  isActive ? "text-[#EBD6FB]" : "text-gray-300"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link to="/contact">
          <button className="hidden md:block bg-[#EBD6FB] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#e0c3f7] transition">
            Enroll Now
          </button>
        </Link>

        {/* Hamburger Button (Mobile Only) */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`w-6 h-0.5 bg-[#EBD6FB] transition-all ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-[#EBD6FB] transition-all ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-[#EBD6FB] transition-all ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2 space-y-4 text-gray-300">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block py-2 ${
                  isActive ? "text-[#EBD6FB]" : "text-gray-300"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Mobile CTA */}
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <button className="w-full mt-3 bg-[#EBD6FB] text-black px-6 py-2 rounded-full font-semibold">
              Enroll Now
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
