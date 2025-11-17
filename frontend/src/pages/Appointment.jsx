import React, { useContext, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Appcontext } from "../context/AppContext";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(Appcontext);
  const navigate = useNavigate();

  // Find the selected doctor
  const doctor = useMemo(() => {
    return doctors.find(doc => doc._id === docId);
  }, [docId, doctors]);

  // Find similar doctors based on speciality
  const similarDoctors = useMemo(() => {
    if (!doctor) return [];
    return doctors.filter(
      doc => doc.speciality === doctor.speciality && doc._id !== docId
    ).slice(0, 4);
  }, [doctor, doctors, docId]);

  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Doctor Not Found</h2>
          <button
            onClick={() => navigate('/doctors')}
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all"
          >
            Back to Doctors
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-10 px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      <div className="max-w-6xl mx-auto">
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

        {/* Doctor Details Section */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 md:p-12">
            {/* Doctor Image */}
            <div className="md:col-span-1 flex flex-col items-center">
              <div className="w-full max-w-xs rounded-2xl overflow-hidden shadow-xl mb-6 border-4 border-green-100 hover:border-green-300 transition-colors">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="inline-flex h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-sm font-semibold text-green-600">Available Now</span>
                </div>
              </div>
            </div>

            {/* Doctor Information */}
            <div className="md:col-span-2 flex flex-col justify-between">
              {/* Name & Title */}
              <div className="mb-6">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{doctor.name}</h1>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold text-sm">
                    {doctor.speciality}
                  </span>
                  <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold text-sm">
                    {doctor.degree}
                  </span>
                </div>
              </div>

              {/* Experience & Rating */}
              <div className="grid grid-cols-2 gap-4 mb-6 bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Experience</p>
                  <p className="text-2xl font-bold text-gray-900">{doctor.experience}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Rating</p>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                    <span className="text-lg font-bold text-gray-900">4.8</span>
                  </div>
                </div>
              </div>

              {/* About */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">About</h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  {doctor.about}
                </p>
              </div>

              {/* Fee & Address */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t pt-6">
                <div>
                  <p className="text-gray-600 text-sm mb-2">Consultation Fee</p>
                  <p className="text-3xl font-bold text-green-600">${doctor.fees}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-2">Clinic Address</p>
                  <div className="text-gray-800 font-semibold">
                    <p>{doctor.address.line1}</p>
                    <p>{doctor.address.line2}</p>
                  </div>
                </div>
              </div>

              {/* Book Appointment Button */}
              <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl font-bold text-lg mt-8 hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 transform">
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Similar Doctors Section */}
        {similarDoctors.length > 0 && (
          <div className="mt-20">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Similar Doctors in <span className="text-green-600">{doctor.speciality}</span>
              </h2>
              <p className="text-gray-600 text-lg">Other specialist doctors you might be interested in</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {similarDoctors.map((item) => (
                <div
                  key={item._id}
                  onClick={() => navigate(`/appointment/${item._id}`)}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border border-green-100 hover:border-green-300"
                >
                  {/* Doctor Image */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100 h-56">
                    <img
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Doctor Info */}
                  <div className="p-4">
                    {/* Availability */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="relative">
                        <span className="absolute inline-flex h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-green-400"></span>
                      </div>
                      <span className="text-xs font-semibold text-green-600">Available</span>
                    </div>

                    {/* Name & Speciality */}
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors line-clamp-2">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 font-medium">
                      {item.speciality}
                    </p>

                    {/* Experience */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm font-semibold text-gray-700">4.8</span>
                      </div>
                      <span className="text-xs text-gray-500">{item.experience}</span>
                    </div>

                    {/* View Profile Button */}
                    <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 text-sm">
                      View Profile
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No Similar Doctors Message */}
        {similarDoctors.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <p className="text-gray-600 text-lg">No other doctors in this speciality at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Appointment;

