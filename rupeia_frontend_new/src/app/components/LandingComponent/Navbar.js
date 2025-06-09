import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="bg-[#551262] h-[52px] w-full flex justify-between items-center px-5 fixed top-0">
      <span>
        <p className="text-[#ECE6ED] text-[15px] font-semibold">Rupeia</p>
      </span>
      <span>
        <GiHamburgerMenu className="text-[22px]" />
      </span>
    </div>
  );
};

export default Navbar;
