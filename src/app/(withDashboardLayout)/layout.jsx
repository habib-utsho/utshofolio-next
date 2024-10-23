"use client";

import React from "react";
import Sidebar from "./_components/Sidebar";
import DashboardNavbar from "./_components/DashboardNavbar";

const layout = ({ children }) => {
  return (
    <>
      <div className="flex justify-between relative">
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
