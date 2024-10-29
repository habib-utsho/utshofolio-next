import { getDashboardStats } from "@/services/stats";
import { useQuery } from "@tanstack/react-query";

export const useGetDashboardStats = () => {
  return useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      return await getDashboardStats();
    },
  });
};
