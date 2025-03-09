import { useGetUser } from "@/services/api";

export function useAuth() {
  const { data: user, isLoading, isError } = useGetUser();

  return {
    user,
    isLoading,
    isError,
    isAuthenticated: !!user,
    isAdmin: user?.role_id === 1,
    isBoard: user?.role_id === 2,
    isInstitution: user?.role_id === 3,
    isStudent: user?.role_id === 4,
  };
}
