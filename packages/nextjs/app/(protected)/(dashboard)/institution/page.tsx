"use client";

import { useAuth } from "@/hooks/useAuth";

const InstitutionDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Welcome, {user?.first_name} {user?.last_name}
      </h1>
      {/* Institution dashboard content */}
    </div>
  );
};

export default InstitutionDashboard;
