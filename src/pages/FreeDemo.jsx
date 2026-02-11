// src/pages/FreeDemo.jsx
import React from "react";

export default function FreeDemo() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white text-center drop-shadow-lg">
        Free Demo Classes
      </h1>
      <p className="text-lg md:text-xl text-white mb-8 text-center max-w-xl opacity-90">
        Sign up to attend a free demo class and experience our learning platform first-hand!
      </p>

      <form className="bg-gray-900/90 backdrop-blur-md shadow-2xl rounded-xl p-8 w-full max-w-md flex flex-col gap-5 border border-[#EBD6FB]">
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EBD6FB] bg-gray-800 text-white placeholder-gray-400 transition"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EBD6FB] bg-gray-800 text-white placeholder-gray-400 transition"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EBD6FB] bg-gray-800 text-white placeholder-gray-400 transition"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-[#EBD6FB] to-[#e0c3f7] text-black font-semibold py-3 rounded-lg hover:scale-105 hover:shadow-xl transition transform duration-300"
        >
          Register for Free Demo
        </button>
      </form>
    </div>
  );
}
