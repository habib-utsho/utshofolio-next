import Bubbles from "@/Components/HelpingCompo/Bubbles";
import DesktopSidebar from "@/Components/HelpingCompo/DesktopSidebar";
import MobileMenu from "@/Components/HelpingCompo/MobileMenu";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto md:mx-6 xl:mx-auto items-center flex">
      <Bubbles />
      <div className="h-full md:h-[95vh] w-full bg-[#222831] overflow-y-scroll">
        {children}
      </div>

      {/* sidebar menu for desktop */}
      <DesktopSidebar />
      <MobileMenu />
    </div>
  );
};

export default layout;
