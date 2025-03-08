"use client";

import { useEffect, useState } from "react";
import { FileText } from "lucide-react";

interface FormData {
  roll_number: string;
  registration_number: string;
  exam_name: string;
  session: string;
  group: string;
  board_id: number;
  institution_id: number;
  board_name: string;
  institution_name: string;
  student_name: string;
  phone_number: string;
  created_at: string;
  updated_at: string;
}

export default function Home() {
  const [formData, setFormData] = useState<FormData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost/api/form-fillups")
      .then(res => res.json())
      .then(data => {
        setFormData(data.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-green-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Student Form Records</h1>
            <button className="flex items-center gap-2 bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              <FileText className="w-5 h-5" />
              Form Fillup
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-green-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
                      Student Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
                      Roll Number
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
                      Registration
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
                      Exam
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
                      Session
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
                      Group
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
                      Institution
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
                      Phone
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {formData.map((record, index) => (
                    <tr key={index} className="hover:bg-green-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {record.student_name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.roll_number}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {record.registration_number}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.exam_name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.session}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.group}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.institution_name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.phone_number}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
