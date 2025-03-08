"use client";

import { useState } from "react";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    permanent_address: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email || null,
      phone_number: formData.phone_number,
      permanent_address: formData.permanent_address,
      date_of_birth: "2000-01-01", // Example fixed date, you may replace it with an input field
      father_name: "Unknown", // Placeholder, replace with actual field if needed
      mother_name: "Unknown",
      image: "", // Optional, left empty
    };

    try {
      const response = await fetch("http://localhost/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone_number: "",
          permanent_address: "",
          message: "",
        });
      } else {
        toast.error(data.message || "Something went wrong.");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-emerald-600 py-6">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-emerald-600 font-bold text-xl">Logo</span>
            </div>
            <h1 className="text-white text-2xl font-bold ml-4">EduResultChain</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions? We had love to hear from you. Send us a message and we will respond as soon as possible.
            </p>

            <div className="space-y-6">
              <ContactInfo icon={MapPin} title="Our Location" text="123 Business Avenue, New York, NY 10001" />
              <ContactInfo icon={Phone} title="Phone Number" text="+1 (555) 123-4567" />
              <ContactInfo icon={Mail} title="Email Address" text="contact@company.com" />
              <ContactInfo icon={Clock} title="Business Hours" text="Monday - Friday: 9 AM - 5 PM" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <InputField label="First Name" id="first_name" value={formData.first_name} setFormData={setFormData} />
              <InputField label="Last Name" id="last_name" value={formData.last_name} setFormData={setFormData} />
              <InputField
                label="Email Address"
                id="email"
                type="email"
                value={formData.email}
                setFormData={setFormData}
              />
              <InputField
                label="Phone Number"
                id="phone_number"
                type="tel"
                value={formData.phone_number}
                setFormData={setFormData}
              />
              <InputField
                label="Address"
                id="permanent_address"
                value={formData.permanent_address}
                setFormData={setFormData}
              />
              <TextareaField label="Message" id="message" value={formData.message} setFormData={setFormData} />

              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-3 px-6 rounded-md hover:bg-emerald-700 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
                disabled={loading}
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

/* Component for Contact Information */
function ContactInfo({ icon: Icon, title, text }: { icon: any; title: string; text: string }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="bg-emerald-100 p-3 rounded-full">
        <Icon className="h-6 w-6 text-emerald-600" />
      </div>
      <div>
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
}

/* Component for Input Fields */
function InputField({
  label,
  id,
  type = "text",
  value,
  setFormData,
}: {
  label: string;
  id: string;
  type?: string;
  value: string;
  setFormData: any;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={e => setFormData((prev: any) => ({ ...prev, [id]: e.target.value }))}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
        required
      />
    </div>
  );
}

/* Component for Textarea */
function TextareaField({
  label,
  id,
  value,
  setFormData,
}: {
  label: string;
  id: string;
  value: string;
  setFormData: any;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <textarea
        id={id}
        rows={4}
        value={value}
        onChange={e => setFormData((prev: any) => ({ ...prev, [id]: e.target.value }))}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
        required
      ></textarea>
    </div>
  );
}
