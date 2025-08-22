"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import "./globals.css";
import { getUserData } from "./utility/getUserData";
import { GoArrowUpRight, GoGoal } from "react-icons/go";
import Bag from "./icons/Bag";
import { MdSip } from "react-icons/md";
import LandingPageCard from "./components/LandingPageCard";
import LandingPageNewsCard from "./components/LandingPageNewsCard";
import LandingPageBlogsCard from "./components/LandingPageBlogsCard";
import { usePathname } from "next/navigation";
import Navbar from "./components/Navbar";
import { PiWaveform } from "react-icons/pi";
import { IoIosAddCircle } from "react-icons/io";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => console.log("Service Worker Registered", reg))
        .catch((err) => console.log("Service Worker Registration Failed", err));
    }
  }, []);
  const user = getUserData();
  const pathname = usePathname();
  return (
    <div
      className={` h-screen flex flex-col font-poppins ${
        pathname.includes("customer-support") || pathname.includes("chat-bot")
          ? "bg-white"
          : "bg-[#1A0120]"
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="w-full">
          <Navbar />
        </div>
        <div className="flex justify-center items-center flex-col gap-1 mt-5">
          <p className="text-[32px] font-semibold leading-7 font-poppins">
            Hi {user ? user?.firstName : "User"}!
          </p>
          <p className="text-[16px] font-medium leading-7 font-poppins">
            Welcome Back{" "}
          </p>
        </div>

        <div className="bg-white rounded-4xl flex flex-col h-full mt-3 p-2 relative">
          {/* Landing page boxes */}
          <div className="flex justify-between items-center px-5 pb-4 pt-4 gap-3">
            <div
              className="relative border-[1px] border-[#9563A2] w-full flex justify-center items-center flex-col rounded-xl pt-1 pb-2"
              onClick={() => {
                router.push("/product/pulse");
              }}
            >
              <div className="bg-primary p-[7px] w-fit rounded-xl absolute -top-4">
                <GoGoal className="text-[18px]" />
              </div>
              <p className="text-[12px] text-black font-medium leading-7 pt-2">
                Pulse
              </p>
              <p className="text-[11px] text-black font-medium flex">
                <PiWaveform className="text-[25px]" />
              </p>
            </div>
            <div
              className="relative border-[1px] border-[#9563A2] w-full flex justify-center items-center flex-col rounded-xl pt-1 pb-2"
              onClick={() => {
                router.push("/product/portfolio");
              }}
            >
              <div className="bg-primary p-[7px] w-fit rounded-xl absolute -top-4">
                <Bag />
              </div>
              <p className="text-[12px] text-black font-medium leading-7 pt-2">
                Portfolio
              </p>
              <span>
                <IoIosAddCircle className="text-[#1A0120] text-[25px]" />
              </span>
            </div>
            <div
              className="relative border-[1px] border-[#9563A2] w-full flex justify-center items-center flex-col rounded-xl pt-1 pb-2"
              onClick={() => {
                router.push("/product/sip");
              }}
            >
              <div className="bg-primary p-[7px] w-fit rounded-xl absolute -top-4">
                <MdSip className="text-[18px]" />
              </div>
              <p className="text-[12px] text-black font-medium leading-7 pt-2">
                SIP
              </p>
              <p className="text-[18px] text-black font-medium">₹0</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-5">
            <p className="text-[16px] font-medium leading-6 text-black">
              Let’s Grow Your Wealth
            </p>
            <span>
              <GoArrowUpRight className="text-black" />
            </span>
          </div>
          <div className="h-full w-auto mt-3 overflow-y-hidden overflow-x-auto flex gap-3  mb-12 ml-5 ">
            <div className="min-w-[270px]">
              <LandingPageCard />
            </div>
            <div className="min-w-[270px]">
              <LandingPageNewsCard />
            </div>
            <div className="min-w-[270px]">
              <LandingPageBlogsCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
