import React from "react";
import { RxCross1 } from "react-icons/rx";
import QRCODE from "../Images/rupeia-qrcode.jpeg";

const DownloadRupeia = ({ closePopUp }) => {
  return (
    <div className="absolute bg-[#000000BA] min-h-screen w-screen  z-50 top-20 flex justify-center items-center ">
      <div className="bg-[#FFFFFF] w-[900px] h-fit rounded-[15px] p-3">
        <div className="flex justify-end">
          <RxCross1
            className="text-black text-[30px] cursor-pointer"
            onClick={() => {
              closePopUp();
            }}
          />
        </div>
        <div className="flex flex-row gap-12 px-5 pb-5 mt-2">
          <div>
            <p className="text-[#551262CC] text-[18px] font-semibold">
              Pharmaceuticals are characterized by several analytical.
            </p>
            <p className="text-[#551262] text-[32px] font-bold font-poppins">
              Scan the QR Code to early access to the Rupeai app
            </p>
            <p className="text-[#551262CC] text-[18px] font-medium pr-10 mt-5">
              Pharmaceuticals are characterized by several analytical techniques
              to confirm their identitfy and describe their quality.
            </p>
          </div>
          <div className="w-[428px] ">
            <img src={QRCODE.src} className="h-[230px] w-[428px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadRupeia;
