import {
  createTechnology,
  deleteTechnology,
  getAllTechnologies,
  getSingleTechnology,
  updateTechnology,
} from "@/services/technology"; // Update import path

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";

// Hook to create a technology record
export const useCreateTechnology = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["technology"], // Update mutation key
    mutationFn: async (payload) => await createTechnology(payload),
    onSuccess(data) {
      if (data?.success) {
        queryClient.invalidateQueries({ queryKey: ["technology"] }); // Update query key
      } else {
        message.error(data?.message || "Failed to create technology record!");
      }
    },
    onError(error) {
      message.error(error?.message || "Failed to create technology record!");
    },
  });
};

// Hook to update a technology record
export const useUpdateTechnology = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["technology"], // Update mutation key
    mutationFn: async (payload) => await updateTechnology(payload),
    onSuccess(data) {
      if (data?.success) {
        queryClient.invalidateQueries({ queryKey: ["technology"] }); // Update query key
      } else {
        message.error(data?.message || "Failed to update technology record!");
      }
    },
    onError(error) {
      message.error(error?.message || "Failed to update technology record!");
    },
  });
};

// Hook to get all technology records
export const useGetAllTechnologies = (query = []) => {
  return useQuery({
    queryKey: ["technology", ...query.map(({ name, value }) => [name, value])], // Update query key
    queryFn: async () => {
      return await getAllTechnologies(query); // Update function call
    },
  });
};

// Hook to get a single technology record
export const useGetSingleTechnology = (id) => {
  return useQuery({
    queryKey: ["technology", id], // Update query key
    queryFn: async () => {
      return await getSingleTechnology(id); // Update function call
    },
  });
};

// Hook to delete a technology record
export const useDeleteTechnology = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["technology"], // Update mutation key
    mutationFn: async (id) => await deleteTechnology(id),
    onSuccess(data) {
      if (data?.success) {
        message.success(
          data?.message || "Technology record deleted successfully!" // Update success message
        );
        queryClient.invalidateQueries({ queryKey: ["technology"] }); // Update query key
      } else {
        message.error(data?.message || "Failed to delete technology record!");
      }
    },
    onError(error) {
      message.error(error?.message || "Failed to delete technology record!");
    },
  });
};
