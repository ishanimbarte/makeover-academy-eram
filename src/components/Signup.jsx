import { Link } from "react-router-dom";
import { useState } from "react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Here you can add your signup logic, e.g., API call
    console.log("Name:", name, "Email:", email, "Password:", password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md p-8 bg-black/80 backdrop-blur-md rounded-xl shadow-lg text-gray-300">
        <h1 className="text-3xl font-extrabold text-[#EBD6FB] text-center mb-6">
          Sign Up
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block mb-1 font-semibold" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-[#EBD6FB] outline-none transition"
              placeholder="Your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-[#EBD6FB] outline-none transition"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-semibold" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-[#EBD6FB] outline-none transition"
              placeholder="Enter your password"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1 font-semibold" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-[#EBD6FB] outline-none transition mb-6"
              placeholder="Re-enter your password"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#EBD6FB] text-black py-2 rounded-full font-semibold hover:bg-[#e0c3f7] transition mt-2"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
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
