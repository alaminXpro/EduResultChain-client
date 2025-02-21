"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import RouteLoading from "@/components/layouts/route-loading";
import { useGetUser } from "@/services/api";

export default function WelcomePage() {
  const router = useRouter();
  const { data: user, isLoading, isError } = useGetUser();

  useEffect(() => {
    if (!isLoading) {
      if (isError || !user) {
        router.push("/login");
        return;
      }

      // Route based on role
      switch (user.role_id) {
        case 1:
          router.push("/institution");
          break;
        case 2:
          router.push("/student");
          break;
        default:
          router.push("/login");
      }
    }
  }, [user, isLoading, isError, router]);

  // Show loading state while checking user
  return <RouteLoading />;
}
