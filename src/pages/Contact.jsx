// src/pages/Contact.jsx
import React, { useState } from "react";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://eramclasses-backend-production.up.railway.app/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
});

const data = await response.json();

      console.log(data);

      alert("Message sent successfully ✅");

      // Clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

    } catch (error) {
      console.error(error);
      alert("Failed to send message ❌");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">

      {/* Hero */}
      <div className="max-w-5xl text-center mt-40 mb-12">
        <h1 className="text-5xl font-extrabold mb-4 text-[#EBD6FB]">
          Contact Us
        </h1>
        <p className="text-gray-300">
          Have questions? Fill the form below.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12 max-w-6xl w-full mb-20">

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-gray-900/80 p-8 rounded-xl border border-[#EBD6FB] flex flex-col gap-4"
        >
          <h2 className="text-2xl font-bold text-[#EBD6FB]">
            Send Us a Message
          </h2>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="border border-gray-600 rounded-lg px-4 py-3 bg-gray-800"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="border border-gray-600 rounded-lg px-4 py-3 bg-gray-800"
            required
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="border border-gray-600 rounded-lg px-4 py-3 bg-gray-800"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className="border border-gray-600 rounded-lg px-4 py-3 bg-gray-800"
            required
          />

          <button className="bg-[#EBD6FB] text-black font-semibold py-3 rounded-lg hover:scale-105 transition">
            Send Message
          </button>
        </form>

        {/* Info */}
        <div className="flex-1 bg-gray-900/80 p-8 rounded-xl border border-[#EBD6FB]">
          <h2 className="text-2xl font-bold text-[#EBD6FB]">
            Our Contact Info
          </h2>
          <p>Email: info@glamacademy.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: India</p>
        </div>

      </div>
    </div>
  );
}