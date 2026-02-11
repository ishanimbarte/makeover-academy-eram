// src/pages/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">

      {/* Hero Section */}
      <div className="max-w-5xl text-center mt-40 mb-12">
        <h1 className="text-5xl md:text-5xl font-extrabold mb-4 text-[#EBD6FB] drop-shadow-lg">
          Contact Us
        </h1>
        <p className="text-lg md:text-md text-gray-300 max-w-3xl mx-auto">
          Have questions or want to get in touch? Fill out the form below or reach us via email, phone, or our social media channels.
        </p>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row gap-12 max-w-6xl w-full mb-20">

        {/* Contact Form */}
        <form className="flex-1 bg-gray-900/80 backdrop-blur-md p-8 rounded-xl shadow-xl border border-[#EBD6FB] flex flex-col gap-4">
          <h2 className="text-2xl font-bold mb-4 text-[#EBD6FB]">Send Us a Message</h2>
          
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EBD6FB] bg-gray-800 text-white placeholder-gray-400 transition"
            required
          />
          
          {/* Email */}
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EBD6FB] bg-gray-800 text-white placeholder-gray-400 transition"
            required
          />
          
          {/* Phone */}
          <input
            type="tel"
            placeholder="Phone Number"
            className="border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EBD6FB] bg-gray-800 text-white placeholder-gray-400 transition"
          />
          
          {/* Message */}
          <textarea
            placeholder="Your Message"
            rows={5}
            className="border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EBD6FB] bg-gray-800 text-white placeholder-gray-400 transition resize-none"
            required
          />
          
          <button
            type="submit"
            className="bg-[#EBD6FB] text-black font-semibold py-3 rounded-lg hover:bg-[#e0c3f7] hover:scale-105 transition transform"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex-1 bg-gray-900/80 backdrop-blur-md p-8 rounded-xl shadow-xl border border-[#EBD6FB] flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-[#EBD6FB]">Our Contact Info</h2>
          <p className="text-gray-300">
            <strong>Email:</strong> info@glamacademy.com
          </p>
          <p className="text-gray-300">
            <strong>Phone:</strong> +91 98765 43210
          </p>
          <p className="text-gray-300">
            <strong>Address:</strong> 123 Glam Street, Beauty City, India
          </p>
          <p className="text-gray-300">
            <strong>Social:</strong> Instagram | Facebook | Twitter
          </p>
        </div>
      </div>
    </div>
  );
}
