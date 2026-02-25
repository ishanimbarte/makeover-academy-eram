// src/pages/FreeDemo.jsx

import React, { useState } from "react";
import { registerDemo } from "../api/api";

export default function FreeDemo() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await registerDemo({
        name,
        phone,
      });

      console.log(res);

      alert("Registered Successfully ✅");

      setName("");
      setPhone("");

    } catch (error) {
      console.error(error);
      alert("Registration Failed ❌");
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6">

      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white text-center">
        Free Demo Classes
      </h1>

      <p className="text-lg text-white mb-8 text-center max-w-xl opacity-90">
        Sign up to attend a free demo class and experience our learning platform first-hand!
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-900/90 backdrop-blur-md shadow-2xl rounded-xl p-8 w-full max-w-md flex flex-col gap-5 border border-[#EBD6FB]"
      >

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border border-gray-600 rounded-lg px-4 py-3 bg-gray-800 text-white"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="border border-gray-600 rounded-lg px-4 py-3 bg-gray-800 text-white"
        />

        <button
          type="submit"
          className="bg-gradient-to-r from-[#EBD6FB] to-[#e0c3f7] text-black font-semibold py-3 rounded-lg hover:scale-105 transition"
        >
          Register for Free Demo
        </button>

      </form>
    </div>
  );
}