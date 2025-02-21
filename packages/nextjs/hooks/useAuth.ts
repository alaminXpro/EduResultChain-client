import { useGetUser } from "@/services/api";

export function useAuth() {
  const { data: user, isLoading, isError } = useGetUser();

  return {
    user,
    isLoading,
    isError,
    isAuthenticated: !!user,
    isInstitution: user?.role_id === 1,
    isStudent: user?.role_id === 2,
  };
}
