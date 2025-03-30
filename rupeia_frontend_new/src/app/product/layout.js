"use client";
import React from "react";
import Navbar from "../components/Navbar";
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
  const pathname = usePathname();
  return (
    <div
      className={` h-screen flex flex-col font-poppins ${
        pathname.includes("customer-support") ||
        pathname.includes("chat-bot")
          ? "bg-white"
          : "bg-primary"
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="w-full">
          <Navbar />
        </div>
        <div className="w-full h-full overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
