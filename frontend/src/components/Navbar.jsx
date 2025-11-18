import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate1 = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  const [hide, sethide] = useState(true);
  return (
    <>
      {/* NAVBAR */}
      <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-300 px-4 md:px-8">
        {/* Logo */}
        <div
          onClick={() => navigate1("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img src={assets.medoralogo} className="w-8 h-auto" />
          <span className="text-xl font-semibold text-purple-700 font-serif tracking-wide">
            Medora
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 font-medium">
          <NavLink to="/">
            <li className="py-1 hover:text-purple-600">HOME</li>
          </NavLink>
          <NavLink to="/doctors">
            <li className="py-1 hover:text-purple-600">ALL DOCTORS</li>
          </NavLink>
          <NavLink to="/about">
            <li className="py-1 hover:text-purple-600">ABOUT</li>
          </NavLink>
          <NavLink to="/contact">
            <li className="py-1 hover:text-purple-600">CONTACT</li>
          </NavLink>
        </ul>

        {/* Profile + Buttons */}
        <div className="  flex items-center gap-4">
          {/* If logged in */}
          {token ? (
            <div
              onClick={() => {
                sethide(!hide);
              }}
              className={`flex items-center gap-2 cursor-pointer group relative   `}
            >
              <img className="w-8 rounded-full" src={assets.profile_pic} />
              <img className="w-3" src={assets.dropdown_icon} />

              {/* Hover dropdown */}
              <div
                className={`absolute top-10 right-0 text-base font-medium text-gray-700 bg-white shadow-lg rounded-lg p-4 w-44  z-20 ${
                  hide ? "hidden" : "m-0"
                } `}
                onClick={() => {
                  sethide(!hide);
                }}
              >
                <p
                  onClick={() => navigate1("/my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate1("/my-appointment")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          ) : (
            <button
              className="bg-green-600 text-white px-6 py-2 rounded-full font-light hidden md:block"
              onClick={() => navigate1("/login")}
            >
              Create Account
            </button>
          )}

          {/* Mobile Menu Button */}
          <img
            onClick={() => setShowMenu(true)}
            className="w-7 md:hidden cursor-pointer"
            src={assets.menu_icon}
            alt="menu"
          />
        </div>
      </div>

      {/* MOBILE SLIDE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <img src={assets.medoralogo} className="w-7" />
            <span className="text-lg font-semibold text-purple-700 font-serif">
              Medora
            </span>
          </div>

          {/* Close Button */}
          <img
            src={assets.cross_icon}
            className="w-6 cursor-pointer"
            onClick={() => setShowMenu(false)}
          />
        </div>

        {/* Menu Links */}
        <ul className="flex flex-col gap-5 p-5 text-lg font-medium">
          <NavLink to="/" onClick={() => setShowMenu(false)}>
            <li className="py-1 border-b pb-2">Home</li>
          </NavLink>
          <NavLink to="/doctors" onClick={() => setShowMenu(false)}>
            <li className="py-1 border-b pb-2">All Doctors</li>
          </NavLink>
          <NavLink to="/about" onClick={() => setShowMenu(false)}>
            <li className="py-1 border-b pb-2">About</li>
          </NavLink>
          <NavLink to="/contact" onClick={() => setShowMenu(false)}>
            <li className="py-1 border-b pb-2">Contact</li>
          </NavLink>

          {!token && (
            <button
              className="bg-green-600 text-white py-2 rounded-full mt-3"
              onClick={() => {
                setShowMenu(false);
                navigate1("/login");
              }}
            >
              Create Account
            </button>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
