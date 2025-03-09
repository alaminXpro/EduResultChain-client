"use client";

import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";
import { format } from "date-fns";

export default function ProfilePage() {
  const { user, isLoading } = useAuth();

  if (isLoading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow">
        {/* Header with avatar */}
        <div className="relative h-32 bg-indigo-600 rounded-t-lg">
          <div className="absolute -bottom-12 left-8">
            {user.avatar ? (
              <Image
                src={user.avatar}
                alt="Profile"
                width={96}
                height={96}
                className="rounded-full border-4 border-white"
              />
            ) : (
              <div className="w-24 h-24 bg-indigo-200 rounded-full border-4 border-white flex items-center justify-center">
                <span className="text-2xl font-bold text-indigo-600">
                  {user.first_name[0]}
                  {user.last_name[0]}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* User Info */}
        <div className="pt-16 px-8 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Basic Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {user.first_name} {user.last_name}
                </h2>
                <p className="text-gray-500">{user.role_id === 1 ? "Institution Admin" : "Student"}</p>
              </div>

              <div className="space-y-4">
                <InfoItem label="Username" value={user.username} />
                <InfoItem label="Email" value={user.email} />
                <InfoItem label="Phone" value={user.phone} />
                <InfoItem label="Address" value={user.address} />
                <InfoItem label="Last Login" value={format(new Date(user.last_login), "PPpp")} />
                <InfoItem label="Account Created" value={format(new Date(user.created_at), "PPpp")} />
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Information</h3>
                <div className="space-y-4">
                  <InfoItem label="Status" value={user.status} />
                  <InfoItem label="Country ID" value={user.country_id?.toString()} />
                  <InfoItem
                    label="Birthday"
                    value={user.birthday ? format(new Date(user.birthday), "PP") : "Not set"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper component for displaying information items
function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-sm font-medium text-gray-500">{label}</dt>
      <dd className="mt-1 text-sm text-gray-900">{value}</dd>
    </div>
  );
}
