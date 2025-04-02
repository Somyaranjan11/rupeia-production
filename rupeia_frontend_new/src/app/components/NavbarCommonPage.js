"use client"
import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import Mobile from "../icons/Mobile";
import { RxCross2 } from "react-icons/rx";
import { usePathname, useRouter } from "next/navigation";

const NavbarCommonPage = ({
  page = "rupeia",
  handleClick = () => {
    console.log("rupeia");
  },
}) => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div
      className={`flex flex-row items-center justify-between py-6  font-poppins relative ${
        pathname.includes("saved-post") || pathname.includes("liked-post")
          ? ""
          : "border-b-[0.5px]"
      }`}
    >
      <div className="flex flex-row items-center gap-2">
        <div onClick={handleClick}>
          <BsArrowLeftShort className="text-[29px]" />
        </div>
        <div>
          <p className="text-[16px] font-semibold leading-7">{page}</p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-2">
        <span
          className={`flex items-center justify-center bg-[#FFFFFF] rounded-[5px] px-1 py-[3px]  `}
        >
          <Mobile className={`#551262`} />
          <p className={`text-[12px] font-normal leading-5 text-[#551262]`}>
            Lite
          </p>
        </span>
        <div
          onClick={() => {
            router.push("/product");
          }}
        >
          <RxCross2 className="text-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default NavbarCommonPage;
