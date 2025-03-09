"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AuthLoading from "@/components/layouts/auth-loading";
import { useGetUser } from "@/services/api";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole: number;
}

export default function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const router = useRouter();
  const { data: user, isLoading, isError } = useGetUser();

  useEffect(() => {
    // Only redirect if we're not in a loading state
    if (!isLoading) {
      if (isError || !user) {
        // Immediate redirect for authentication errors
        router.replace("/login");
        return;
      }

      if (user.role_id !== requiredRole) {
        router.replace("/welcome");
        return;
      }
    }
  }, [isLoading, isError, user, requiredRole, router]);

  // Show loading state while checking authentication
  if (isLoading) {
    return <AuthLoading />;
  }

  // Don't render anything if there's an error or no user
  if (isError || !user) {
    return <AuthLoading />;
  }

  // Don't render if role doesn't match
  if (user.role_id !== requiredRole) {
    return <AuthLoading />;
  }

  return <>{children}</>;
}
