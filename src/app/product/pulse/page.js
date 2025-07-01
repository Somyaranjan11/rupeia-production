"use client";
import React, { useEffect, useState } from "react";
import NavbarCommonPage from "@/app/components/NavbarCommonPage";
import { useRouter } from "next/navigation";
import { MdAddCircle } from "react-icons/md";
import AnimateLoader from "@/app/components/Loader/AnimateLoader";
import axios from "axios";

const Page = () => {
  const router = useRouter();
  const [Summary, setSummaryData] = useState();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(0);
  const fetchProtectedData = async () => {
    setLoading(true);
    const token = localStorage.getItem("accessToken");
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/pulse/summary`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // <-- add Authorization
          },
        }
      );
      if (response?.data?.success) {
        console.log("response?.data?.success", response?.data);
        setSummaryData(response?.data?.data);
      }
    } catch (error) {
      console.error("❌ Error:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProtectedData();
  }, []);
  const handleClick = () => {
    router.push("/product");
  };
  console.log("Summary", Summary);
  return (
    <div className="font-poppins flex flex-col h-screen overflow-y-auto plan-card">
      <div className="px-5 fixed top-0 left-0 w-full z-10 shadow-md bg-[#551262]">
        <NavbarCommonPage page={"Pulse"} handleClick={handleClick} />
      </div>
      <div className="py-25 px-5">
        <div className=" flex flex-col gap-5">
          <p className="text-[#FFFFFF] text-[18px] font-semibold">
            Welcome to your pulse dashboard!
          </p>
          <p className="text-[#FFFFFFB8] text-[15px] font-medium">
            Let’s analyze your overall profit!
          </p>
        </div>
        {loading ? (
          <AnimateLoader count={2} />
        ) : (
          <div className="flex flex-col gap-4 mt-3">
            <div className="bg-[#551262] border-[1px] border-[#916d98] rounded-[20px] p-4 flex justify-center items-center flex-col gap-1">
              <p className="text-[#FFFFFFB8] text-[12px] font-medium">
                Overall Returns
              </p>
              <p className="text-[#FFFFFF] text-[22px] font-semibold">
                {Summary?.overall?.totalReturns} %{" "}
              </p>
              <p className="text-[11px] text-[#FFFFFF80] font-medium text-center">
                Last updated on 3 May. Updates at 3:30 pm IST today.
              </p>
            </div>
            <div className="border-[1px] border-[#916d98] p-3 flex justify-center items-center flex-col gap-1 rounded-3xl">
              <p className="text-[#FFFFFF] text-[12px] font-medium">
                Wedding Money
              </p>
              <p className="text-[#FFFFFF] text-[22px] font-semibold">
                {Summary?.goals?.returns} %{" "}
              </p>
            </div>
            <div className="border-[1px] border-[#916d98] p-3 flex justify-center items-center flex-col gap-1 rounded-3xl">
              <p className="text-[#FFFFFF] text-[12px] font-medium">Whealth+</p>
              <p className="text-[#FFFFFF] text-[22px] font-semibold">
                {Summary?.wealth?.returns}%
              </p>
            </div>
          </div>
        )}

        <div
          className="flex flex-row items-center gap-1 mt-3"
          onClick={() => {
            router.push("/product/wealth");
          }}
        >
          <MdAddCircle className="text-[21px]" />
          <p className="text-[14px] font-semibold text-[#FFFFFFCC]">Add Goal</p>
        </div>
      </div>
      <div className="py-4 px-5 fixed z-50 bottom-0 left-1/2 -translate-x-1/2 max-w-[calc(100%)] w-full rounded-3xl ">
        <button
          className={` bg-[#551262] w-full py-2 rounded-full text-[14px] leading-7 font-medium text-white`}
          type="button"
          // onClick={() => {
          //   setStep(step + 1);
          // }}
        >
          Actions
        </button>
      </div>
    </div>
  );
};

export default Page;
