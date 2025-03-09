"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Define Subject Type
type Subject = {
  name: string;
  code: string;
};

// Define Marks Type
type Marks = {
  obtained: number;
  grade: string;
};

// Define Params Type
type Params = {
  roll: string;
  registration: string;
  session: string;
  examType: string;
  institution: string;
  imageUrl?: string;
};

// Define subjects list
const subjects: Subject[] = [
  { name: "Bangla", code: "BAN" },
  { name: "English", code: "ENG" },
  { name: "Mathematics", code: "MATH" },
  { name: "Physics", code: "PHY" },
  { name: "Chemistry", code: "CHEM" },
];

// Function to determine grade based on marks
const getGrade = (marks: number): string => {
  if (marks >= 80) return "A+";
  if (marks >= 70) return "A";
  if (marks >= 60) return "A-";
  if (marks >= 50) return "B";
  if (marks >= 40) return "C";
  if (marks >= 33) return "D";
  return "F";
};

const AssignMarksForm: React.FC<{ params: Params }> = ({ params }) => {
  const router = useRouter();
  const { roll, registration, session, examType, institution, imageUrl } = params;

  // Default placeholder image if no image URL is provided
  const defaultImage = "https://via.placeholder.com/100?text=Student+Photo";

  // Initialize marks state with proper types
  const [marks, setMarks] = useState<Record<string, Marks>>(
    subjects.reduce(
      (acc, subject) => {
        acc[subject.code] = { obtained: 0, grade: getGrade(0) };
        return acc;
      },
      {} as Record<string, Marks>,
    ),
  );

  // Handle input changes and automatically assign grade
  const handleChange = (subjectCode: string, value: string) => {
    const obtainedMarks = value ? parseInt(value, 10) : 0;
    const grade = getGrade(obtainedMarks);

    setMarks(prev => ({
      ...prev,
      [subjectCode]: { obtained: obtainedMarks, grade },
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Marks:", marks);
    alert("Marks Assigned Successfully!");
    router.push("/assign-marks");
  };

  return (
    <div className="p-6 bg-white min-h-screen text-black">
      <h1 className="text-4xl font-bold mb-4 text-center bg-black text-white p-4 rounded-lg shadow-lg">Assign Marks</h1>

      {/* Student Information Section */}
      <div className="flex justify-between items-center bg-gray-200 p-4 rounded-lg shadow-md mb-6">
        <div>
          <p className="text-lg font-semibold">
            📌 <span className="text-blue-600">Roll Number:</span> {roll}
          </p>
          <p className="text-lg font-semibold">
            📌 <span className="text-green-600">Registration Number:</span> {registration}
          </p>
          <p className="text-lg font-semibold">
            📌 <span className="text-purple-600">Session:</span> {session}
          </p>
          <p className="text-lg font-semibold">
            📌 <span className="text-red-600">Exam Type:</span> {examType}
          </p>
          <p className="text-lg font-semibold">
            🏫 <span className="text-indigo-600">Institution:</span> {institution}
          </p>
        </div>
        <div>
          <img
            src={imageUrl || defaultImage}
            alt="Student"
            className="w-24 h-24 rounded-lg shadow-md border border-gray-300"
          />
        </div>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-200 text-black">
              <th className="p-3 text-left">Subject</th>
              <th className="p-3 text-left">Obtained Marks</th>
              <th className="p-3 text-left">Grade</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map(subject => (
              <tr key={subject.code} className="border-b">
                <td className="p-3">{subject.name}</td>
                <td className="p-3">
                  <input
                    type="number"
                    value={marks[subject.code]?.obtained}
                    onChange={e => handleChange(subject.code, e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg w-full"
                    min="0"
                    max="100"
                    required
                  />
                </td>
                <td className="p-3">
                  <input
                    type="text"
                    value={marks[subject.code]?.grade}
                    className="p-2 border border-gray-300 rounded-lg w-full bg-gray-200"
                    readOnly
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-6 flex justify-end">
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Submit Marks
          </button>
        </div>
      </form>
    </div>
  );
};

export default AssignMarksForm;
