import React from 'react'
import { assets } from '../assets/assets_frontend/assets';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-green-500 rounded-lg px-6 md:px-10 lg:px-20 ">
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] ">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight ">
          Book Appointment <br />
          With Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <img src={assets.group_profiles} alt="" />
          <p>
            Simply browse through our extensive list of trusted doctors,
            <br className="hidden sm:block" />
            schedule your appointment hassle-free
          </p>
        </div>
        <a
          href="#speciality"
          class="group inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold text-base px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:from-purple-500 hover:to-indigo-500 hover:-translate-y-1 hover:shadow-xl"
        >
          Book Appointment
          <img
            src={assets.arrow_icon}
            alt="arrow"
            class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>
      </div>
      <div className="md:w-1/2 relative ">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
          src={assets.header_img}
          alt=""
        />
      </div>
    </div>
  );
}

export default Header