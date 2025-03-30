import React from "react";
import AddNomineeImage from "../Images/add-nominee.png";

const KYCAddNominee = () => {
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
        <img src={AddNomineeImage.src} />
        <p className="text-[13px] font-semibold leading-5">
          You have opted not to choose anyone as your nominee in your investor
          profile.
        </p>
        <button className="bg-[#551262] border-[1px] border-[#916D98] text-[13px] font-medium text-white h-[45px] w-full rounded-3xl">
          Add Nominee
        </button>
      </div>
    </div>
  );
};

export default KYCAddNominee;
