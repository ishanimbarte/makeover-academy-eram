import { FaTiktok, FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Column 1 */}
        <div>
          <h3 className="text-[#e0c3f7] font-semibold mb-4">CUSTOMER SUPPORT</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#e0c3f7] cursor-pointer">Need help?</li>
            <li className="hover:text-[#e0c3f7] cursor-pointer">F.A.Q.?</li>
            
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-[#e0c3f7] font-semibold mb-4">ABOUT THE ACADEMY</h3>
          <ul className="space-y-2 text-sm mb-4">
            <Link to="/about">
            <li className="hover:text-[#e0c3f7] cursor-pointer">About Us</li>
            </Link>
            <Link 
            to="/courses">
            <li className="hover:text-[#e0c3f7] cursor-pointer">Makeup Courses</li>
            </Link>
            <Link to="/success">
            <li className="hover:text-[#e0c3f7] cursor-pointer">Student Success</li>
            </Link>
            <Link 
            to="/training">
            <li className="hover:text-[#e0c3f7] cursor-pointer">Classroom Training</li>
            </Link>
            <Link to="/careers">
            <li className="hover:text-[#e0c3f7] cursor-pointer">Careers</li>
            </Link>
            
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-[#e0c3f7] font-semibold mb-4">OPPORTUNITIES</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#e0c3f7] cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-[#e0c3f7] cursor-pointer">Privacy</li>
            <li className="hover:text-[#e0c3f7] cursor-pointer">Pro Cosmetic Discounts</li>
            <li className="hover:text-[#e0c3f7] cursor-pointer">Beauty Blog</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-[#e0c3f7] font-semibold mb-4">FOLLOW US</h3>

          <div className="flex space-x-3 mb-4">
            {[FaTiktok, FaFacebookF, FaTwitter, FaYoutube, FaInstagram].map((Icon, index) => (
              <div
                key={index}
                className="w-9 h-9 flex items-center justify-center bg-white text-black rounded-full hover:scale-110 transition duration-300 cursor-pointer"
              >
                <Icon size={14} />
              </div>
            ))}
          </div>

          <p className="text-sm">Call us at 1-800-951-0795</p>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="mt-10 flex justify-center">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-10 py-4 rounded-2xl text-xs text-gray-300 shadow-lg">
          ERAM MAKEUP ACADEMY® — All Rights Reserved © 2026
        </div>
      </div>
    </footer>
  );
}
