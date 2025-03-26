import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

import Mobile from "../icons/Mobile";
import Profile from "../icons/Profile";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between mx-5 py-7 border-b-[0.5px] font-poppins">
      <div>
        <GiHamburgerMenu className="text-white text-2xl" />
      </div>
      <div>
        <p className="text-[16px] font-semibold leading-6 font-poppins">
          Rupeia
        </p>
      </div>
      <div className="flex flex-row items-center gap-1.5">
        <Mobile className="text-2xl" />
        <div className="flex flex-row items-center gap-1.5">
          <span className="border-[1px] border-white rounded-full">
            <Profile />
          </span>
          <p className="text-[12px] font-normal leading-6">You</p>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
