"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import RouteLoading from "@/components/layouts/route-loading";
import { useGetUser } from "@/services/api";

export default function WelcomePage() {
  const router = useRouter();
  const { data: user, isLoading, isError } = useGetUser();

  useEffect(() => {
    // Only handle redirects when not loading
    if (!isLoading) {
      if (isError || !user) {
        router.replace("/login");
        return;
      }

      // Route based on role
      switch (user.role_id) {
        case 2:
          router.replace("/student");
          break;
        case 3:
          router.replace("/institution");
          break;
        case 4:
          router.replace("/board");
          break;
        default:
          router.replace("/login");
      }
    }
  }, [user, isLoading, isError, router]);

  // Show loading state
  return <RouteLoading />;
}
