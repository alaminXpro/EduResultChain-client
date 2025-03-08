"use client";

import { useState } from "react";
import { FileText, Loader2 } from "lucide-react";

interface FormData {
  registration_number: string;
  exam_name: "SSC" | "HSC";
  session: string;
  group: "Science" | "Commerce" | "Arts";
  board_id: number;
  institution_id: number;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data: {
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
  };
}

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<ApiResponse | null>(null);

  const [formData, setFormData] = useState<FormData>({
    registration_number: "",
    exam_name: "SSC",
    session: new Date().getFullYear().toString(),
    group: "Science",
    board_id: 2,
    institution_id: 3,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    setResponse(null);

    try {
      const res = await fetch("http://localhost/api/form-fillups", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setResponse(data);
      } else {
        setError(data.message || "An error occurred");
      }
    } catch (err) {
      setError("Failed to submit form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Student Enrollment</h1>
            <div className="flex items-center gap-2 text-white">
              <FileText className="w-5 h-5" />
              <span>Exam Registration</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Registration Number */}
              <div>
                <label htmlFor="registration_number" className="block text-sm font-medium text-gray-700">
                  Registration Number
                </label>
                <input
                  type="text"
                  id="registration_number"
                  name="registration_number"
                  value={formData.registration_number}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  placeholder="Enter registration number"
                />
              </div>

              {/* Exam Name */}
              <div>
                <label htmlFor="exam_name" className="block text-sm font-medium text-gray-700">
                  Exam Name
                </label>
                <select
                  id="exam_name"
                  name="exam_name"
                  value={formData.exam_name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                >
                  <option value="SSC">SSC</option>
                  <option value="HSC">HSC</option>
                </select>
              </div>

              {/* Session */}
              <div>
                <label htmlFor="session" className="block text-sm font-medium text-gray-700">
                  Session Year
                </label>
                <input
                  type="text"
                  id="session"
                  name="session"
                  value={formData.session}
                  onChange={handleInputChange}
                  required
                  pattern="\d{4}"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  placeholder="YYYY"
                />
              </div>

              {/* Group */}
              <div>
                <label htmlFor="group" className="block text-sm font-medium text-gray-700">
                  Group
                </label>
                <select
                  id="group"
                  name="group"
                  value={formData.group}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                >
                  <option value="Science">Science</option>
                  <option value="Commerce">Commerce</option>
                  <option value="Arts">Arts</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                    Submitting...
                  </>
                ) : (
                  "Submit Enrollment"
                )}
              </button>
            </div>
          </form>

          {/* Response Display */}
          {error && (
            <div className="mt-6 p-4 bg-red-50 rounded-md">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          {success && response && (
            <div className="mt-6 p-4 bg-green-50 rounded-md">
              <h3 className="text-lg font-medium text-green-800 mb-2">Enrollment Successful!</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Roll Number:</p>
                  <p className="font-medium">{response.data.roll_number}</p>
                </div>
                <div>
                  <p className="text-gray-600">Student Name:</p>
                  <p className="font-medium">{response.data.student_name}</p>
                </div>
                <div>
                  <p className="text-gray-600">Institution:</p>
                  <p className="font-medium">{response.data.institution_name}</p>
                </div>
                <div>
                  <p className="text-gray-600">Board:</p>
                  <p className="font-medium">{response.data.board_name}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
