import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'

const jobsSample = [
  {
    id: 'job1',
    title: 'Frontend Engineer',
    location: 'Remote',
    team: 'Engineering',
    type: 'Full-time',
    summary: 'Build delightful user experiences using React and Tailwind CSS.',
  },
  {
    id: 'job2',
    title: 'Product Designer',
    location: 'London, UK',
    team: 'Design',
    type: 'Full-time',
    summary: 'Design accessible interfaces and collaborate with product teams.',
  },
  {
    id: 'job3',
    title: 'Customer Success Specialist',
    location: 'Remote',
    team: 'Support',
    type: 'Part-time',
    summary: 'Help users get the most from Medora, assist with onboarding and escalations.',
  },
]

const Careers = () => {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('All')
  const navigate = useNavigate()

  const filtered = jobsSample.filter((j) => {
    const matchesQuery = j.title.toLowerCase().includes(query.toLowerCase()) || j.summary.toLowerCase().includes(query.toLowerCase())
    const matchesFilter = filter === 'All' ? true : j.team === filter
    return matchesQuery && matchesFilter
  })

  const handleApply = (job) => {
    // Open mailto with prefilled subject
    const subject = encodeURIComponent(`Applying for ${job.title} at Medora`)
    const body = encodeURIComponent('Hi Medora Team,%0D%0A%0D%0AI am interested in the position. Please find my resume attached.')
    window.location.href = `mailto:jobs@medora.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="pt-20 pb-20 bg-gradient-to-br from-green-50 via-white to-green-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 flex items-center gap-6">
          <img src={assets.medoralogo} alt="Medora" className="w-14 h-14" />
          <div>
            <h1 className="text-2xl font-extrabold text-gray-900">Careers at Medora</h1>
            <p className="text-gray-600">Join our mission to make healthcare accessible. Explore open roles and apply.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search roles or keywords"
                className="w-full sm:w-2/3 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-200"
              />

              <select value={filter} onChange={(e) => setFilter(e.target.value)} className="border border-gray-200 rounded-lg px-4 py-3">
                <option>All</option>
                <option>Engineering</option>
                <option>Design</option>
                <option>Support</option>
              </select>
            </div>

            <div className="space-y-4">
              {filtered.map((job) => (
                <div key={job.id} className="bg-white rounded-2xl p-6 shadow border hover:shadow-2xl transition">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                      <p className="text-sm text-gray-600">{job.team} • {job.location} • {job.type}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button onClick={() => handleApply(job)} className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg font-semibold">Apply Now</button>
                      <button onClick={() => navigate('#')} className="text-sm text-gray-600 underline">Details</button>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-700">{job.summary}</p>

                  <div className="mt-4 flex gap-3">
                    <span className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full">{job.type}</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">{job.team}</span>
                  </div>
                </div>
              ))}

              {filtered.length === 0 && (
                <div className="bg-white rounded-2xl p-6 shadow text-center">
                  <p className="text-gray-600">No roles found for your search. Try different keywords or check back soon.</p>
                </div>
              )}
            </div>
          </div>

          <aside className="bg-white rounded-2xl p-6 shadow">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Why work with us?</h4>
            <ul className="text-gray-600 space-y-2">
              <li>• Impactful work in healthcare</li>
              <li>• Remote-first culture</li>
              <li>• Competitive compensation</li>
              <li>• Learning & growth opportunities</li>
            </ul>

            <div className="mt-6">
              <h5 className="font-semibold text-gray-900 mb-2">Benefits</h5>
              <p className="text-sm text-gray-600">Health insurance, flexible PTO, learning budget, and more.</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default Careers
