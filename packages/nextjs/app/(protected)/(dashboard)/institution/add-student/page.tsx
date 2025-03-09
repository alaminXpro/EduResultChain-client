"use client";

import { useRef, useState } from "react";
import Dropdown from "@/components/dropdown";
import { useAuth } from "@/hooks/useAuth";

// Adjust the import path as necessary

const AddNewStudents = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    studentID: "",
    fullName: "",
    fathersName: "",
    fathersNID: "",
    mothersName: "",
    mothersNID: "",
    dateOfBirth: "",
    birthCertificateNumber: "",
    gender: "",
    religion: "",
    address: "",
    contactNumber: "",
    email: "",
    image: null,
  });

  const genderDropdownRef = useRef(null);
  const religionDropdownRef = useRef(null);

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleDropdownChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (window.confirm("Do you want to submit the form?")) {
      console.log(formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 w-full p-4">
      <div className="container mx-auto p-8 bg-blue-100 rounded-lg shadow-xl relative">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6 font-sans">
          Welcome, {user?.first_name} {user?.last_name}
        </h1>
        <h2 className="text-2xl text-center text-gray-700 mb-6 font-sans">Add New Students</h2>

        <div className="absolute top-4 right-4 w-20 h-20 border border-gray-400 rounded overflow-hidden flex items-center justify-center bg-white">
          <input
            type="file"
            name="image"
            accept="image/jpeg, image/png"
            onChange={handleChange}
            className="absolute opacity-0 w-full h-full cursor-pointer"
          />
          <span className="text-sm text-gray-500">Upload</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Student ID</label>
              <input
                type="number"
                name="studentID"
                value={formData.studentID}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Father Name</label>
              <input
                type="text"
                name="fathersName"
                value={formData.fathersName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Father NID</label>
              <input
                type="text"
                name="fathersNID"
                value={formData.fathersNID}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Mother Name</label>
              <input
                type="text"
                name="mothersName"
                value={formData.mothersName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Mother NID</label>
              <input
                type="text"
                name="mothersNID"
                value={formData.mothersNID}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Birth Certificate Number</label>
              <input
                type="text"
                name="birthCertificateNumber"
                value={formData.birthCertificateNumber}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Gender</label>
              <Dropdown
                ref={genderDropdownRef}
                button={<span>{formData.gender || "Select Gender"}</span>}
                btnClassName="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                placement="bottom-start"
              >
                <div className="bg-white border border-gray-300 rounded shadow-lg">
                  <div
                    className="p-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleDropdownChange("gender", "Male")}
                  >
                    Male
                  </div>
                  <div
                    className="p-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleDropdownChange("gender", "Female")}
                  >
                    Female
                  </div>
                  <div
                    className="p-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleDropdownChange("gender", "Other")}
                  >
                    Other
                  </div>
                </div>
              </Dropdown>
            </div>
            <div>
              <label className="block text-gray-700">Religion</label>
              <Dropdown
                ref={religionDropdownRef}
                button={<span>{formData.religion || "Select Religion"}</span>}
                btnClassName="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                placement="bottom-start"
              >
                <div className="bg-white border border-gray-300 rounded shadow-lg">
                  <div
                    className="p-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleDropdownChange("religion", "Islam")}
                  >
                    Islam
                  </div>
                  <div
                    className="p-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleDropdownChange("religion", "Hinduism")}
                  >
                    Hinduism
                  </div>
                  <div
                    className="p-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleDropdownChange("religion", "Christianity")}
                  >
                    Christianity
                  </div>
                  <div
                    className="p-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleDropdownChange("religion", "Buddhism")}
                  >
                    Buddhism
                  </div>
                  <div
                    className="p-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleDropdownChange("religion", "Other")}
                  >
                    Other
                  </div>
                </div>
              </Dropdown>
            </div>
            <div className="col-span-2">
              <label className="block text-gray-700">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                rows={3}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Contact Number</label>
              <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-red-600 text-white p-3 rounded-lg hover:from-red-600 hover:to-pink-500 transition duration-300 font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewStudents;
