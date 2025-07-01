"use client";
import NavbarCommonPage from "@/app/components/NavbarCommonPage";
import EnterPin from "@/app/components/SignIn/EnterPin";
import OTPComponent from "@/app/components/SignIn/OTPComponent";
import SignInComponent from "@/app/components/SignIn/SignInComponent";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const [fistPageOnboard, setFirstPageOnboard] = useState({
    email_id: "",
    pin: "",
    otp: "",
  });
  const [page, setPage] = useState(1);
  const router = useRouter();
  const handleClick = () => {
    if (page > 1 && page < 3) {
      setPage(page - 1);
    }
  };
  return (
    <div className="flex justify-between flex-col h-full w-full overflow-hidden">
      <div className="px-5 fixed top-0 left-0 w-full z-10 shadow-md bg-[#551262]">
        <NavbarCommonPage page={"Log In"} handleClick={handleClick} />
      </div>
      <div className="w-full">
        <div className="pt-28 pb-5">
          <p className="text-[20px] font-poppins leading-7 font-semibold text-center">
            Welcome to Back
          </p>
        </div>
        <div className="w-full">
          {page == 1 && (
            <SignInComponent
              setFirstPageOnboard={setFirstPageOnboard}
              fistPageOnboard={fistPageOnboard}
              setPage={setPage}
              page={page}
            />
          )}
          {page == 2 && (
            <OTPComponent
              setFirstPageOnboard={setFirstPageOnboard}
              fistPageOnboard={fistPageOnboard}
              setPage={setPage}
              page={page}
            />
          )}
          {page == 3 && (
            <EnterPin
              setFirstPageOnboard={setFirstPageOnboard}
              fistPageOnboard={fistPageOnboard}
              setPage={setPage}
              page={page}
            />
          )}
        </div>
      </div>
      {/* <div className="border-[1px] border-[#65636394] py-4 px-5 fixed bottom-0 left-1/2 -translate-x-1/2 max-w-[calc(100%)] w-full rounded-3xl ">
        <button
          className=" bg-[#551262] w-full  py-2 rounded-full text-[15px] leading-7 font-medium text-white"
          type="button"
          onClick={() => {
            // if (pageStep > 1 && pageStep < 6) {
            //   setPageStep(pageStep + 1);
            // }
            setPage(pageStep + 1);
          }}
        >
          Continue
        </button>
      </div> */}
    </div>
  );
};

export default Page;
