import React from "react";
import correctImage from "../Images/submitted-image.png";
import { useRouter } from "next/navigation";

const SuccessMessage = () => {
  const router = useRouter();

  return (
    <div className="h-[400px] flex justify-center items-center flex-col relative">
      <div className="submitted-success-message h-[128px] w-[333px] relative flex justify-center items-center rounded-[20px]">
        <p className="text-[15px] font-medium text-center">
          Your query has been raised! We will get back to you shortly.
        </p>
        <img
          src={correctImage.src}
          alt="success message"
          className="h-[70px] w-[70px] absolute -top-10 left-1/2 -translate-x-1/2"
        />
      </div>

      {/* Continue Button */}
      <div className="flex justify-center items-center mt-7 absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-full rounded-3xl">
        <button
          className="rounded-[12px] h-[50px] w-[191px] bg-[#551262] text-white cursor-pointer"
          onClick={() => {
            router.push("/landing-page");
          }}
          type="button"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SuccessMessage;
