import React from "react";
import referFriendImage from "../../components/Images/refer-content.png";

const ReferalNews = () => {
  return (
    <div className="mb-10">
      <div className="hidden">
        <p className="text-[21px] font-semibold leading-7">Help a friend!</p>
        <p className="text-[13px] font-medium leading-6 mt-2">
          Introduce your friends to Rupeia and help them get the best value for
          their money.
        </p>
      </div>
      <div className="flex-col gap-4 my-6 hidden">
        <button className="bg-[#370841] text-[14px] font-medium leading-6 flex justify-center items-center w-full h-[45px] rounded-4xl">
          Invite Code: 6VV6E
        </button>
        <button className="border-[1px] border-[#916D98] text-[14px] font-medium leading-6 flex justify-center items-center w-full h-[45px] rounded-4xl">
          Share link
        </button>
      </div>
      <div className="hidden">
        <p className="text-[15px] font-medium leading-6">
          YOU AND YOUR FRIEND GETS
        </p>
        <img src={referFriendImage.src} className="h-[235px] mt-3 w-full" />
      </div>
      <div className="border-b-[1px] border-[#FFFFFF7A] h-[2px] w-full content-none mt-4 hidden"></div>
      <div>
        <p className="text-[14px] font-medium leading-6 text-center py-4">
          1 Month of free service of Rupiea
        </p>
        <div className="refer-card px-5 py-8 rounded-[18px] referal-form">
          <p className="text-[21px] font-semibold leading-7">Referral Terms</p>
          <p className="text-[14px] font-medium leading-6 pt-2">
            User Responsibility
          </p>
          <ul className="list-inside list-disc pl-4 pt-1">
            <li className="text-[13px] font-medium leading-6 pr-5 ">
              Users are responsible for maintaining the confidentiality of their
              account credentials.
            </li>
            <li className="text-[13px] font-medium leading-6 pr-5 ">
              Users must not use Rupeia for any unlawful activities.
            </li>
            <li className="text-[13px] font-medium leading-6 pr-5 ">
              Users acknowledge that investment decisions involve risk.
            </li>
            <li className="text-[13px] font-medium leading-6 pr-5 ">
              Users are responsible for maintaining the confidentiality.
            </li>
          </ul>
        </div>
        <div className="mt-5 mb-8">
          <button className="border-[1px] border-[#916D98] text-[13px] font-medium leading-6 flex  w-full  py-2 px-6 rounded-4xl">
            <span className="text-[#794083] font-semibold">Note:</span>{" "}
            <span>
              Referral will be applicable after first transaction from the user
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReferalNews;
