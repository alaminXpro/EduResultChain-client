"use client";

import { useState } from "react";
import Image from "next/image";
import { Bell, Book, Cookie, Link, Mail, Server, Share2, Shield, UserCog } from "lucide-react";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Information We Collect",
      content: [
        "Personal Information: Name, email address, and other identifiers when you register.",
        "Academic Records: Data related to academic performance, stored securely on the blockchain.",
        "Usage Data: IP address, device type, browser type, and interactions with our platform.",
        "Personal Information: Name, email address, and other identifiers when you register.",
        "Communication Data: Messages sent to customer support or feedback submitted.",
        "Log Files: Automatically collected system logs for security and troubleshooting.",
        "Geolocation Data: Approximate location based on IP address for regulatory compliance.",
        "Third-Party Data: Information received from educational institutions with user consent.",
        "Behavioral Data: User preferences and engagement with platform features.",
      ],
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: "How We Use Your Information",
      content: [
        "Provide and Improve Services: Ensure seamless access to platform features.",
        "Authenticate and Secure Access: Verify users and prevent unauthorized access.",
        "Maintain Academic Integrity: Prevent alterations to blockchain-verified records.",
        "Facilitate Verification: Enable institutions to validate academic credentials.",
        "Enhance User Experience: Personalize content based on preferences.",
        "Prevent Fraud and Abuse: Detect and mitigate security threats.",
        "Comply with Legal Obligations: Meet regulatory requirements when necessary.",
        "Analyze Usage Trends: Improve platform performance and features.",
        "Enable Customer Support: Respond to inquiries and resolve issues.",
        "Improve Security Measures: Monitor and enhance cybersecurity protocols.",
        "We do not use your personal data for marketing purposes or share it with advertisers.",
      ],
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Data Storage & Security",
      content: [
        "Blockchain Security: Academic records are stored on a decentralized blockchain.",
        "Encryption: Personal information is encrypted before storage.",
        "Access Controls: Only authorized personnel can access restricted data.",
        "Regular Security Audits: Periodic evaluations to identify vulnerabilities.",
        "Multi-Factor Authentication (MFA): Added security for user accounts.",
        "Automated Threat Detection: AI-driven monitoring for suspicious activities.",
        "Backup Systems: Regular data backups to prevent data loss.",
        "Data Minimization: Collecting only necessary information for service delivery.",
        "Compliance with Standards: Adhering to GDPR, CCPA, and other regulations.",
        "Incident Response Plan: Procedures for managing data breaches effectively.",
      ],
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Data Sharing & Disclosure",
      content: [
        "Legal Compliance: If required by law, we may disclose your data to authorities.",
        "Educational Verification: Sharing academic records with institutions or employers (with user consent).",
        "Service Providers: Secure partnerships for data storage, analytics, and technical support.",
        "Security Investigations: Collaborating with authorities to prevent cyber threats.",
        "Regulatory Requirements: Adhering to legal mandates for educational institutions.",
        "onsent-Based Sharing: Users may authorize sharing of specific data.",
        "System Maintenance: Limited access for IT and cybersecurity specialists.",
        "Emergency Situations: Responding to risks affecting public safety.",
        "Auditing and Compliance: Providing information for legal and financial audits.",
        "Mergers and Acquisitions: Data transfer in case of business restructuring.",
      ],
    },
    {
      icon: <UserCog className="w-6 h-6" />,
      title: "Your Rights & Control",
      content: [
        "Access & Correction: You can view and update your personal information at any time.",
        "Data Portability: Request a copy of your data in a structured format.",
        "Account Deletion: Request account deletion, except for blockchain-verified records.",
        "Withdraw Consent: Revoke permissions for optional data collection.",
        "Restrict Processing: Limit certain uses of your personal data.",
        "Object to Processing: Challenge data usage practices based on legal grounds.",
        "Review Privacy Settings: Adjust privacy preferences within account settings.",
        "File Complaints: Report concerns to regulatory authorities if necessary.",
        "Automated Decision Review: Request human intervention for automated processes.",
        "Security Alerts: Enable notifications for unauthorized account activity.",
      ],
    },
    {
      icon: <Cookie className="w-6 h-6" />,
      title: "Cookies & Tracking",
      content: [
        "We use cookies and similar tracking technologies to improve user experience and analyze usage trends.",
        "Enhance User Experience: Remember user preferences for convenience.",
        "Analyze Platform Usage: Collect insights to improve services.",
        "Personalize Content: Tailor features based on user interactions.",
        "Ensure Security: Detect and prevent fraudulent activities.",
        "Optimize Performance: Improve website speed and efficiency.",
        "Maintain Authentication Sessions: Keep users securely logged in.",
        "Detect Bugs and Errors: Identify and resolve technical issues.",
        "Enable Third-Party Integrations: Support external tools and services.",
        "Improve Accessibility Features: Adapt UI elements for usability.",
        "Offer Opt-Out Controls: Allow users to manage cookie preferences.",
        "You can manage your cookie settings through your browser.",
      ],
    },
    {
      icon: <Link className="w-6 h-6" />,
      title: "Third-Party Links",
      content: [
        "EduResultChain may contain links to third-party websites. We are not responsible for:",
        "Their Privacy Policies: Review external site policies before sharing data.",
        "Content Accuracy: We do not control the reliability of third-party information.",
        "Security Practices: External websites may have different security measures.",
        "Data Collection Methods: They may collect data differently than we do.",
        "Advertising & Marketing: Third-party sites may track interactions.",
        "User Experience: We cannot guarantee site performance or usability.",
        "Cookies & Tracking: Third parties may use tracking technologies beyond our control.",
        "Service Terms: Their terms of use may differ from ours.",
        "Legal Compliance: We are not liable for their regulatory adherence.",
        "User Interactions: Engaging with third-party services is at your own risk.",
      ],
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: " Changes to This Privacy Policy",
      content: [
        "We may update this Privacy Policy from time to time. Key updates include:",
        "Improved Security Practices: Adapting to new cybersecurity threats.",
        "Regulatory Compliance Updates: Aligning with legal changes.",
        "Enhanced User Rights Protections: Strengthening data control options.",
        "Policy Transparency: Providing clearer explanations for data handling.",
        "New Service Features: Updating privacy terms for additional functionalities.",
        "Technology Integration: Adapting policies to evolving digital tools.",
        "Feedback-Based Changes: Refining policies based on user input.",
        "Improved Consent Mechanisms: Strengthening opt-in/opt-out features.",
        "Accessibility Enhancements: Making policies easier to understand.",
        "Clearer Data Sharing Terms: Providing more transparency on disclosures.",
        "Any changes will be communicated through our platform, and your continued use of EduResultChain signifies your acceptance of the updated policy.",
      ],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Contact Us",
      content: [
        "If you have any questions or concerns about this Privacy Policy, please contact us at ajjim566@gmail.com",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image src="/logo.png" alt="Logo" width={150} height={120} className="rounded-lg" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 sm:text-5xl">Privacy Policy</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Welcome to EduResultChain! Your privacy is important to us. This Privacy Policy outlines how we collect,
            use, store, and protect your personal information when you use our platform. By accessing or using
            EduResultChain, you agree to the terms described in this policy.
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

        {/* Agreement Notice */}
        <div className="mt-16 text-center">
          <p className="text-gray-600">By using EduResultChain, you agree to this Privacy Policy.</p>
        </div>
      </main>
    </div>
  );
}
