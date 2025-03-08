"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle, Layers, ShieldCheck, Target } from "lucide-react";

export default function Motivation() {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Our Mission",
      content: [
        "EduResultChain is dedicated to revolutionizing academic record management through blockchain technology.",
        "We aim to provide a secure, transparent, and tamper-proof system for storing and verifying academic credentials.",
        "By leveraging decentralization, we empower students and institutions with immutable and verifiable academic records.",
      ],
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Security & Transparency",
      content: [
        "Blockchain ensures that academic records cannot be altered or tampered with, maintaining integrity and trust.",
        "Students have full ownership and control over their academic credentials, eliminating reliance on intermediaries.",
        "Institutions and employers can instantly verify records, reducing fraud and streamlining the verification process.",
      ],
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Decentralized Innovation",
      content: [
        "Traditional academic record-keeping faces challenges such as data loss, unauthorized modifications, and inefficiencies.",
        "EduResultChain overcomes these challenges by decentralizing records, ensuring permanence and reliability.",
        "With a blockchain-based system, academic data is distributed across a secure network, preventing unauthorized access and loss.",
      ],
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Empowering the Future",
      content: [
        "EduResultChain is more than just a record-keeping platform; it’s a step toward a digital transformation in education.",
        "We believe in a future where students seamlessly manage and share their credentials globally, fostering trust and efficiency.",
        "Our goal is to integrate advanced security and accessibility, making academic verification effortless for everyone.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image src="/logo.png" alt="EduResultChain Logo" width={150} height={120} className="rounded-lg" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 sm:text-5xl">Introducing our Intensions in Focus</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            EduResultChain is committed to transforming the academic record-keeping system through blockchain, ensuring
            security, transparency, and ease of verification.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Main Points */}
          <div className="md:col-span-1 space-y-4">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeSection === index
                    ? "bg-green-800 text-white shadow-lg transform scale-105"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
                onClick={() => setActiveSection(index)}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${activeSection === index ? "bg-green-700" : "bg-green-100"}`}>
                    {section.icon}
                  </div>
                  <h3 className="font-semibold">{section.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Details */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-green-800">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-lg">{sections[activeSection].icon}</div>
                <h3 className="ml-4 text-2xl font-bold text-green-800">{sections[activeSection].title}</h3>
              </div>
              <div className="space-y-4">
                {sections[activeSection].content.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-green-800 flex-shrink-0" />
                    <p className="text-gray-700 text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
