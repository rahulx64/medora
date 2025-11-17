import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

import { useNavigate } from 'react-router-dom'
const About = () => {
  const navigate=useNavigate();
  return (
    <div className="pt-20 pb-20 bg-gradient-to-br from-green-50 via-white to-green-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items=center bg-white rounded-3xl shadow-xl overflow-hidden p-8 lg:p-12">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">About Medora</h1>
            <p className="text-lg text-gray-700 mb-6">We connect you with trusted medical professionals for fast, convenient and compassionate care. Our mission is to make healthcare accessible, transparent, and patient-centered.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-50 rounded-lg">
                  <img src={assets.verified_icon} alt="secure" className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Verified Doctors</h4>
                  <p className="text-sm text-gray-600">Each profile is verified and vetted by our medical team.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-50 rounded-lg">
                  <img src={assets.chats_icon} alt="chat" className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">24/7 Support</h4>
                  <p className="text-sm text-gray-600">Our support team is ready to help you book or manage appointments.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:from-green-600 hover:to-green-700 transition">Get Started</button>
              <button className="inline-flex items-center justify-center border border-green-200 text-green-700 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition" onClick={()=>navigate('/learnmore')} >Learn More</button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-lg">
              <img src={assets.about_image} alt="About" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-600">To simplify access to quality healthcare by connecting patients with verified specialists and providing an easy-to-use platform for booking appointments.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-600">A world where everyone can get dependable medical advice and care — anytime, anywhere.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Promise</h3>
            <p className="text-gray-600">Transparency, compassion, and security — we protect patient data and ensure a seamless experience.</p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-12 bg-white rounded-3xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 border rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Instant Booking</h4>
              <p className="text-sm text-gray-600">Book appointments with a few clicks — real time availability.</p>
            </div>
            <div className="p-5 border rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Transparent Fees</h4>
              <p className="text-sm text-gray-600">Clear pricing so you know what to expect before you book.</p>
            </div>
            <div className="p-5 border rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Trusted Specialists</h4>
              <p className="text-sm text-gray-600">Careful vetting process for reliable, skilled doctors.</p>
            </div>
            <div className="p-5 border rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Secure Data</h4>
              <p className="text-sm text-gray-600">We use industry standard practices to keep your information safe.</p>
            </div>
          </div>
        </div>

        {/* Team / Profiles */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="bg-white rounded-2xl p-8 shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Meet Our Team</h3>
            <p className="text-gray-600 mb-6">A passionate group of healthcare and tech professionals dedicated to building better healthcare experiences.</p>
            <div className="flex items-center gap-4">
              <img src={assets.group_profiles} alt="team" className="w-20 h-20 rounded-full object-cover shadow" />
              <div>
                <p className="font-semibold text-gray-900">Dr. Aiden Cooper</p>
                <p className="text-sm text-gray-600">Chief Medical Officer</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow flex flex-col justify-center items-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Impact</h3>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-green-600">10k+</div>
              <p className="text-gray-600">Appointments booked</p>
            </div>
            <div className="w-full mt-6">
              <div className="h-2 bg-green-100 rounded-full overflow-hidden">
                <div className="h-2 bg-green-500 rounded-full w-3/4"></div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-3xl p-10 text-center shadow-xl">
          <h3 className="text-3xl font-bold mb-3">Ready to find the right doctor?</h3>
          <p className="mb-6 text-green-100">Start by browsing specialists or book an appointment instantly.</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-green-700 px-6 py-3 rounded-lg font-bold">Browse Doctors</button>
            <button className="bg-white/20 border border-white/30 px-6 py-3 rounded-lg font-semibold">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;

