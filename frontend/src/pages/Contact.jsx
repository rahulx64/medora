import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets_frontend/assets'
import emailjs from '@emailjs/browser'
import { useNavigate } from 'react-router-dom'
const Contact = () => {
  const navigate=useNavigate();
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Initialize EmailJS on component mount
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY_HERE'
    emailjs.init(publicKey)
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const templateParams = {
        to_email: 'support@medora.com',
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        reply_to: form.email,
      }

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
        templateParams
      )

      setSubmitted(true)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 4000)
    } catch (err) {
      console.error('Email send error:', err)
      setError('Failed to send message. Please try again or email us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pt-20 pb-20 bg-gradient-to-br from-green-50 via-white to-green-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Contact Info / Image */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <img src={assets.medoralogo} alt="Medora" className="w-12 h-12" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Get in touch</h2>
                <p className="text-sm text-gray-600">We're here to help — send us a message and we'll respond within 24 hours.</p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-50 rounded-lg">
                  <img src={assets.info_icon} alt="info" className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Support</p>
                  <p className="font-semibold text-gray-900">support@medora.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-50 rounded-lg">
                  <img src={assets.chats_icon} alt="chat" className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-semibold text-gray-900">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-50 rounded-lg">
                  <img src={assets.contact_image} alt="location" className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Address</p>
                  <p className="font-semibold text-gray-900">17th Cross, Richmond, Circle, Ring Road, London</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Office Hours</h4>
              <p className="text-sm text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-200"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-200"
                  placeholder="How can we help?"
                />
              </div>

              <div className="flex items-center gap-4">
                <button type="submit" disabled={loading} className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:from-green-600 hover:to-green-700 transition disabled:opacity-50">
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
                {submitted && <span className="text-sm text-green-600">✓ Thanks — we received your message.</span>}
                {error && <span className="text-sm text-red-600">{error}</span>}
              </div>
            </form>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl p-8 text-center shadow">
          <h3 className="text-2xl font-bold mb-2">Need a quick answer?</h3>
          <p className="mb-4 text-green-100">Call our support or start a live chat to get instant help.</p>
          <div className="flex justify-center gap-4">
            <button onClick={()=>{
              navigate("/carrier");
            }} className="bg-white text-green-700 px-6 py-3 rounded-lg font-bold">carrier</button>
            <a href="#" className="bg-white/20 border border-white/30 px-6 py-3 rounded-lg font-semibold">Start Chat</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact