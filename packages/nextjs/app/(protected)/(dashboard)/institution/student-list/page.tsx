"use client";

import { useEffect, useState } from "react";
import { CircleUser } from "lucide-react";

interface Student {
  registration_number: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  father_name: string;
  mother_name: string;
  phone_number: string;
  email: string;
  permanent_address: string;
  verified: number;
}

export default function StudentList() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Demo data for students
    const demoStudents: Student[] = [
      {
        registration_number: "S12345",
        first_name: "John",
        last_name: "Doe",
        date_of_birth: "2000-01-15",
        father_name: "Michael Doe",
        mother_name: "Sarah Doe",
        phone_number: "123-456-7890",
        email: "john.doe@example.com",
        permanent_address: "123 Main St, Springfield",
        verified: 1,
      },
      {
        registration_number: "S67890",
        first_name: "Jane",
        last_name: "Smith",
        date_of_birth: "2001-04-10",
        father_name: "Robert Smith",
        mother_name: "Emily Smith",
        phone_number: "098-765-4321",
        email: "jane.smith@example.com",
        permanent_address: "456 Oak Rd, Springfield",
        verified: 0,
      },
      // Add more demo students as needed
    ];

    setStudents(demoStudents);
    setLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-emerald-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <CircleUser className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">Student Management System</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="px-6 py-4 bg-emerald-50 border-b border-emerald-100">
            <h2 className="text-xl font-semibold text-emerald-800">Student List</h2>
          </div>

          {loading ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-emerald-200">
                <thead className="bg-emerald-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-emerald-800 uppercase tracking-wider">
                      Registration No.
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-emerald-800 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-emerald-800 uppercase tracking-wider">
                      Contact Info
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-emerald-800 uppercase tracking-wider">
                      Parents
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-emerald-800 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-emerald-200">
                  {students.map(student => (
                    <tr key={student.registration_number} className="hover:bg-emerald-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-emerald-900">
                        {student.registration_number}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-emerald-900">
                          {student.first_name} {student.last_name}
                        </div>
                        <div className="text-sm text-emerald-600">{student.date_of_birth}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-emerald-900">{student.email}</div>
                        <div className="text-sm text-emerald-600">{student.phone_number}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-emerald-900">F: {student.father_name}</div>
                        <div className="text-sm text-emerald-600">M: {student.mother_name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            student.verified ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {student.verified ? "Verified" : "Pending"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
