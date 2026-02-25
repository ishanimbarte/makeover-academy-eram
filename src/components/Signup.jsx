import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signupUser } from "../api/api"; // ✅ import API

export default function SignupPage() {
  const [fullName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signupUser({
        fullName,
        email,
        password,
      });

      console.log("Signup successful:", response.data);
      // Navigate to login page
      navigate("/login");
    } catch (err) {
      console.error("Signup error:", err);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md p-8 bg-black/80 backdrop-blur-md rounded-xl shadow-lg text-gray-300">
        <h1 className="text-3xl font-extrabold text-[#EBD6FB] text-center mb-6">
          Sign Up
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Full Name</label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700"
            />
          </div>


          <button className="w-full bg-[#EBD6FB] text-black py-2 rounded-full font-semibold">
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-400 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-[#EBD6FB] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}