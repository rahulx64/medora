import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Learnmore = () => {
  const navigate = useNavigate()
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      q: 'How do I book an appointment with a doctor?',
      a: 'Simply browse our list of verified doctors, select your preferred specialist, check their availability, and book in just a few clicks. You\'ll receive a confirmation email immediately.'
    },
    {
      q: 'Are all doctors on Medora verified?',
      a: 'Yes, every doctor undergoes a rigorous vetting process including credential verification, background checks, and patient reviews.'
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept all major credit/debit cards, digital wallets, and bank transfers. Payments are securely processed through encrypted channels.'
    },
    {
      q: 'Can I cancel or reschedule an appointment?',
      a: 'Yes, you can cancel or reschedule up to 24 hours before your appointment time without any penalty.'
    },
    {
      q: 'Is my personal health information secure?',
      a: 'Absolutely. We use HIPAA-compliant encryption and follow strict data protection standards to safeguard your sensitive information.'
    },
  ]

  const useCases = [
    {
      icon: '🏥',
      title: 'Preventive Care',
      desc: 'Regular checkups with General Physicians to stay healthy and catch issues early.'
    },
    {
      icon: '👶',
      title: 'Child Health',
      desc: 'Expert Pediatricians for your child\'s vaccinations, growth checks, and wellness.'
    },
    {
      icon: '🧠',
      title: 'Neurological Care',
      desc: 'Specialized Neurologists for headaches, seizures, and nervous system disorders.'
    },
    {
      icon: '💆',
      title: 'Skin Health',
      desc: 'Dermatologists for acne, eczema, and other skin conditions with expert treatment.'
    },
  ]

  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Patient',
      text: 'Medora made booking a dermatology appointment so easy. Got seen within a week!',
      rating: 5
    },
    {
      name: 'James L.',
      role: 'Patient',
      text: 'The transparency on fees is amazing. No hidden charges, just upfront pricing.',
      rating: 5
    },
    {
      name: 'Priya K.',
      role: 'Patient',
      text: 'I found the perfect pediatrician for my kids through Medora. Highly recommended!',
      rating: 5
    },
  ]

  return (
    <div className="pt-20 pb-20 bg-gradient-to-br from-green-50 via-white to-green-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold mb-8 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        {/* Hero */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">Learn More About Medora</h1>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Discover how Medora is transforming healthcare access. From our platform features to real patient stories, learn why thousands trust us for their medical appointments.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 bg-green-50 rounded-xl">
              <div className="text-3xl font-extrabold text-green-600 mb-2">50k+</div>
              <p className="text-gray-700">Active Users</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl">
              <div className="text-3xl font-extrabold text-blue-600 mb-2">500+</div>
              <p className="text-gray-700">Verified Doctors</p>
            </div>
            <div className="p-6 bg-purple-50 rounded-xl">
              <div className="text-3xl font-extrabold text-purple-600 mb-2">100k+</div>
              <p className="text-gray-700">Appointments Booked</p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How Medora Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Search', desc: 'Browse specialists by specialty or condition' },
              { step: 2, title: 'Compare', desc: 'View profiles, fees, experience, and ratings' },
              { step: 3, title: 'Book', desc: 'Select time slot and confirm appointment' },
              { step: 4, title: 'Connect', desc: 'Get reminders and connect with your doctor' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">{item.step}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What Can You Use Medora For?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
                <div className="text-4xl mb-3">{useCase.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{useCase.title}</h4>
                <p className="text-sm text-gray-600">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features Deep Dive */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Medora?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-green-600">✓</span> Verified Professionals
              </h4>
              <p className="text-gray-700 mb-6">Every doctor on our platform is thoroughly vetted. We check credentials, background, and maintain high professional standards to ensure you receive quality care.</p>

              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-green-600">✓</span> Real-time Availability
              </h4>
              <p className="text-gray-700 mb-6">No more phone tags. See available appointment slots in real-time and book instantly. Get instant confirmation on your email and phone.</p>

              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-green-600">✓</span> Transparent Pricing
              </h4>
              <p className="text-gray-700">Know exactly how much you'll pay before booking. No hidden fees, surprise charges, or unexpected costs. Complete price transparency.</p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-green-600">✓</span> Secure & Private
              </h4>
              <p className="text-gray-700 mb-6">Your health data is sacred. We use bank-level encryption and comply with HIPAA standards to keep your information safe and confidential.</p>

              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-green-600">✓</span> 24/7 Support
              </h4>
              <p className="text-gray-700 mb-6">Our support team is always ready to help. Whether you have a question about booking or need assistance, we're here for you round the clock.</p>

              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-green-600">✓</span> Flexible Scheduling
              </h4>
              <p className="text-gray-700">Cancel or reschedule up to 24 hours before your appointment at no charge. Life happens — we're flexible to your needs.</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What Patients Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{t.text}"</p>
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-600">{t.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border rounded-lg">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 hover:bg-green-50 transition"
                >
                  <span className="font-semibold text-gray-900">{faq.q}</span>
                  <svg className={`w-5 h-5 text-green-600 transform transition ${openFaq === idx ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 text-gray-700 border-t">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-3xl p-10 text-center shadow-xl">
          <h3 className="text-3xl font-bold mb-3">Ready to book your first appointment?</h3>
          <p className="mb-6 text-green-100 text-lg">Join thousands of patients who trust Medora for quality healthcare.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={() => navigate('/doctors')} className="bg-white text-green-700 px-8 py-3 rounded-lg font-bold hover:shadow-lg transition">Browse Doctors Now</button>
            <button onClick={() => navigate('/contact')} className="bg-white/20 border border-white/30 px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition">Contact Support</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Learnmore