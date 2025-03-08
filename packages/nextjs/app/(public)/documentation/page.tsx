"use client";

import { useState } from "react";
import Image from "next/image";
import { Book, Code, FileText, Server, Settings, ShieldCheck, Users } from "lucide-react";

export default function Documentation() {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      icon: <Book className="w-6 h-6" />,
      title: "Overview",
      content: [
        "EduResultChain is a blockchain-based platform for secure academic record management.",
        "It ensures transparency, security, and immutability of academic credentials.",
        "This documentation provides guidelines for integrating and using EduResultChain effectively.",
      ],
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Getting Started",
      content: [
        "Developers can access EduResultChain through our API endpoints.",
        "Integration requires authentication via API keys provided upon registration.",
        "Refer to our API documentation for detailed instructions on implementation.",
      ],
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Architecture",
      content: [
        "EduResultChain operates on a decentralized ledger ensuring data integrity.",
        "It utilizes smart contracts for record verification and access control.",
        "The system supports multiple stakeholders including students, institutions, and employers.",
      ],
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Security & Compliance",
      content: [
        "EduResultChain follows industry standards for data protection and encryption.",
        "Smart contract auditing ensures the integrity of stored records.",
        "Compliance with educational and privacy regulations is a key priority.",
      ],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User Roles & Permissions",
      content: [
        "EduResultChain supports multiple user roles including students, institutions, and employers.",
        "Permissions are defined through smart contracts, ensuring access control and data privacy.",
        "Users can request and grant access to academic records securely and efficiently.",
      ],
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "API Integration",
      content: [
        "EduResultChain provides a RESTful API for seamless integration with existing systems.",
        "Authentication is handled via API tokens and OAuth 2.0 for secure communication.",
        "Developers can retrieve, verify, and store academic records using standardized endpoints.",
      ],
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "FAQs & Support",
      content: [
        "Find answers to commonly asked questions about EduResultChain.",
        "Access troubleshooting guides and developer support forums.",
        "For direct assistance, contact our support team via email or live chat.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image src="/logo.png" alt="Logo" width={150} height={120} className="rounded-lg" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 sm:text-5xl">Documentation</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
