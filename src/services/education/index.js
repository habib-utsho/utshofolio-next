"use server";

import axiosInstance from "@/lib/axiosInstance";
import { revalidateTag } from "next/cache";

// Create a new education record
export const createEducation = async (payload) => {
  try {
    const response = await axiosInstance.post(`/education`, payload);

    revalidateTag("education"); // Update the cache tag to reflect education records

    return response.data;
  } catch (e) {
    throw new Error(
      e.response?.data?.message ||
        e.message ||
        "Failed to create education record!"
    );
  }
};

// Fetch all education records
export const getAllEducation = async (query) => {
  const fetchOption = {
    next: {
      tags: ["education"], // Update to reflect education records
    },
  };
  const params = new URLSearchParams();

  if (query) {
    query.forEach((element) => {
      params.append(element.name, element.value);
    });
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/education?${params.toString()}`, // Updated endpoint
    fetchOption
  );

  return response.json();
};

// Fetch a single education record
export const getSingleEducation = async (id) => {
  const fetchOption = {
    next: {
      tags: ["education"], // Update to reflect education records
    },
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/education/${id}`, // Updated endpoint
    fetchOption
  );

  return response.json();
};

// Update an education record
export const updateEducation = async ({ id, payload: formData }) => {
  try {
    const response = await axiosInstance.patch(`/education/${id}`, formData);

    revalidateTag("education");
    return response.data;
  } catch (e) {
    throw new Error(
      e.response?.data?.message ||
        e.message ||
        "Failed to update education record!"
    );
  }
};

// Delete an education record
export const deleteEducation = async (id) => {
  try {
    const response = await axiosInstance.delete(`/education/${id}`); // Updated endpoint
    revalidateTag("education"); // Update the cache tag to reflect education records
    return response.data;
  } catch (e) {
    throw new Error(
      e.response?.data?.message ||
        e.message ||
        "Failed to delete education record!"
    );
  }
};
