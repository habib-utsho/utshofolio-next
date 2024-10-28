import {
  createEducation,
  deleteEducation,
  getAllEducation,
  getSingleEducation,
  updateEducation,
} from "@/services/education";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";

// Hook to create an education record
export const useCreateEducation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["education"],
    mutationFn: async (payload) => await createEducation(payload),
    onSuccess(data) {
      if (data?.success) {
        queryClient.invalidateQueries({ queryKey: ["education"] });
      } else {
        message.error(data?.message || "Failed to create education record!");
      }
    },
    onError(error) {
      message.error(error?.message || "Failed to create education record!");
    },
  });
};

// Hook to update an education record
export const useUpdateEducation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["education"],
    mutationFn: async (payload) => await updateEducation(payload),
    onSuccess(data) {
      if (data?.success) {
        queryClient.invalidateQueries({ queryKey: ["education"] });
      } else {
        message.error(data?.message || "Failed to update education record!");
      }
    },
    onError(error) {
      message.error(error?.message || "Failed to update education record!");
    },
  });
};

// Hook to get all education records
export const useGetAllEducation = (query = []) => {
  return useQuery({
    queryKey: ["education", ...query.map(({ name, value }) => [name, value])],
    queryFn: async () => {
      return await getAllEducation(query);
    },
  });
};

// Hook to get a single education record
export const useGetSingleEducation = (id) => {
  return useQuery({
    queryKey: ["education", id],
    queryFn: async () => {
      return await getSingleEducation(id);
    },
  });
};

// Hook to delete an education record
export const useDeleteEducation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["education"],
    mutationFn: async (id) => await deleteEducation(id),
    onSuccess(data) {
      if (data?.success) {
        message.success(
          data?.message || "Education record deleted successfully!"
        );
        queryClient.invalidateQueries({ queryKey: ["education"] });
      } else {
        message.error(data?.message || "Failed to delete education record!");
      }
    },
    onError(error) {
      message.error(error?.message || "Failed to delete education record!");
    },
  });
};
