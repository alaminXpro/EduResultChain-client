"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const student = {
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
};

const MarksUpdate = () => {
  const router = useRouter();
  const [updatedMarks, setUpdatedMarks] = useState<{ [key: string]: number | null }>({});
  const [status, setStatus] = useState<string>("Pending");

  const handleMarksChange = (subjectName: string, value: string) => {
    setUpdatedMarks(prev => ({
      ...prev,
      [subjectName]: value ? parseInt(value, 10) : null,
    }));
  };

  const handleUpdateStatus = (newStatus: string) => {
    setStatus(newStatus);
    alert(`Marks have been marked as: ${newStatus}`);
  };

  return (
    <div className="p-6 bg-white min-h-screen text-black">
      <h1 className="text-3xl font-bold mb-6 text-center bg-black text-white p-4 rounded-lg shadow-lg">
        Marks Update for {student.name}
      </h1>

      {/* Student Details */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
        <p className="text-lg font-semibold">📌 Roll: {student.roll}</p>
        <p className="text-lg font-semibold">📌 Registration: {student.registration}</p>
        <p className="text-lg font-semibold">📌 Session: {student.session}</p>
        <p className="text-lg font-semibold">📌 Group: {student.group}</p>
        <p className="text-lg font-semibold">📌 Board: {student.board}</p>
        <p className="text-lg font-semibold">
          📌 Status: <span className={status === "Updated" ? "text-green-600" : "text-red-600"}>{status}</span>
        </p>
      </div>

      {/* Marks Update Table */}
      <table className="w-full border-collapse bg-white rounded-lg">
        <thead>
          <tr className="bg-blue-200 text-black">
            <th className="p-3">Subject</th>
            <th className="p-3">Previous Marks</th>
            <th className="p-3">Updated Marks</th>
          </tr>
        </thead>
        <tbody>
          {student.subjects.map(subject => (
            <tr key={subject.name} className="border-b">
              <td className="p-3">{subject.name}</td>
              <td className="p-3">{subject.previousMarks}</td>
              <td className="p-3">
                <input
                  type="number"
                  value={updatedMarks[subject.name] ?? ""}
                  onChange={e => handleMarksChange(subject.name, e.target.value)}
                  className="p-2 border rounded w-full"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Action Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
        <button
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition shadow-lg"
          onClick={() => handleUpdateStatus("Updated")}
        >
          Update
        </button>
        <button
          className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition shadow-lg"
          onClick={() => handleUpdateStatus("Not Approved")}
        >
          Not Approved
        </button>
      </div>

      {/* Back to Home Button */}
      <div className="mt-6 flex justify-center">
        <button
          className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition shadow-lg"
          onClick={() => router.push("/")}
        >
          Back to Recheack List
        </button>
      </div>
    </div>
  );
};

export default MarksUpdate;
