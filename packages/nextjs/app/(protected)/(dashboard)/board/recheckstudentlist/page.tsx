"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const studentsRecheckData = [
  {
    id: 1,
    name: "John Doe",
    roll: "123456",
    registration: "78901234",
    session: "2023-2024",
    group: "Science",
    board: "Dhaka",
    subjects: [
      { name: "Bangla", previousMarks: 65, updatedMarks: null },
      { name: "Mathematics", previousMarks: 55, updatedMarks: null },
      { name: "Physics", previousMarks: 45, updatedMarks: null },
    ],
    totalFee: 600,
    status: "Not Updated",
  },
  {
    id: 2,
    name: "Jane Smith",
    roll: "654321",
    registration: "89012345",
    session: "2023-2024",
    group: "Commerce",
    board: "Chittagong",
    subjects: [
      { name: "English", previousMarks: 70, updatedMarks: null },
      { name: "Accounting", previousMarks: 60, updatedMarks: null },
    ],
    totalFee: 400,
    status: "Not Updated",
  },
];

const RecheckStudentList = () => {
  const [students] = useState(studentsRecheckData);
  const router = useRouter();

  return (
    <div className="p-6 bg-white min-h-screen text-black">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6 text-center bg-black text-white p-4 rounded-lg shadow-lg">
        Recheck Applications
      </h1>

      {/* Student Recheck List */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-200 text-black">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Roll</th>
              <th className="p-3 text-left">Registration</th>
              <th className="p-3 text-left">Session</th>
              <th className="p-3 text-left">Group</th>
              <th className="p-3 text-left">Board</th>
              <th className="p-3 text-left">Subjects</th>
              <th className="p-3 text-left">Total Fee</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id} className="border-b hover:bg-gray-100 transition">
                <td className="p-3">{student.name}</td>
                <td className="p-3">{student.roll}</td>
                <td className="p-3">{student.registration}</td>
                <td className="p-3">{student.session}</td>
                <td className="p-3">{student.group}</td>
                <td className="p-3">{student.board}</td>
                <td className="p-3">{student.subjects.map(sub => sub.name).join(", ")}</td>
                <td className="p-3 text-red-600 font-semibold">{student.totalFee} Taka</td>
                <td className={`p-3 font-bold ${student.status === "Updated" ? "text-green-600" : "text-yellow-600"}`}>
                  {student.status}
                </td>
                <td className="p-3 flex gap-2">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    onClick={() => router.push(`/marksupdate/${student.id}`)} // Updated route
                  >
                    View Marks
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecheckStudentList;
