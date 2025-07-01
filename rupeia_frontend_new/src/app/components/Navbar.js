import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import Mobile from "../icons/Mobile";
import Profile from "../icons/Profile";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { checkLogin } from "../utility/checkLogin";
import { getUserData } from "../utility/getUserData";

const Navbar = () => {
  const isLoggedIn = checkLogin();
  console.log("isLoggedIn", isLoggedIn);
  const user = getUserData();
  const [token, setToken] = useState(null);
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
      name: "Invite Friends",
      route: "/product/refer",
    },
    {
      id: 3,
      name: "Customer Support",
      route: "/product/ticket",
    },
    {
      id: 4,
      name: "Terms and Conditions",
      route: "/product/terms-condition",
    },
    {
      id: 5,
      name: "Saved Posts",
      route: "/product/saved-post",
    },
    {
      id: 6,
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
  const fetchProtectedData = async () => {
    const token = localStorage.getItem("accessToken");
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/notifications`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // <-- add Authorization header
          },
        }
      );
      if (response?.data?.success) {
        console.log("response?.data?.success", response?.data?.success);
      }
    } catch (error) {
      console.error("❌ Error:", error.response?.data || error.message);
    } finally {
    }
  };
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault(); // Stop automatic prompt
      setDeferredPrompt(event); // Save event for later
    });
  }, []);

  const handleInstallClick = () => {
    console.log("deferredPrompt", deferredPrompt);
    if (deferredPrompt) {
      deferredPrompt.prompt(); // Show install prompt
      deferredPrompt.userChoice.then((choice) => {
        if (choice.outcome === "accepted") {
          console.log("User installed the PWA");
        } else {
          console.log("User dismissed the installation");
        }
      });
    }
  };

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
          onClick={() => {
            handleInstallClick();
          }}
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

        <button
          className="text-[12px] font-normal bg-[#FFFFFF] rounded-[5px] px-1 py-[3px] text-[#551262]"
          onClick={() => {
            fetchProtectedData();
          }}
          type="button"
        >
          TEST AUTH
        </button>
        {isLoggedIn ? (
          <div
            onClick={() => {
              router.push("/product/profile");
            }}
            className="flex flex-row items-center gap-1.5"
          >
            <img
              src={user?.profilePicture}
              className="h-[25px] w-[25px] rounded-full"
              alt="Profile"
            />
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
          </div>
        ) : (
          <div
            className="flex flex-row items-center gap-1.5"
            onClick={() => {
              router.push("/product/login");
            }}
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
          </div>
        )}
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
              {user?.firstName?.split("")[0]}
            </p>
            <p className="text-black  text-[13px] font-medium ">
              {" "}
              {user?.firstName}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Navbar;
