import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { User } from "lucide-react";
import Cookies from "js-cookie";
import { getUserProfile } from "../api/api";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showUserCard, setShowUserCard] = useState(false);
  const [userData, setUserData] = useState(null);

  const navigate = useNavigate();

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close profile dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileOpen && !event.target.closest('.profile-dropdown')) {
        setProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [profileOpen]);

  // Check login status
  useEffect(() => {
    const token = Cookies.get("token");
    setIsLoggedIn(!!token);
  }, []);

  // Handle showing user card
  const handleShowUserCard = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserData(user);
      setShowUserCard(true);
      setProfileOpen(false);
    } else {
      alert("User data not found. Please log in again.");
    }
  };

  // Logout function
  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      Cookies.remove("token"); // remove login cookie
      localStorage.removeItem("cart"); // optional
      localStorage.removeItem("user"); // remove user data
      setIsLoggedIn(false);
      navigate("/login");
    }
  };

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

        {/* Desktop Menu */}
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
          
          {/* Contact Button */}
          <Link to="/contact">
            <button className="bg-[#EBD6FB] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#e0c3f7] transition">
              Contact Us
            </button>
          </Link>

          {/* Profile */}
          <div className="relative">
            <div
              className="cursor-pointer relative"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <User className="text-[#EBD6FB]" size={26} />

              {/* Cart Badge */}
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#EBD6FB] text-black text-xs px-1.5 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </div>

            {/* Dropdown */}
            {profileOpen && (
              <div className="absolute text-white right-0 mt-3 w-48 bg-black border border-gray-700 rounded-lg shadow-lg p-2 profile-dropdown">
                
                <button
                  onClick={isLoggedIn ? handleShowUserCard : () => {
                    navigate("/login");
                    setProfileOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-800 rounded"
                >
                  {isLoggedIn ? "Login Info" : "Login/Signup"}
                </button>

                <button
                  onClick={() => {
                    navigate("/cart");
                    setProfileOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-800 rounded"
                >
                  Selected Courses ({cartItems.length})
                </button>

                <button
                  onClick={() => {
                    handleLogout();
                    setProfileOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-800 rounded text-red-400"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-[#EBD6FB]"></span>
          <span className="w-6 h-0.5 bg-[#EBD6FB]"></span>
          <span className="w-6 h-0.5 bg-[#EBD6FB]"></span>
        </button>
      </div>

      {/* User Info Card Modal */}
      {showUserCard && userData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold text-center mb-4 text-black">Login Details</h2>
            <div className="space-y-2 text-black">
              <p><strong>Name:</strong> {userData.fullName || userData.name}</p>
              <p><strong>Email:</strong> {userData.email}</p>
              {/* Add more fields if available */}
            </div>
            <button
              onClick={() => setShowUserCard(false)}
              className="mt-4 w-full bg-[#EBD6FB] text-black py-2 rounded-full font-semibold hover:bg-[#e0c3f7]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}