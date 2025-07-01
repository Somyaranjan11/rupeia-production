import React from "react";
import AddNomineeImage from "../Images/add-nominee.png";

const KYCAddNominee = ({ setPageStep }) => {
  return (
    <div>
      <div>
        <p className="text-[18px] font-semibold leading-7 font-poppins">
          Your Nomination Details
        </p>
        <p className="text-[14px] font-medium leading-5 font-poppins">
          You have filled nomination choice for the profile.
        </p>
      </div>
      <div className="border-[1px] border-[#916D98] rounded-2xl px-4 py-4 flex flex-col gap-1.5 mt-4">
        <img src={AddNomineeImage.src} alt="nominee-image" />
        <p className="text-[13px] font-semibold leading-5">
          You have opted not to choose anyone as your nominee in your investor
          profile.
        </p>
        <button className="bg-[#551262] border-[1px] border-[#916D98] text-[13px] font-medium text-white h-[45px] w-full rounded-3xl">
          Add Nominee
        </button>
      </div>
      <div className="border-[1px] border-[#65636394] py-4 px-5 fixed z-50 bottom-0 left-1/2 -translate-x-1/2 max-w-[calc(100%)] w-full rounded-3xl ">
        <button
          className={` bg-[#551262] w-full py-2 rounded-full text-[14px] leading-7 font-medium text-white cursor-pointer`}
          type="button"
          onClick={() => {
            setPageStep(7);
          }}
        >
          {"Continue"}
        </button>
      </div>
    </div>
  );
};

export default KYCAddNominee;
