import {
  createExperience,
  deleteExperience,
  getAllExperiences,
  getSingleExperience,
  updateExperience,
} from "@/services/experience";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";

// Hook to create an experience
export const useCreateExperience = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["experience"],
    mutationFn: async (payload) => await createExperience(payload),
    onSuccess(data) {
      if (data?.success) {
        queryClient.invalidateQueries({ queryKey: ["experience"] });
      } else {
        message.error(data?.message || "Failed to create experience!");
      }
    },
    onError(error) {
      message.error(error?.message || "Failed to create experience!");
    },
  });
};

// Hook to update an experience
export const useUpdateExperience = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["experience"],
    mutationFn: async (payload) => await updateExperience(payload),
    onSuccess(data) {
      if (data?.success) {
        queryClient.invalidateQueries({ queryKey: ["experience"] });
      } else {
        message.error(data?.message || "Failed to update experience!");
      }
    },
    onError(error) {
      message.error(error?.message || "Failed to update experience!");
    },
  });
};

// Hook to get all experiences
export const useGetAllExperiences = (query = []) => {
  return useQuery({
    queryKey: ["experience", ...query.map(({ name, value }) => [name, value])],
    queryFn: async () => {
      return await getAllExperiences(query);
    },
  });
};

// Hook to get a single experience
export const useGetSingleExperience = (id) => {
  return useQuery({
    queryKey: ["experience", id],
    queryFn: async () => {
      return await getSingleExperience(id);
    },
  });
};

// Hook to delete an experience
export const useDeleteExperience = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["experience"],
    mutationFn: async (id) => await deleteExperience(id),
    onSuccess(data) {
      if (data?.success) {
        message.success(data?.message || "Experience deleted successfully!");
        queryClient.invalidateQueries({ queryKey: ["experience"] });
      } else {
        message.error(data?.message || "Failed to delete experience!");
      }
    },
    onError(error) {
      message.error(error?.message || "Failed to delete experience!");
    },
  });
};
