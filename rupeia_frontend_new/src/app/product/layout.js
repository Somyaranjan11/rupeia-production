import React from "react";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-primary h-screen flex flex-col font-poppins">
      <div className="flex flex-col h-full">
        <div className="w-full">
          <Navbar />
        </div>
        <div className="w-full h-full overflow-hidden p-3">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
