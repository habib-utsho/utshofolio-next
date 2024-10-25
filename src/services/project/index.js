"use server";

import axiosInstance from "@/lib/axiosInstance";
import { revalidateTag } from "next/cache";

// Create a new project
export const createProject = async (payload) => {
  try {
    console.log("hey");
    console.log(payload.get("data"), "from service");
    console.log(payload.get("logo"), "from service");
    console.log(payload.get("banner"), "from service");

    const response = await axiosInstance.post(`/project`, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    revalidateTag("project"); // Update the cache tag to reflect projects
    return response.data;
  } catch (e) {
    throw new Error(
      e.response?.data?.message || e.message || "Failed to create project!"
    );
  }
};

// Fetch all projects
export const getAllProjects = async (query) => {
  const fetchOption = {
    next: {
      tags: ["project"], // Update to reflect projects
    },
  };
  const params = new URLSearchParams();

  if (query) {
    query.forEach((element) => {
      params.append(element.name, element.value);
    });
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/project?${params.toString()}`, // Updated endpoint
    fetchOption
  );

  return response.json();
};

// Fetch a single project
export const getSingleProject = async (id) => {
  const fetchOption = {
    next: {
      tags: ["project"], // Update to reflect projects
    },
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/project/${id}`, // Updated endpoint
    fetchOption
  );

  return response.json();
};

// Create update project
export const updateProject = async ({ id, payload }) => {
  try {
    const response = await axiosInstance.patch(`/project/${id}`, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    revalidateTag("project");
    return response.data;
  } catch (e) {
    throw new Error(
      e.response?.data?.message || e.message || "Failed to update project!"
    );
  }
};

// Delete a project
export const deleteProject = async (id) => {
  try {
    const response = await axiosInstance.delete(`/project/${id}`); // Updated endpoint
    revalidateTag("project"); // Update the cache tag to reflect projects
    return response.data;
  } catch (e) {
    throw new Error(
      e.response?.data?.message || e.message || "Failed to delete project!"
    );
  }
};
