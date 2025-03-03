"use client";

import { useAuth } from "@/hooks/useAuth";

const BoardDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="p-6 bg-white min-h-screen text-black">
      <h1 className="text-5xl font-extrabold mb-6 text-center bg-black text-white p-4 rounded-lg shadow-lg">
        Dhaka Board Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Students */}
        <div className="bg-blue-100 p-6 shadow-lg rounded-lg text-center border border-blue-300">
          <h2 className="text-xl font-semibold">Total Students</h2>
          <p className="text-5xl font-bold">25,000</p>
        </div>

        {/* Total Institutions */}
        <div className="bg-blue-100 p-6 shadow-lg rounded-lg text-center border border-blue-300">
          <h2 className="text-xl font-semibold">Total Institutions</h2>
          <p className="text-5xl font-bold">500</p>
        </div>

        {/* Result Statistics */}
        <div className="bg-blue-100 p-6 shadow-lg rounded-lg text-center border border-blue-300">
          <h2 className="text-xl font-semibold">Result Statistics</h2>
          <p className="text-5xl font-bold">Pass Rate: 85%</p>
        </div>

        {/* Placeholder for Future Stats */}
        <div className="bg-blue-100 p-6 shadow-lg rounded-lg text-center border border-blue-300">
          <h2 className="text-xl font-semibold">Other Info</h2>
          <p className="text-5xl font-bold">Coming Soon</p>
        </div>
      </div>
    </div>
  );
};

export default BoardDashboard;
