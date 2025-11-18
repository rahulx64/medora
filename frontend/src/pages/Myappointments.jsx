import React, { useContext } from "react";
import { Appcontext } from "../context/AppContext";

const Myappointments = () => {
  const { doctors } = useContext(Appcontext);

  return (
    <div className="p-4 md:p-8">
      <h2 className="text-2xl font-semibold mb-4">My Appointments</h2>

      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {doctors.slice(0, 4).map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-4 flex gap-4 hover:shadow-lg transition"
          >
            {/* Doctor Image */}
            <div className="w-28 h-28 flex-shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Doctor Details */}
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">{item.speciality}</p>

                <p className="text-sm text-gray-700 mt-1">
                  {item.address?.line1}, {item.address?.line2}
                </p>

                <p className="text-sm mt-1">
                  <span className="font-medium">Experience: </span>
                  {item.experience}
                </p>

                <p className="text-sm">
                  <span className="font-medium">Fees: </span>${item.fees}
                </p>
              </div>

              {/* Example Date */}
              <p className="text-sm font-semibold text-blue-600 mt-2">
                Appointment Date: {item.date || "Not Scheduled"}
              </p>
            </div>

            <div> 
              <button>
                pay online
              </button>
              <button>
                cancel appointment
              </button>
            </div>


          </div>
        ))}
      </div>
    </div>
  );
};

export default Myappointments;
