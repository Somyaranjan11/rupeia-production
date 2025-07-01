"use client";
import ShowErroemessage from "@/app/components/alert/ShowErroemessage";
import ButtonLoader from "@/app/components/Loader/ButtonLoader";
import Profile from "@/app/icons/Profile";
import { getUserData } from "@/app/utility/getUserData";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa6";

const Page = () => {
  const router = useRouter();
  const user = getUserData();
  const [loading, setLoading] = useState(false);
  const logoutFunction = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/logout`
      );
      console.log("response?.data", response?.data);
      if (response?.data?.success) {
        localStorage.clear();
        router.push("/product");
      }
    } catch (error) {
      console.error("❌ Error:", error.response?.data || error.message);
      ShowErroemessage(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0000004d] h-screen z-50 w-full px-8 flex justify-center items-center">
      <div className="profile-card h-[505px] w-[100%] z-50 rounded-3xl mx-auto">
        <div className="flex flex-row p-5">
          <div
            className=""
            onClick={() => {
              router.push("/product");
            }}
          >
            <BsArrowLeftShort className="text-[29px]" />
          </div>
          <div className="flex justify-center flex-col items-center w-full mr-10">
            <div className="bg-[#0000005C] h-[97px] w-[97px] rounded-full flex justify-center items-center border-[10px] border-[#280331D6] profile-shadow relative">
              <p className="text-[#FFFFFF] text-[33px] font-semibold uppercase">
                {user?.firstName?.split("")[0]}
              </p>
              <div className="border-[2px] border-[#D9D9D9B5] rounded-3xl h-[24px] w-[45px] flex justify-center items-center absolute -bottom-3">
                <p className="text-[11px] font-medium leading-7">78%</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-3">
              <p className="text-[22px] font-medium leading-7 text-center">
                {user?.firstName}
              </p>
              <button className="bg-[#916D98] text-[11px] font-medium leading-7 flex justify-center items-center rounded-3xl h-[27px] px-4">
                Complete my profile
              </button>
            </div>
          </div>
        </div>
        <div className="border-[1px] border-[#65636394] rounded-4xl p-5 flex flex-col gap-3">
          <div className="flex justify-between items-center my-2">
            <div className="flex items-center gap-2">
              <span className="border-[1px] border-white rounded-full p-[2px]">
                <Profile className={`#ffffff`} />
              </span>
              <p className="text-[16px] font-medium leading-7">My Profile</p>
            </div>
            <div>
              <FaAngleRight />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-[14px] font-medium leading-7">
                Communication Settings
              </p>
            </div>
            <div>
              <FaAngleRight />
            </div>
          </div>
          <div
            className="flex justify-between items-center"
            onClick={() => {
              router.push("/product/refer");
            }}
          >
            <div>
              <p className="text-[14px] font-medium leading-7">
                Invite Friends
              </p>
            </div>
            <div>
              <FaAngleRight />
            </div>
          </div>
          <div
            className="flex justify-between items-center"
            onClick={() => {
              router.push("/product/customer-support");
            }}
          >
            <div>
              <p className="text-[14px] font-medium leading-7">
                Customer Support
              </p>
            </div>
            <div>
              <FaAngleRight />
            </div>
          </div>
          <div
            className="flex justify-between items-center"
            onClick={() => {
              router.push("/product");
            }}
          >
            <div>
              <p className="text-[14px] font-medium leading-7">Rupeia</p>
            </div>
            <div>
              <FaAngleRight />
            </div>
          </div>
          <div className="flex justify-center items-center mt-3">
            <button
              className="bg-[#551262] border-[1px] border-[#916D98] h-[36px] rounded-full px-5 text-[15px] font-medium leading-7 text-center w-[180px]"
              onClick={() => {
                logoutFunction();
              }}
            >
              {loading ? <ButtonLoader /> : "Logout"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
