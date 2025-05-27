import React from "react";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft } from "react-icons/fa6";
import { IoLogInOutline } from "react-icons/io5";
import { CgLogIn } from "react-icons/cg";

const LoginComponent = () => {
  return (
    <div className="bg-[#D9B9E2] p-5 flex flex-col gap-2 rounded-t-xl">
      <div className="bg-[#270330] rounded-2xl flex justify-center items-center gap-2 py-2">
        <span>
          <FcGoogle />
        </span>
        <p className="text-[13px] font-medium leading-5 text-white">
          Continue with Google
        </p>
      </div>
      <div className="bg-[#270330] rounded-2xl flex justify-center items-center gap-2 py-2">
        <span>
          <CgLogIn className="text-white text-[20px]" />
        </span>
        <p className="text-[13px] font-medium leading-5 text-white">Sign Up</p>
      </div>
      <div className="bg-[#270330] rounded-2xl flex justify-center items-center gap-2 py-2">
        <span>
          <IoLogInOutline className="text-white text-[20px]" />
        </span>
        <p className="text-[13px] font-medium leading-5 text-white">Log in</p>
      </div>
    </div>
  );
};

export default LoginComponent;
