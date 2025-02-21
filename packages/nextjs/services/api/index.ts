import { instance, instanceWithoutInterceptors } from "@/utils/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Cookies from "universal-cookie";

interface LoginParams {
  username: string;
  password: string;
  device_name: string;
}

interface LoginResponse {
  token: string;
}

interface TwoFactorOptions {
  option1: number;
  option2: string;
}

interface User {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  phone: string;
  avatar: string;
  address: string;
  country_id: number;
  role_id: number;
  status: string;
  birthday: string;
  last_login: string;
  two_factor_country_code: number;
  two_factor_phone: string;
  two_factor_options: TwoFactorOptions;
  created_at: string;
  updated_at: string;
}

interface ApiResponse<T> {
  data: T;
}

interface ApiError extends Error {
  response?: {
    data: {
      message: string;
    };
  };
}

export const useLogin = () => {
  return useMutation<LoginResponse, ApiError, LoginParams>({
    mutationFn: async (loginParams: LoginParams) => {
      const response = await instanceWithoutInterceptors.post<LoginResponse>("login", loginParams);
      const cookies = new Cookies();
      cookies.set("token", response.data.token);
      return response.data;
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error>({
    mutationFn: async () => {
      await instance.post("logout");
      queryClient.invalidateQueries({ queryKey: ["me"] });
      const cookies = new Cookies();
      cookies.remove("token");
    },
  });
};

export const useGetUser = () => {
  const queryClient = useQueryClient();

  return useQuery<User, Error>({
    queryKey: ["me"],
    queryFn: async () => {
      try {
        const response = await instance.get<ApiResponse<User>>("me");
        return response.data.data;
      } catch (error) {
        queryClient.invalidateQueries({ queryKey: ["me"] });
        throw error;
      }
    },
    retry: false, // Don't retry on failure
    refetchOnWindowFocus: true, // Refetch when window regains focus
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
