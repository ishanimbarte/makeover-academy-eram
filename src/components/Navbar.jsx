import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { User } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Get selected courses from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(data);
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
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide text-[#EBD6FB]"
        >
          Eram Academy
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-300">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `hover:text-[#EBD6FB] ${
                  isActive ? "text-[#EBD6FB]" : "text-gray-300"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">

          {/* Enroll Button */}
          <Link to="/contact">
            <button className="bg-[#EBD6FB] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#e0c3f7] transition">
              Contact Us
            </button>
          </Link>

          {/* Profile Icon */}
          <div className="relative">
            <div
              className="cursor-pointer relative"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <User className="text-[#EBD6FB]" size={26} />

              {/* Badge Count */}
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#EBD6FB] text-black text-xs px-1.5 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </div>

            {/* Dropdown */}
            {profileOpen && (
              <div className="absolute text-white right-0 mt-3 w-48 bg-black border border-gray-700 rounded-lg shadow-lg p-2">

                <button
                  onClick={() => navigate("/login")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-800 rounded"
                >
                  Login Info
                </button>

                <button
                  onClick={() => navigate("/cart")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-800 rounded"
                >
                  Selected Courses ({cartItems.length})
                </button>

                <button
                  onClick={() => {
                    localStorage.removeItem("user");
                    navigate("/");
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-800 rounded text-red-400"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-[#EBD6FB]"></span>
          <span className="w-6 h-0.5 bg-[#EBD6FB]"></span>
          <span className="w-6 h-0.5 bg-[#EBD6FB]"></span>
        </button>
      </div>
    </nav>
  );
}