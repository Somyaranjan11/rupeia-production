import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

import Mobile from "../icons/Mobile";
import Profile from "../icons/Profile";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { useAuth } from '@clerk/nextjs';


const Navbar = () => {
  const { isSignedIn, isLoaded,user } = useUser();
  const { isAuthenticated, getToken, session } = useAuth();

  const [token, setToken] = useState(null);

  const getAuthToken = async () => {
    if (isSignedIn) {
      const authToken = await getToken(); // Fetch the authentication token
      console.log("Auth Token:", authToken);
      setToken(authToken);
    } else {
      console.log('User is not authenticated');
    }
  };
  console.log("user", user?.firstName, isSignedIn,isAuthenticated);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const popupRef = useRef(null);
  const menuOption = [
    { id: 1, name: "Grow" },
    {
      id: 2,
      name: "News",
      route: "/product/news/content",
    },
    {
      id: 3,
      name: "Blogs",
      route: "/product/blogs/content",
    },
  ];
  const optionMenu = [
    {
      id: 1,
      name: "Profile",
      route: "/product/profile",
    },
    {
      id: 2,
      name: "Communication Settings",
    },
    {
      id: 3,
      name: "Invite Friends",
      route: "/product/refer",
    },
    {
      id: 4,
      name: "Customer Support",
      route: "/product/customer-support",
    },
    {
      id: 5,
      name: "Terms and Conditions",
      route: "/product/terms-condition",
    },
    {
      id: 6,
      name: "Saved Posts",
      route: "/product/saved-post",
    },
    {
      id: 7,
      name: "Liked Posts",
      route: "/product/liked-post",
    },
  ];

  // Close the popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false); // Close the popup
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <div className="flex flex-row items-center justify-between mx-5 py-7 border-b-[0.5px] font-poppins relative">
      <div
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <GiHamburgerMenu
          className={`${
            pathname.includes("customer-support") ||
            pathname.includes("chat-bot")
              ? "text-[#5D20D2]"
              : "text-white"
          } text-2xl `}
        />
      </div>
      <div>
        <p
          className={`text-[16px] font-semibold leading-6 font-poppins ${
            pathname.includes("customer-support") ||
            pathname.includes("chat-bot")
              ? "text-[#5D20D2]"
              : "text-white"
          }`}
        >
          Rupeia
        </p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <span
          className={`flex items-center justify-center  ${
            pathname.includes("customer-support") ||
            pathname.includes("chat-bot")
              ? ""
              : "bg-[#FFFFFF] rounded-[5px] px-1 py-[3px]"
          }`}
        >
          {pathname.includes("customer-support") ||
          pathname.includes("chat-bot") ? (
            <Mobile className={`#5D20D2`} />
          ) : (
            <Mobile className={`#551262`} cl />
          )}

          <p
            className={`text-[12px] font-normal leading-5 ${
              pathname.includes("customer-support") ||
              pathname.includes("chat-bot")
                ? "text-[#5D20D2]"
                : "text-[#551262]"
            }`}
          >
            Lite
          </p>
        </span>
        <div>
          {isSignedIn ? (
            <button onClick={getAuthToken}>Get Token</button>
          ) : (
            <p>Please log in</p>
          )}
        </div>

        {isSignedIn && (
          <SignedIn>
            {/* <div
              className="flex flex-row items-center gap-1.5"
              // onClick={() => {
              //   router.push("/product/profile");
              // }}
            >
              <span
                className={`border-[1px]  rounded-full ${
                  pathname.includes("customer-support") ||
                  pathname.includes("chat-bot")
                    ? "border-[#5D20D2]"
                    : "border-white"
                }`}
              >
                {pathname.includes("customer-support") ||
                pathname.includes("chat-bot") ? (
                  <Profile className={`#5D20D2`} />
                ) : (
                  <Profile className={`#ffffff`} />
                )}
              </span>
            </div> */}
            <UserButton />
            <p
              className={`text-[12px] font-normal leading-6 ${
                pathname.includes("customer-support") ||
                pathname.includes("chat-bot")
                  ? "text-[#5D20D2]"
                  : "text-white"
              }`}
            >
              You
            </p>
          </SignedIn>
        )}
        <SignedOut>
          <div className="text-[12px] text-[#551262] font-normal leading-5 bg-[#FFFFFF] rounded-[5px] px-1 py-[3px] flex justify-center items-center">
            <SignInButton />
          </div>
        </SignedOut>
      </div>
      {isOpen && (
        <div className="absolute bottom-0 top-0 h-screen w-screen right-0 bg-black opacity-40 z-20 -left-[20px] p-6 shadow-2xs content-none"></div>
      )}

      {isOpen && (
        <div
          className={`fixed top-0 left-0 h-full w-[80%] bg-white shadow-2xl z-50 p-4 transform duration-1000  ease-in-out`}
          ref={popupRef}
        >
          <div className="flex flex-col gap-2 border-b-[1px] border-[#E3E3E3] pb-3">
            <div className="flex flex-col gap-2">
              {menuOption?.map((data, index) => (
                <div
                  className={` px-4 h-9 ${
                    pathname?.includes(data?.route)
                      ? "bg-[#E3E3E3] rounded-lg  flex items-center"
                      : ""
                  }`}
                  key={index}
                >
                  <p
                    className="text-[13px] font-poppins font-medium leading-7 text-black"
                    onClick={() => {
                      router.push(data?.route);
                      setIsOpen(false);
                    }}
                  >
                    {data?.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-3">
            <p className="text-[#808084] text-[13px] font-poppins font-medium leading-7 px-4 h-9">
              Options
            </p>
            <div className="flex flex-col">
              {optionMenu?.map((data, index) => (
                <div
                  className={` px-4 h-9 ${
                    pathname?.includes(data?.route)
                      ? "bg-[#E3E3E3] rounded-lg  flex items-center"
                      : ""
                  }`}
                  key={index}
                >
                  <p
                    className="text-[13px] font-poppins font-medium leading-7 text-black"
                    onClick={() => {
                      if (data?.route) {
                        router.push(data?.route);
                        setIsOpen(false);
                      }
                    }}
                  >
                    {data?.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 fixed bottom-5 ">
            <p className="rounded-full border-[1px] bg-[#551262D4] border-[#794083] h-[35px] w-[35px] flex justify-center items-center text-[18px] font-semibold">
              A
            </p>
            <p className="text-black  text-[13px] font-medium ">Aryan Singh</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Navbar;
