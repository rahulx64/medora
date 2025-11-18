import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";

const Myprofile = () => {
  const [userData, setUserData] = useState({
    name: "Rahul Ranjan",
    image: assets.profile_pic,
    email: "rahulxyad@gmail.com",
    phone: "+1 234 564 8978",
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, London",
    },
    gender: "Male",
    dob: "28 Oct 2004",
  });

  const handleSave = () => {
    console.log("hello world");
    console.log(userData);
    setIsEdit(false);
  };

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-lg">
        {/* Profile Image */}
        <div className="flex flex-col items-center">
          <img
            src={userData.image}
            alt="profile"
            className="w-28 h-28 rounded-full object-cover mb-4 border"
          />

          {/* Name */}
          {isEdit ? (
            <input
              type="text"
              value={userData.name}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="border px-3 py-2 rounded-md text-center w-full"
            />
          ) : (
            <h2 className="text-xl font-semibold">{userData.name}</h2>
          )}

          {/* Edit Button */}
          {isEdit ? (
            <button
              onClick={handleSave}
              className="mt-3 px-5 py-2 text-sm bg-green-600 text-white rounded-md hover:bg-green-700 transition"
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="mt-3 px-5 py-2 text-sm bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            >
              Edit Profile
            </button>
          )}
        </div>

        {/* Profile Details */}
        <div className="mt-6 space-y-4">
          {/* Email */}
          <div>
            <p className="text-gray-600">Email</p>
            {isEdit ? (
              <input
                type="email"
                value={userData.email}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, email: e.target.value }))
                }
                className="border px-3 py-2 rounded-md w-full"
              />
            ) : (
              <p className="font-medium">{userData.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <p className="text-gray-600">Phone</p>
            {isEdit ? (
              <input
                type="text"
                value={userData.phone}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, phone: e.target.value }))
                }
                className="border px-3 py-2 rounded-md w-full"
              />
            ) : (
              <p className="font-medium">{userData.phone}</p>
            )}
          </div>

          {/* Address */}
          <div>
            <p className="text-gray-600">Address</p>
            {isEdit ? (
              <>
                <input
                  type="text"
                  value={userData.address.line1}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value },
                    }))
                  }
                  className="border px-3 py-2 rounded-md w-full mb-2"
                />
                <input
                  type="text"
                  value={userData.address.line2}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }))
                  }
                  className="border px-3 py-2 rounded-md w-full"
                />
              </>
            ) : (
              <p className="font-medium">
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
            )}
          </div>

          {/* Gender */}
          <div>
            <p className="text-gray-600">Gender</p>
            {isEdit ? (
              <select
                value={userData.gender}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, gender: e.target.value }))
                }
                className="border px-3 py-2 rounded-md w-full"
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            ) : (
              <p className="font-medium">{userData.gender}</p>
            )}
          </div>

          {/* DOB */}
          <div>
            <p className="text-gray-600">Date of Birth</p>
            {isEdit ? (
              <input
                type="text"
                value={userData.dob}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, dob: e.target.value }))
                }
                className="border px-3 py-2 rounded-md w-full"
              />
            ) : (
              <p className="font-medium">{userData.dob}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myprofile;
