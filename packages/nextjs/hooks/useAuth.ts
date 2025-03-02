import { useGetUser } from "@/services/api";

export function useAuth() {
  const { data: user, isLoading, isError } = useGetUser();

  return {
    user,
    isLoading,
    isError,
    isAuthenticated: !!user,
    isInstitution: user?.role_id === 3,
    isStudent: user?.role_id === 2,
    isBoard: user?.role_id === 4,
  };
}
