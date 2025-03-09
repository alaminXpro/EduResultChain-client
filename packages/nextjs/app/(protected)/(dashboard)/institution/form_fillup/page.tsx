"use client";

import { useEffect, useRef, useState } from "react";
import Dropdown from "@/components/dropdown";
import { useAuth } from "@/hooks/useAuth";

// Adjust the import path as necessary

const FormFillup = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    examinationName: "",
    board: "",
    session: "",
    group: "",
    studentID: "",
    subjects: {
      bangla: "Bangla",
      english: "English",
      math: "Math",
      globalStudies: "Global Studies",
      religion: "Religion",
      ict: "ICT",
      optional1: "",
      optional2: "",
      optional3: "",
      optional4: "",
    },
  });

  const [rollNumber, setRollNumber] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDropdownChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (formData.group === "Science") {
      setFormData(prevFormData => ({
        ...prevFormData,
        subjects: {
          ...prevFormData.subjects,
          optional1: "Physics",
          optional2: "Chemistry",
          optional3: "Biology",
          optional4: "Higher Math",
        },
      }));
    } else if (formData.group === "Commerce") {
      setFormData(prevFormData => ({
        ...prevFormData,
        subjects: {
          ...prevFormData.subjects,
          optional1: "Accounting",
          optional2: "Finance",
          optional3: "Business Entrepreneurship",
          optional4: "Agricultural Studies",
        },
      }));
    } else if (formData.group === "Arts") {
      setFormData(prevFormData => ({
        ...prevFormData,
        subjects: {
          ...prevFormData.subjects,
          optional1: "Islam & Moral Education",
          optional2: "Home Science",
          optional3: "History",
          optional4: "Bangladesh & World",
        },
      }));
    } else {
      setFormData(prevFormData => ({
        ...prevFormData,
        subjects: {
          ...prevFormData.subjects,
          optional1: "",
          optional2: "",
          optional3: "",
          optional4: "",
        },
      }));
    }
  }, [formData.group]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (window.confirm("Do you want to submit the form?")) {
      const generatedRollNumber = Math.floor(100000 + Math.random() * 900000).toString();
      const generatedRegistrationNumber = Math.floor(1000000000 + Math.random() * 9000000000).toString();
      setRollNumber(generatedRollNumber);
      setRegistrationNumber(generatedRegistrationNumber);
      console.log("Form Data:", formData);
      console.log("Generated Roll Number:", generatedRollNumber);
      console.log("Generated Registration Number:", generatedRegistrationNumber);
      // You can add further logic to handle the form submission, such as sending the data to a server
    }
  };

  const examinationDropdownRef = useRef(null);
  const boardDropdownRef = useRef(null);
  const sessionDropdownRef = useRef(null);
  const groupDropdownRef = useRef(null);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Welcome, {user?.first_name} {user?.last_name}
      </h1>
      <h2 className="text-xl font-semibold mb-4">Student Academic Record Info</h2>

      <div className="mb-4">
        <label className="block text-gray-700">Examination Name</label>
        <Dropdown
          ref={examinationDropdownRef}
          button={<span>{formData.examinationName || "Select Examination"}</span>}
          btnClassName="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          placement="bottom-start"
        >
          <div className="bg-white border border-gray-300 rounded shadow-lg">
            <div
              className="p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleDropdownChange("examinationName", "SSC")}
            >
              Secondary School Certificate (SSC)
            </div>
            <div
              className="p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleDropdownChange("examinationName", "HSC")}
            >
              Higher Secondary Certificate (HSC)
            </div>
          </div>
        </Dropdown>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Board</label>
        <Dropdown
          ref={boardDropdownRef}
          button={<span>{formData.board || "Select Board"}</span>}
          btnClassName="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          placement="bottom-start"
        >
          <div className="bg-white border border-gray-300 rounded shadow-lg">
            {["Dhaka", "Chittagong", "Rajshahi", "Khulna", "Barisal", "Sylhet", "Comilla", "Jessore", "Mymensingh"].map(
              board => (
                <div
                  key={board}
                  className="p-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleDropdownChange("board", board)}
                >
                  {board}
                </div>
              ),
            )}
          </div>
        </Dropdown>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Session</label>
        <Dropdown
          ref={sessionDropdownRef}
          button={<span>{formData.session || "Select Session"}</span>}
          btnClassName="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          placement="bottom-start"
        >
          <div className="bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto">
            {Array.from({ length: new Date().getFullYear() - 1999 }, (_, i) => 2000 + i).map(year => (
              <div
                key={year}
                className="p-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleDropdownChange("session", year.toString())}
              >
                {year}
              </div>
            ))}
          </div>
        </Dropdown>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Group</label>
        <Dropdown
          ref={groupDropdownRef}
          button={<span>{formData.group || "Select Group"}</span>}
          btnClassName="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          placement="bottom-start"
        >
          <div className="bg-white border border-gray-300 rounded shadow-lg">
            <div
              className="p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleDropdownChange("group", "Science")}
            >
              Science
            </div>
            <div className="p-2 cursor-pointer hover:bg-gray-100" onClick={() => handleDropdownChange("group", "Arts")}>
              Arts
            </div>
            <div
              className="p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleDropdownChange("group", "Commerce")}
            >
              Commerce
            </div>
          </div>
        </Dropdown>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Student ID</label>
        <input
          type="text"
          name="studentID"
          value={formData.studentID}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <h3 className="text-lg font-semibold mb-4">Subjects</h3>
      <div className="mb-4">
        <label className="block text-gray-700">Bangla</label>
        <input
          type="text"
          name="bangla"
          value={formData.subjects.bangla}
          readOnly
          className="w-full p-2 border border-gray-300 rounded bg-green-100 font-bold"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">English</label>
        <input
          type="text"
          name="english"
          value={formData.subjects.english}
          readOnly
          className="w-full p-2 border border-gray-300 rounded bg-green-100 font-bold"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Math</label>
        <input
          type="text"
          name="math"
          value={formData.subjects.math}
          readOnly
          className="w-full p-2 border border-gray-300 rounded bg-green-100 font-bold"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Global Studies</label>
        <input
          type="text"
          name="globalStudies"
          value={formData.subjects.globalStudies}
          readOnly
          className="w-full p-2 border border-gray-300 rounded bg-green-100 font-bold"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Religion</label>
        <input
          type="text"
          name="religion"
          value={formData.subjects.religion}
          readOnly
          className="w-full p-2 border border-gray-300 rounded bg-green-100 font-bold"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">ICT</label>
        <input
          type="text"
          name="ict"
          value={formData.subjects.ict}
          readOnly
          className="w-full p-2 border border-gray-300 rounded bg-green-100 font-bold"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Optional Subject 1</label>
        <input
          type="text"
          name="optional1"
          value={formData.subjects.optional1}
          readOnly
          className="w-full p-2 border border-gray-300 rounded bg-blue-100 font-bold"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Optional Subject 2</label>
        <input
          type="text"
          name="optional2"
          value={formData.subjects.optional2}
          readOnly
          className="w-full p-2 border border-gray-300 rounded bg-blue-100 font-bold"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Optional Subject 3</label>
        <input
          type="text"
          name="optional3"
          value={formData.subjects.optional3}
          readOnly
          className="w-full p-2 border border-gray-300 rounded bg-blue-100 font-bold"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Optional Subject 4</label>
        <input
          type="text"
          name="optional4"
          value={formData.subjects.optional4}
          readOnly
          className="w-full p-2 border border-gray-300 rounded bg-blue-100 font-bold"
        />
      </div>

      <button
        type="submit"
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-700 transition duration-300"
      >
        Submit
      </button>

      {rollNumber && registrationNumber && (
        <div className="mt-6">
          <div className="mb-4 p-4 border border-gray-300 rounded bg-yellow-100 text-center">
            <h3 className="text-xl font-bold">Roll Number</h3>
            <p className="text-2xl font-bold">{rollNumber}</p>
          </div>
          <div className="p-4 border border-gray-300 rounded bg-red-100 text-center">
            <h3 className="text-xl font-bold">Registration Number</h3>
            <p className="text-2xl font-bold">{registrationNumber}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormFillup;
