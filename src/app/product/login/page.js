"use client";
import React, { useState } from "react";
import LoginComponent from "@/app/components/Login/LoginComponent";
import LoginImage from "../../components/Images/loginpage-preview.png";
import LoginImage1 from "@/app/icons/LoginImage1";
import LoginImage2 from "@/app/icons/LoginImage2";
import LoginImage3 from "@/app/icons/LoginImage3";
import NavbarCommonPage from "@/app/components/NavbarCommonPage";
import { useRouter } from "next/navigation";
import EnterPin from "@/app/components/Login/EnterPin";
import PhoneNumberVerify from "@/app/components/Login/PhoneNumberVerify";
import PhoneNumberComponent from "@/app/components/Login/PhoneNumberComponent";
import SetPin from "@/app/components/Login/SetPin";
import VerifyPin from "@/app/components/Login/VerifyPin";
const Page = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/product");
  };
  const [fistPageOnboard, setFirstPageOnboard] = useState({
    email_id: "",
    pin: "",
    phone_otp: "",
    phone_number: "",
    pin: "",
    verify_pin: "",
  });
  const [page, setPage] = useState(1);
  console.log("page", page);
  return (
    <div className="flex justify-between flex-col h-full overflow-hidden">
      <div className="px-5 fixed top-0 left-0 w-full z-10 shadow-md bg-[#1A0120]">
        <NavbarCommonPage Page={"Rupeia"} handleClick={handleClick} />
      </div>
      {page == 1 && (
        <div>
          <img src={LoginImage.src} alt="login-image" className="mt-16" />
          <div className="flex justify-center items-center flex-col gap-[2px] px-10">
            <p className="text-[#807B98] text-[12px] font-medium text-center">
              Choose your dream and fulfill them with the help of mutual funds
            </p>
            <span>
              <LoginImage1 />
            </span>
            <p className="text-[#807B98] text-[12px] font-medium text-center">
              Save money as well
            </p>
            <span>
              <LoginImage2 />
            </span>
            <p className="text-[#807B98] text-[12px] font-medium text-center">
              Get expertise mutual fund suggestions from us{" "}
            </p>
            <span>
              <LoginImage3 />
            </span>
            <p className="text-[#807B98] text-[12px] font-medium text-center">
              Read our updated exclusive news and blogs{" "}
            </p>
          </div>
        </div>
      )}

      {page == 1 && (
        <LoginComponent
          setPage={setPage}
          page={page}
          setFirstPageOnboard={setFirstPageOnboard}
          fistPageOnboard={fistPageOnboard}
        />
      )}
      {page == 2 && (
        <PhoneNumberVerify
          setPage={setPage}
          page={page}
          setFirstPageOnboard={setFirstPageOnboard}
          fistPageOnboard={fistPageOnboard}
        />
      )}

      {page == 3 && (
        <PhoneNumberComponent
          setFirstPageOnboard={setFirstPageOnboard}
          fistPageOnboard={fistPageOnboard}
          setPage={setPage}
          page={page}
        />
      )}
      {page == 4 && (
        <SetPin
          setFirstPageOnboard={setFirstPageOnboard}
          fistPageOnboard={fistPageOnboard}
          setPage={setPage}
          page={page}
        />
      )}
      {page == 5 && (
        <VerifyPin
          setFirstPageOnboard={setFirstPageOnboard}
          fistPageOnboard={fistPageOnboard}
          setPage={setPage}
          page={page}
        />
      )}
      {page == 6 && (
        <EnterPin
          setPage={setPage}
          page={page}
          setFirstPageOnboard={setFirstPageOnboard}
          fistPageOnboard={fistPageOnboard}
        />
      )}
    </div>
  );
};

export default Page;
