"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "./_components/Sidebar";
import DashboardNavbar from "./_components/DashboardNavbar";
import SigninDashboard from "./_components/SigninDashboard";

const layout = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsModalVisible(true);
  }, []);
  return (
    <>
      {isClient && (
        <SigninDashboard
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      )}
      <div
        className={`flex justify-between relative ${
          isModalVisible && "blur-md"
        }`}
      >
        <Sidebar />
        <main className="flex-1 min-h-screen bg-slate-50 text-black">
          <DashboardNavbar />
          {children}
        </main>
      </div>
    </>
  );
};

export default layout;
