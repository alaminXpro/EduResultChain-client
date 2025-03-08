"use client";

import { useState } from "react";
import Image from "next/image";
import { Bell, FileText, Gavel, Lock, Mail, Server, Share2, Shield, UserCog } from "lucide-react";

export default function TermsConditions() {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Introduction",
      content: [
        "Welcome to EduResultChain! These Terms and Conditions govern your use of our blockchain-powered academic record management platform.",
        "By accessing or using EduResultChain, you agree to comply with these terms.",
        "If you do not agree, please refrain from using our services.",
      ],
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "User Eligibility",
      content: [
        "You must be at least 18 years old or have legal parental/guardian consent to use EduResultChain.",
        "Educational institutions using EduResultChain must be legally recognized entities.",
        "Users must provide accurate, up-to-date information during registration.",
      ],
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Use of Services",
      content: [
        "Users can store, access, and verify academic records securely.",
        "EduResultChain does not alter or delete blockchain-stored records once verified.",
        "Users are responsible for maintaining the confidentiality of their credentials and access keys.",
      ],
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Data Ownership & Privacy",
      content: [
        "Users retain ownership of their personal and academic data.",
        "Records stored on the blockchain are immutable and cannot be modified or deleted.",
        "EduResultChain ensures compliance with data protection laws (GDPR, CCPA, etc.).",
      ],
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Data Sharing & Disclosure",
      content: [
        "Legal Compliance: If required by law, we may disclose your data to authorities.",
        "Educational Verification: Sharing academic records with institutions or employers (with user consent).",
        "Service Providers: Secure partnerships for data storage, analytics, and technical support.",
      ],
    },
    {
      icon: <UserCog className="w-6 h-6" />,
      title: "Your Rights & Control",
      content: [
        "Access & Correction: You can view and update your personal information at any time.",
        "Account Deletion: Request account deletion, except for blockchain-verified records.",
        "Withdraw Consent: Revoke permissions for optional data collection.",
      ],
    },
    {
      icon: <Gavel className="w-6 h-6" />,
      title: "Limitation of Liability",
      content: [
        "EduResultChain provides its services 'as is' without warranties of any kind.",
        "We are not responsible for any data loss, system errors, or unauthorized access due to external attacks.",
        "Users assume all risks associated with blockchain-based record storage.",
      ],
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Changes to Terms & Conditions",
      content: [
        "EduResultChain reserves the right to update these terms at any time.",
        "Continued use of the platform after changes constitutes acceptance of the updated terms.",
      ],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Contact Us",
      content: ["For any inquiries, please contact us at ajjim566@gmail.com."],
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
          <h2 className="text-4xl font-bold text-green-800 sm:text-5xl">Terms & Conditions</h2>
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
