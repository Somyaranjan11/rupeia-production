"use client";
import React, { useEffect, useState } from "react";
import { FaAndroid } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Mobile from "../icons/Mobile";
import { RxCross2 } from "react-icons/rx";
import { BsArrowLeftShort } from "react-icons/bs";

const Page = () => {
  const [platform, setPlatform] = useState("");
  const router = useRouter();

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      setPlatform("android");
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setPlatform("ios");
    } else {
      setPlatform("other");
    }
  }, []);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    // Detect install prompt availability
    const handleBeforeInstall = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstall);

    // Detect if app is already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    if (window.navigator.standalone === true) {
      setIsInstalled(true);
    }

    // Detect install event
    window.addEventListener("appinstalled", () => {
      console.log("PWA was installed");
      setIsInstalled(true);
      setDeferredPrompt(null);
      setProgress(100);
      setTimeout(() => setShowProgress(false), 500);
    });

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
    };
  }, []);

  const investNowFunction = () => {
    if (isInstalled) {
      alert("App is already installed on your device!");
      return;
    }

    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choice) => {
        if (choice.outcome === "accepted") {
          console.log("User accepted install prompt");
          // Show fake progress
          setShowProgress(true);
          setProgress(10);
          const interval = setInterval(() => {
            setProgress((prev) => {
              if (prev >= 90) {
                clearInterval(interval);
                return prev;
              }
              return prev + 10;
            });
          }, 400);
        } else {
          console.log("User dismissed install");
        }
      });
    } else {
      alert("Install prompt is not available right now.");
    }
  };

  return (
    <div className="bg-[#3E004E] min-h-screen flex justify-center items-center">
      <div
        className={`fixed top-0 left-0 w-full z-10 shadow-md flex flex-row items-center justify-between px-4 py-6 font-poppins 
          border-b-[0.5px] bg-[#3E004E]`}
      >
        <div className="flex flex-row items-center gap-2">
          <div
            onClick={() => {
              router.push("/landing-page");
            }}
          >
            <BsArrowLeftShort className="text-[29px]" />
          </div>
          <div>
            <p className="text-[16px] font-semibold leading-7">
              Download Rupeia App
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <span
            className={`hidden items-center justify-center bg-[#FFFFFF] rounded-[5px] px-1 py-[3px]  `}
          >
            <Mobile className={`#551262`} />
            <p className={`text-[12px] font-normal leading-5 text-[#551262]`}>
              Lite
            </p>
          </span>
          <div
            onClick={() => {
              router.push("/landing-page");
            }}
          >
            <RxCross2 className="text-[20px]" />
          </div>
        </div>
      </div>
      <div className="bg-[#FFFFFF] h-auto rounded-[20px] mx-4 p-7">
        <p className="text-[#551262] text-[18px] font-semibold text-center mt-5">
          Click below to download the Rupeia App!
        </p>
        <p className="text-[#551262CC] text-[16px] font-medium text-center mt-5">
          All your portfolio needs rebalancing, alerts, dream planning managed
          in one app.
        </p>

        <div className="flex justify-center items-center mt-5 flex-col gap-3">
          {platform === "android" && (
            <button
              className="bg-[#551262] h-[50px] text-[16px] font-semibold rounded-[12px] w-[252px] flex justify-center items-center gap-3"
              type="button"
              onClick={() => {
                investNowFunction();
              }}
            >
              Download for Android <FaAndroid className="text-[22px]" />
            </button>
          )}
          {platform === "ios" && (
            <button
              className="bg-[#551262] h-[50px] text-[16px] font-semibold rounded-[12px] w-[252px] flex justify-center items-center gap-3"
              type="button"
              onClick={() => {
                router.push("/webapp-download/ios");
              }}
            >
              Download for iOS <FaApple className="text-[22px]" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
