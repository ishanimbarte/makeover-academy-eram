import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // hook to programmatically navigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Placeholder login logic (replace with real auth API)
    if (email === "test@example.com" && password === "password") {
      // Login successful, redirect to home page
      navigate("/"); // Redirect to Home Page
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md p-8 bg-black/80 backdrop-blur-md rounded-xl shadow-lg text-gray-300">
        <h1 className="text-3xl font-extrabold text-[#EBD6FB] text-center mb-6">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
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
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-[#EBD6FB] outline-none transition mb-6"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#EBD6FB] text-black py-2 rounded-full font-semibold hover:bg-[#e0c3f7] transition mt-2"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-400 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#EBD6FB] hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
