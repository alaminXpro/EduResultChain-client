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
    if (!isLoading) {
      if (isError || !user) {
        router.push("/login");
        return;
      }

      if (user.role_id !== requiredRole) {
        router.push("/welcome");
        return;
      }
    }
  }, [isLoading, isError, user, requiredRole, router]);

  // Don't render anything until we've verified the user
  if (isLoading || !user || user.role_id !== requiredRole) {
    return <AuthLoading />;
  }

  return <>{children}</>;
}
