import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

import Mobile from "../icons/Mobile";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between mx-5 py-8 border-b-[0.5px] font-poppins">
      <div>
        <GiHamburgerMenu className="text-white" />
      </div>
      <div>
        <p className="text-[16px] font-medium leading-6 font-poppins">Rupeia</p>
      </div>
      <div className="flex flex-row items-center gap-1.5">
        <Mobile />
        <div className="flex flex-row items-center gap-1.5">
          <CgProfile className="text-white" />
          <p className="text-[12px] font-normal leading-6">You</p>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
