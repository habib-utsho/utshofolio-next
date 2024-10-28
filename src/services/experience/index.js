"use server";

import axiosInstance from "@/lib/axiosInstance";
import { revalidateTag } from "next/cache";

// Create a new experience
export const createExperience = async (payload) => {
  try {
    const response = await axiosInstance.post(`/experience`, payload);

    revalidateTag("experience"); // Update the cache tag to reflect experiences

    return response.data;
  } catch (e) {
    throw new Error(
      e.response?.data?.message || e.message || "Failed to create experience!"
    );
  }
};

// Fetch all experiences
export const getAllExperiences = async (query) => {
  const fetchOption = {
    next: {
      tags: ["experience"], // Update to reflect experiences
    },
  };
  const params = new URLSearchParams();

  if (query) {
    query.forEach((element) => {
      params.append(element.name, element.value);
    });
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/experience?${params.toString()}`, // Updated endpoint
    fetchOption
  );

  return response.json();
};

// Fetch a single experience
export const getSingleExperience = async (id) => {
  const fetchOption = {
    next: {
      tags: ["experience"], // Update to reflect experiences
    },
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/experience/${id}`, // Updated endpoint
    fetchOption
  );

  return response.json();
};

// Update an experience
export const updateExperience = async ({ id, payload: formData }) => {
  try {
    const response = await axiosInstance.patch(`/experience/${id}`, formData);

    revalidateTag("experience");
    return response.data;
  } catch (e) {
    throw new Error(
      e.response?.data?.message || e.message || "Failed to update experience!"
    );
  }
};

// Delete an experience
export const deleteExperience = async (id) => {
  try {
    const response = await axiosInstance.delete(`/experience/${id}`); // Updated endpoint
    revalidateTag("experience"); // Update the cache tag to reflect experiences
    return response.data;
  } catch (e) {
    throw new Error(
      e.response?.data?.message || e.message || "Failed to delete experience!"
    );
  }
};
