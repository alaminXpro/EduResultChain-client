"use client";

import { useState } from "react";

const students = [
  {
    roll: "101",
    registration: "20230001",
    name: "Rahim Uddin",
    group: "Science",
    EIIN: "123456",
    examType: "HSC",
    session: "2023",
    contact: "017XXXXXXXX",
    assignLink: "#",
  },
  {
    roll: "102",
    registration: "20230002",
    name: "Karim Ahmed",
    group: "Commerce",
    EIIN: "123456",
    examType: "SSC",
    session: "2023",
    contact: "018XXXXXXXX",
    assignLink: "#",
  },
];

const Assessment = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [eiin, setEiin] = useState("");
  const [examType, setExamType] = useState("");
  const [session, setSession] = useState("");

  const filteredStudents = students.filter(
    student =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.roll.includes(searchTerm) ||
      student.registration.includes(searchTerm),
  );

  return (
    <div className="p-6 bg-white min-h-screen text-black">
      <h1 className="text-4xl font-bold mb-6 text-center bg-black text-white p-4 rounded-lg shadow-lg">
        Student Assessment
      </h1>

      {/* Filters */}
      <div className="mb-6 flex flex-col md:flex-row gap-4 justify-between items-center">
        <input
          type="text"
          placeholder="Search by Name, Roll, Registration..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg w-full md:w-1/3"
        />
        <input
          type="text"
          placeholder="EIIN Number"
          value={eiin}
          onChange={e => setEiin(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg w-full md:w-1/4"
        />
        <select
          value={examType}
          onChange={e => setExamType(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg w-full md:w-1/4"
        >
          <option value="">Select Exam Type</option>
          <option value="SSC">SSC</option>
          <option value="HSC">HSC</option>
        </select>
        <input
          type="text"
          placeholder="Session"
          value={session}
          onChange={e => setSession(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg w-full md:w-1/4"
        />
      </div>

      {/* Student List */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-lg overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-200 text-black">
              <th className="p-3 text-left">Roll</th>
              <th className="p-3 text-left">Registration</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Group</th>
              <th className="p-3 text-left">EIIN</th>
              <th className="p-3 text-left">Exam Type</th>
              <th className="p-3 text-left">Session</th>
              <th className="p-3 text-left">Contact</th>
              <th className="p-3 text-left">Assign Marks</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map(student => (
              <tr key={student.roll} className="border-b">
                <td className="p-3">{student.roll}</td>
                <td className="p-3">{student.registration}</td>
                <td className="p-3">{student.name}</td>
                <td className="p-3">{student.group}</td>
                <td className="p-3">{student.EIIN}</td>
                <td className="p-3">{student.examType}</td>
                <td className="p-3">{student.session}</td>
                <td className="p-3">{student.contact}</td>
                <td className="p-3">
                  <a href={student.assignLink} className="text-blue-500 underline">
                    Assign Marks
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

export default Assessment;
