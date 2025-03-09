import React from "react";
import { Toaster } from "react-hot-toast";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen text-black dark:text-white-dark">
      {children}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 3000 },
        }}
      />
    </div>
  );
};

export default AuthLayout;
