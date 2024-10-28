"use server";

import axiosInstance from "@/lib/axiosInstance";
import { revalidateTag } from "next/cache";

// Create a new technology record
export const createTechnology = async (payload) => {
  try {
    const response = await axiosInstance.post(`/technology`, payload);

    revalidateTag("technology"); // Update the cache tag to reflect technology records

    return response.data;
  } catch (e) {
    throw new Error(
      e.response?.data?.message ||
        e.message ||
        "Failed to create technology record!"
    );
  }
};

// Fetch all technology records
export const getAllTechnologies = async (query) => {
  const fetchOption = {
    next: {
      tags: ["technology"], // Update to reflect technology records
    },
  };
  const params = new URLSearchParams();

  if (query) {
    query.forEach((element) => {
      params.append(element.name, element.value);
    });
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/technology?${params.toString()}`, // Updated endpoint
    fetchOption
  );

  return response.json();
};

// Fetch a single technology record
export const getSingleTechnology = async (id) => {
  const fetchOption = {
    next: {
      tags: ["technology"], // Update to reflect technology records
    },
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/technology/${id}`, // Updated endpoint
    fetchOption
  );

  return response.json();
};

// Update a technology record
export const updateTechnology = async ({ id, payload: formData }) => {
  try {
    const response = await axiosInstance.patch(`/technology/${id}`, formData);

    revalidateTag("technology");
    return response.data;
  } catch (e) {
    throw new Error(
      e.response?.data?.message ||
        e.message ||
        "Failed to update technology record!"
    );
  }
};

// Delete a technology record
export const deleteTechnology = async (id) => {
  try {
    const response = await axiosInstance.delete(`/technology/${id}`); // Updated endpoint
    revalidateTag("technology"); // Update the cache tag to reflect technology records
    return response.data;
  } catch (e) {
    throw new Error(
      e.response?.data?.message ||
        e.message ||
        "Failed to delete technology record!"
    );
  }
};
