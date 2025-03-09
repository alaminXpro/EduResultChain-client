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
  image: string;
  phone_verified: number;
  phone_verified_at: string | null;
  created_at: string;
  updated_at: string;
}

export default function StudentInfo() {
  const [student, setStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Demo data for student
    const demoStudent: Student = {
      registration_number: "20250001",
      first_name: "Mr",
      last_name: "Updated",
      date_of_birth: "2005-01-15",
      father_name: "James Doe",
      mother_name: "Jane Doe",
      phone_number: "01XXXXXXXXX",
      email: "john.doe@example.com",
      permanent_address: "123 Main Street, City, District",
      image: "iVBORw0KGgoAAAANSUhEUgAAAAUA...", // Example base64 image data
      phone_verified: 0,
      phone_verified_at: null,
      created_at: "2025-03-05 15:52:14",
      updated_at: "2025-03-07 18:13:29",
    };

    // Simulating an async API call
    setTimeout(() => {
      setStudent(demoStudent);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="p-8 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
      </div>
    );
  }

  if (!student) {
    return <p className="text-center text-red-600">Student data not found.</p>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-emerald-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <CircleUser className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">Student Information</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="px-6 py-4 bg-emerald-50 border-b border-emerald-100">
            <h2 className="text-xl font-semibold text-emerald-800">Student Details</h2>
          </div>

          <div className="px-6 py-4">
            <div className="flex items-center space-x-6">
              <img
                src={`data:image/jpeg;base64,${student.image}`}
                alt="Student Profile"
                className="w-24 h-24 rounded-full object-cover border-2 border-emerald-600"
              />
              <div>
                <h3 className="text-2xl font-bold text-emerald-800">
                  {student.first_name} {student.last_name}
                </h3>
                <p className="text-sm text-emerald-600">{student.registration_number}</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-emerald-800">Date of Birth:</p>
                  <p className="text-sm text-emerald-600">{student.date_of_birth}</p>
                </div>
                <div>
                  <p className="font-semibold text-emerald-800">Phone Number:</p>
                  <p className="text-sm text-emerald-600">{student.phone_number}</p>
                  <p className={`text-sm ${student.phone_verified ? "text-green-600" : "text-yellow-600"}`}>
                    {student.phone_verified ? "Phone Verified" : "Phone Not Verified"}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-emerald-800">Permanent Address:</p>
                  <p className="text-sm text-emerald-600">{student.permanent_address}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-emerald-800">Father Name:</p>
                  <p className="text-sm text-emerald-600">{student.father_name}</p>
                </div>
                <div>
                  <p className="font-semibold text-emerald-800">Mother Name:</p>
                  <p className="text-sm text-emerald-600">{student.mother_name}</p>
                </div>
                <div>
                  <p className="font-semibold text-emerald-800">Email:</p>
                  <p className="text-sm text-emerald-600">{student.email}</p>
                </div>
                <div>
                  <p className="font-semibold text-emerald-800">Created At:</p>
                  <p className="text-sm text-emerald-600">{student.created_at}</p>
                </div>
                <div>
                  <p className="font-semibold text-emerald-800">Updated At:</p>
                  <p className="text-sm text-emerald-600">{student.updated_at}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
