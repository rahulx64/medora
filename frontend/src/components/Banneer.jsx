import React from "react";
import {assets} from "../assets/assets_frontend/assets"; // 👈 replace with your actual image path
import { useNavigate } from "react-router-dom";

const banner = () => {

     const navigate=useNavigate();
  return (
    <section className="bg-[#151a2e] text-white rounded-2xl flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 md:py-16">
      {/* Text Section */}
      <div className="flex flex-col items-start gap-4 md:w-1/2">
        <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
          Book Appointment <br /> With 100+ Trusted Doctors
        </h1>

        <button  onClick={()=>{
          navigate('/login');
          scrollTo(0,0);
        }} className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-8 py-3 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          <span className="relative z-10 flex items-center gap-2">
            Create Account
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </button>
      </div>

      {/* Image Section */}
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
        <img
          src={assets.appointment_img}
          alt="Doctor"
          className="w-64 md:w-80 object-contain"
        />
      </div>
    </section>
  );
};

export default banner;

