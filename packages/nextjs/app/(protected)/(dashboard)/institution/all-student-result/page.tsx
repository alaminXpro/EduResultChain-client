"use client";

import { useEffect, useState } from "react";

interface StudentResult {
  registration_number: string;
  first_name: string;
  last_name: string;
  roll_number: string;
  exam_name: string;
  session: string;
  group: string;
  gpa: number;
  grade: string;
  total_marks: number;
  status: string;
  published: number;
}

export default function AllStudentResults() {
  const [results, setResults] = useState<StudentResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Demo data for student results
    const demoData: StudentResult[] = [
      {
        registration_number: "20250002",
        first_name: "MD",
        last_name: "Alamin",
        roll_number: "20250030001",
        exam_name: "HSC",
        session: "2025",
        group: "Science",
        gpa: 4.67,
        grade: "A",
        total_marks: 255,
        status: "Pass",
        published: 1,
      },
      {
        registration_number: "20250001",
        first_name: "Mr",
        last_name: "Updated",
        roll_number: "20240030001",
        exam_name: "SSC",
        session: "2024",
        group: "Science",
        gpa: 4.67,
        grade: "A",
        total_marks: 255,
        status: "Pass",
        published: 1,
      },
      {
        registration_number: "20250001",
        first_name: "Mr",
        last_name: "Updated",
        roll_number: "20250030002",
        exam_name: "HSC",
        session: "2025",
        group: "Science",
        gpa: 4.67,
        grade: "A",
        total_marks: 255,
        status: "Pass",
        published: 1,
      },
    ];

    // Simulating async data fetching
    setTimeout(() => {
      setResults(demoData);
      setLoading(false);
    }, 1000);
  }, []);

  const handleDelete = async (registration_number: string) => {
    try {
      const response = await fetch(`http://localhost/api/students/${registration_number}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (data.success) {
        // Remove the deleted student from the state
        setResults(prevResults => prevResults.filter(result => result.registration_number !== registration_number));
        alert(data.message);
      } else {
        alert("Failed to delete student.");
      }
    } catch (error) {
      console.error("Error deleting student:", error);
      alert("Error deleting student. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="p-8 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
      </div>
    );
  }

  if (!results.length) {
    return <p className="text-center text-red-600">No student results found.</p>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-emerald-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">All Student Results</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="px-6 py-4 bg-emerald-50 border-b border-emerald-100">
            <h2 className="text-xl font-semibold text-emerald-800">Student Exam Results</h2>
          </div>

          <div className="px-6 py-4">
            {/* Table for displaying results */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white table-auto">
                <thead>
                  <tr className="bg-emerald-600 text-white">
                    <th className="px-6 py-3 text-left">Student</th>
                    <th className="px-6 py-3 text-left">Exam Name</th>
                    <th className="px-6 py-3 text-left">Session</th>
                    <th className="px-6 py-3 text-left">GPA</th>
                    <th className="px-6 py-3 text-left">Grade</th>
                    <th className="px-6 py-3 text-left">Total Marks</th>
                    <th className="px-6 py-3 text-left">Status</th>
                    <th className="px-6 py-3 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map(result => (
                    <tr key={result.roll_number} className="border-b border-emerald-100">
                      <td className="px-6 py-3">
                        {result.first_name} {result.last_name} ({result.registration_number})
                      </td>
                      <td className="px-6 py-3">{result.exam_name}</td>
                      <td className="px-6 py-3">{result.session}</td>
                      <td className="px-6 py-3">{result.gpa}</td>
                      <td className="px-6 py-3">{result.grade}</td>
                      <td className="px-6 py-3">{result.total_marks}</td>
                      <td className="px-6 py-3">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-sm ${
                            result.status === "Pass" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                          }`}
                        >
                          {result.status}
                        </span>
                      </td>
                      <td className="px-6 py-3">
                        <button
                          onClick={() => handleDelete(result.registration_number)}
                          className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
