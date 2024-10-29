"use server";

// Fetch all technology records
export const getDashboardStats = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/stats`);

  return response.json();
};
