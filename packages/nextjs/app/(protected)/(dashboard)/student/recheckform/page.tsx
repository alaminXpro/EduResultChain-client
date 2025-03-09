"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

const subjects = [
  { name: "Bangla", code: "BAN", marks: 65 },
  { name: "English", code: "ENG", marks: 70 },
  { name: "Mathematics", code: "MATH", marks: 55 },
  { name: "Physics", code: "PHY", marks: 45 },
  { name: "Chemistry", code: "CHEM", marks: 60 },
];

const RECHECK_FEE = 200;
const MAX_RECHECK_SUBJECTS = 3;

const StudentRecheckForm = () => {
  const { user } = useAuth();

  // State to track selected subjects for rechecking
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [paymentMethod, setPaymentMethod] = useState("");

  // Toggle subject selection for rechecking
  const toggleSubjectSelection = (subjectCode: string) => {
    setSelectedSubjects(prev => {
      if (prev.includes(subjectCode)) {
        return prev.filter(code => code !== subjectCode);
      } else if (prev.length < MAX_RECHECK_SUBJECTS) {
        return [...prev, subjectCode];
      } else {
        alert("You can only apply for recheck in a maximum of 3 subjects.");
        return prev;
      }
    });
  };

  // Calculate total fee based on selected subjects
  const calculateTotalFee = () => selectedSubjects.length * RECHECK_FEE;

  // Handle form submission
  const submitRecheckApplication = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedSubjects.length === 0) {
      alert("Please select at least one subject for rechecking.");
      return;
    }
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    console.log("Recheck Application Submitted:", {
      student: user,
      selectedSubjects,
      totalAmount: calculateTotalFee(),
      paymentMethod,
    });

    alert("Your recheck application has been submitted successfully!");
  };

  return (
    <div className="p-6 bg-white min-h-screen text-black">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6 text-center bg-black text-white p-4 rounded-lg shadow-lg">
        Apply for Recheck
      </h1>

      {/* Student Information */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
        <p className="text-lg font-semibold">
          📌 Name: <span className="text-blue-600">John Doe</span>
        </p>
        <p className="text-lg font-semibold">
          📌 Roll Number: <span className="text-green-600">123456</span>
        </p>
        <p className="text-lg font-semibold">
          📌 Registration Number: <span className="text-indigo-600">78901234</span>
        </p>
        <p className="text-lg font-semibold">
          📌 Session: <span className="text-purple-600">2023-2024</span>
        </p>
        <p className="text-lg font-semibold">
          📌 Group: <span className="text-red-600">Science</span>
        </p>
        <p className="text-lg font-semibold">
          📌 Board: <span className="text-teal-600">Dhaka</span>
        </p>
      </div>

      {/* Recheck Form */}
      <form onSubmit={submitRecheckApplication} className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Subjects & Recheck Options</h2>

        <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-200 text-black">
              <th className="p-3 text-left">Subject</th>
              <th className="p-3 text-left">Marks</th>
              <th className="p-3 text-center">Apply for Recheck</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map(subject => (
              <tr key={subject.code} className="border-b hover:bg-gray-100 transition">
                <td className="p-3">{subject.name}</td>
                <td className="p-3">{subject.marks}</td>
                <td className="p-3 text-center">
                  <input
                    type="checkbox"
                    checked={selectedSubjects.includes(subject.code)}
                    onChange={() => toggleSubjectSelection(subject.code)}
                    className="h-5 w-5 accent-blue-500"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Total Amount */}
        <div className="mt-6 text-lg font-semibold">
          Total Amount: <span className="text-red-600">{calculateTotalFee()} Taka</span>
        </div>

        {/* Payment Options */}
        <h2 className="text-2xl font-bold mt-6 text-gray-700">Select Payment Method</h2>
        <div className="mt-3 flex flex-col sm:flex-row gap-4">
          <label className="flex items-center bg-white p-3 rounded-lg shadow cursor-pointer w-full sm:w-1/3">
            <input
              type="radio"
              name="paymentMethod"
              value="Bkash"
              onChange={e => setPaymentMethod(e.target.value)}
              className="h-5 w-5 accent-blue-500 mr-2"
            />
            Bkash
          </label>
          <label className="flex items-center bg-white p-3 rounded-lg shadow cursor-pointer w-full sm:w-1/3">
            <input
              type="radio"
              name="paymentMethod"
              value="Nagad"
              onChange={e => setPaymentMethod(e.target.value)}
              className="h-5 w-5 accent-blue-500 mr-2"
            />
            Nagad
          </label>
          <label className="flex items-center bg-white p-3 rounded-lg shadow cursor-pointer w-full sm:w-1/3">
            <input
              type="radio"
              name="paymentMethod"
              value="Rocket"
              onChange={e => setPaymentMethod(e.target.value)}
              className="h-5 w-5 accent-blue-500 mr-2"
            />
            Rocket
          </label>
        </div>

        {/* Submit Button */}
        <div className="mt-6 flex justify-center">
          <button
            type="submit"
            className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-600 transition shadow-lg"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentRecheckForm;
