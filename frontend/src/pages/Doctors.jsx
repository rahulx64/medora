import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Appcontext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Doctors = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(Appcontext);
  const navigate = useNavigate();

  const [filterDoc, setFilterDoc] = useState([]);
  const [selectedSpeciality, setSelectedSpeciality] = useState(speciality || "");

  // All available specialities
  const specialities = [
    "General physician",
    "Gyancologist",
    "Dermatologist",
    "Pediatrician",
    "Neurologist",
    "Gastroenterologist"
  ];

  // Apply filter based on speciality
  useEffect(() => {
    if (selectedSpeciality) {
      const filteredDoctors = doctors.filter(
        (doc) => doc.speciality === selectedSpeciality
      );
      setFilterDoc(filteredDoctors);
    } else {
      setFilterDoc(doctors);
    }
  }, [doctors, selectedSpeciality]);

  return (
    <div className="pt-20 pb-10 px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Header Section */}
      {/* <div className="max-w-7xl mx-auto mb-2">
        <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Find Your <span className="text-green-600">Perfect Doctor</span>
        </h3>
      
      </div> */}

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Speciality Filter */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Filter by <span className="text-green-600">Speciality</span>
              </h2>

              {/* Show All Option */}
              <button
                onClick={() => setSelectedSpeciality("")}
                className={`w-full text-left px-4 py-3 rounded-lg mb-3 font-medium transition-all duration-300 ${
                  selectedSpeciality === ""
                    ? "bg-green-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600"
                }`}
              >
                All Doctors
              </button>

              {/* Speciality Buttons */}
              <div className="space-y-2">
                {specialities.map((spec) => (
                  <button
                    key={spec}
                    onClick={() => setSelectedSpeciality(spec)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                      selectedSpeciality === spec
                        ? "bg-green-600 text-white shadow-md scale-105"
                        : "bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600"
                    }`}
                  >
                    {spec}
                  </button>
                ))}
              </div>

              {/* Results Count */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Showing <span className="font-bold text-green-600">{filterDoc.length}</span> doctor{filterDoc.length !== 1 ? "s" : ""}
                </p>
              </div>
            </div>
          </div>

          {/* Main Content - Doctors Grid */}
          <div className="lg:col-span-3">
            {filterDoc.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterDoc.map((item) => (
                  <div
                    key={item._id}
                    onClick={() => navigate(`/appointment/${item._id}`)}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border border-green-100 hover:border-green-300"
                  >
                    {/* Doctor Image Container */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100 h-64">
                      <img
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                        src={item.image}
                        alt={item.name}
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Doctor Info */}
                    <div className="p-5">
                      {/* Availability Badge */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="relative">
                          <span className="absolute inline-flex h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>
                          <span className="inline-flex h-3 w-3 rounded-full bg-green-400"></span>
                        </div>
                        <span className="text-sm font-semibold text-green-600">Available</span>
                      </div>

                      {/* Doctor Name */}
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                        {item.name}
                      </h3>

                      {/* Speciality */}
                      <p className="text-sm text-gray-600 mb-4 font-medium">
                        {item.speciality}
                      </p>

                      {/* Experience & Rating */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-400">★</span>
                          <span className="text-sm font-semibold text-gray-700">4.8</span>
                        </div>
                        <span className="text-xs text-gray-500">15+ years exp.</span>
                      </div>

                      {/* View Profile Button */}
                      <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2.5 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95">
                        View Profile & Book
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-96 bg-white rounded-2xl shadow-lg">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">No Doctors Found</h3>
                <p className="text-gray-600 text-center max-w-md">
                  We couldn't find doctors for the selected speciality. Please try another category.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      {filterDoc.length > 0 && (
        <div className="mt-20 max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl shadow-xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Trusted by Thousands of Patients
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-4xl font-bold mb-2">{filterDoc.length}+</div>
                <p className="text-green-100">Doctors Available</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">10k+</div>
                <p className="text-green-100">Happy Patients</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <p className="text-green-100">Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Doctors;

