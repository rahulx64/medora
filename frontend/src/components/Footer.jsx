import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* ---------- LEFT SECTION ---------- */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-indigo-600 p-2 rounded-md">
              <span className="text-white text-xl font-bold">M</span>
            </div>
            <h2 className="text-2xl font-semibold text-indigo-700">Medora</h2>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            This project demonstrates a full healthcare appointment workflow —
            combining clean UI design, efficient state management, and scalable
            front-end architecture for a modern medical platform experience.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            <a
              href="#"
              className="p-2 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* ---------- MIDDLE SECTION ---------- */}
        <div className="md:mx-auto">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <a href="/home" className="hover:text-indigo-600 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600 transition">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600 transition">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600 transition">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>

        {/* ---------- RIGHT SECTION ---------- */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Get in Touch
          </h3>
          <ul className="text-gray-600 text-sm space-y-2">
            <li>📞 +1-212-456-7890</li>
            <li>📧 rahulrnajandummy@gmail.com</li>
          </ul>
          <button className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-full text-sm font-medium hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg">
            Contact Support
          </button>
        </div>
      </div>

      {/* ---------- BOTTOM COPYRIGHT ---------- */}
      <div className="border-t border-gray-200 mt-10 text-center py-4 text-sm text-gray-500">
        Copyright © {new Date().getFullYear()}{" "}
        <span className="font-medium text-indigo-600">Medora</span> — All
        Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
