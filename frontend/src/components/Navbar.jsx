import React, { useState } from "react";

import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate1 = useNavigate();

  const [showmenu, setshowmenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 ">
      <div className="flex items-center gap-2 cursor-pointer">
        <img
          onClick={() => navigate1("/")}
          src={assets.medoralogo}
          className="w-8 h-auto"
        />
        <span
          onClick={() => navigate1("/")}
          className="text-xl font-semibold text-purple-700 font-serif tracking-wide"
        >
          Medora
        </span>
      </div>

      <ul className="hidden md:flex items-start gap-5  font-medium">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-purple-600 w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">ALL DOCTORS</li>
          <hr className="border-none outline-none h-0.5 bg-purple-600 w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-purple-600 w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-purple-600 w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex itmes-center gap-2 cursor-pointer group relative ">
            <img className="w-8 rounded-full" src={assets.profile_pic} />
            <img src={assets.dropdown_icon} />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-400 z-20 hidden group-hover:block ">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate1("/my-profile")}
                  className="hover:text-gray-950 cursor-pointer"
                >
                  My profile
                </p>
                <p
                  onClick={() => navigate1("/my-appointment")}
                  className="hover:text-gray-950 cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-gray-950 cursor-pointer"
                >
                  logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <button
              className="bg-green-600 text-white px-8 py-3 rounded-full font-light hidden md:block "
              onClick={() => navigate1("/login")}
            >
              Create account
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
