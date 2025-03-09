"use client";

import { useState } from "react";

const institutions = [
  {
    EIIN: "123456",
    name: "Dhaka College",
    type: "College",
    location: "Dhaka",
    totalStudents: 5000,
    sscPass: "90%",
    hscPass: "88%",
    contact: "017XXXXXXXX",
    website: "#",
    resultLink: "#",
  },
  {
    EIIN: "654321",
    name: "Viqarunnisa Noon School & College",
    type: "School & College",
    location: "Dhaka",
    totalStudents: 4000,
    sscPass: "92%",
    hscPass: "89%",
    contact: "018XXXXXXXX",
    website: "#",
    resultLink: "#",
  },
  {
    EIIN: "789012",
    name: "Notre Dame College",
    type: "College",
    location: "Dhaka",
    totalStudents: 4500,
    sscPass: "N/A",
    hscPass: "95%",
    contact: "016XXXXXXXX",
    website: "#",
    resultLink: "#",
  },
  {
    EIIN: "345678",
    name: "Holy Cross College",
    type: "College",
    location: "Dhaka",
    totalStudents: 3500,
    sscPass: "N/A",
    hscPass: "92%",
    contact: "015XXXXXXXX",
    website: "#",
    resultLink: "#",
  },
];

const InstitutionList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredInstitutions = institutions.filter(institution =>
    institution.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="p-6 bg-white min-h-screen text-black">
      <h1 className="text-4xl font-bold mb-6 text-center bg-black text-white p-4 rounded-lg shadow-lg">
        Dhaka Board Institutions
      </h1>

      {/* Search and Filter */}
      <div className="mb-6 flex flex-col md:flex-row gap-4 justify-between items-center">
        <input
          type="text"
          placeholder="Search institutions..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg w-full md:w-1/2"
        />
      </div>

      {/* Institution List */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-lg overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-200 text-black">
              <th className="p-3 text-left">EIIN</th>
              <th className="p-3 text-left">Institution Name</th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Location</th>
              <th className="p-3 text-left">Total Students</th>
              <th className="p-3 text-left">SSC Pass %</th>
              <th className="p-3 text-left">HSC Pass %</th>
              <th className="p-3 text-left">Contact</th>
              <th className="p-3 text-left">Website</th>
              <th className="p-3 text-left">Results</th>
            </tr>
          </thead>
          <tbody>
            {filteredInstitutions.map(institution => (
              <tr key={institution.EIIN} className="border-b">
                <td className="p-3">{institution.EIIN}</td>
                <td className="p-3">{institution.name}</td>
                <td className="p-3">{institution.type}</td>
                <td className="p-3">{institution.location}</td>
                <td className="p-3">{institution.totalStudents}</td>
                <td className="p-3">{institution.sscPass}</td>
                <td className="p-3">{institution.hscPass}</td>
                <td className="p-3">{institution.contact}</td>
                <td className="p-3">
                  <a href={institution.website} className="text-blue-500 underline">
                    Visit
                  </a>
                </td>
                <td className="p-3">
                  <a href={institution.resultLink} className="text-blue-500 underline">
                    View Results
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InstitutionList;
