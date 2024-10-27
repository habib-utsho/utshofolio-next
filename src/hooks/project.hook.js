import {
  createProject,
  deleteProject,
  getAllProjects,
  getSingleProject,
  updateProject,
} from "@/services/project";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";

// Hook to create a project
export const useCreateProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["project"],
    mutationFn: async (payload) => await createProject(payload),
    onSuccess(data) {
      if (data?.success) {
        queryClient.invalidateQueries({ queryKey: ["project"] });
      } else {
        message.error(data?.message || "Failed to create project!");
      }
    },
    onError(error) {
      message.error(error?.message || "Failed to create project!");
    },
  });
};

// Hook to update a project
export const useUpdateProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["project"],
    mutationFn: async (payload) => await updateProject(payload),
    onSuccess(data) {
      if (data?.success) {
        queryClient.invalidateQueries({ queryKey: ["project"] });
      } else {
        message.error(data?.message || "Failed to update project!");
      }
    },
    onError(error) {
      message.error(error?.message || "Failed to update project!");
    },
  });
};

// Hook to get all projects
export const useGetAllProjects = (query = []) => {
  return useQuery({
    queryKey: ["project", ...query.map(({ name, value }) => [name, value])],
    queryFn: async () => {
      return await getAllProjects(query);
    },
  });
};

// Hook to get a single project
export const useGetSingleProject = (id) => {
  return useQuery({
    queryKey: ["project", id],
    queryFn: async () => {
      return await getSingleProject(id);
    },
  });
};

// Hook to delete a project
export const useDeleteProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["project"],
    mutationFn: async (id) => await deleteProject(id),
    onSuccess(data) {
      if (data?.success) {
        message.success(data?.message || "Project deleted successfully!");
        queryClient.invalidateQueries({ queryKey: ["project"] });
      } else {
        message.error(data?.message || "Failed to delete project!");
      }
    },
    onError(error) {
      message.error(error?.message || "Failed to delete project!");
    },
  });
};
