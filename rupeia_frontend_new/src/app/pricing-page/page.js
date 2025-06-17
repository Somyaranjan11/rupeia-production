import React from "react";
import PlansCardModel from "../components/PricingPage/PlansCardModel";
import Footer from "../components/MobileLandingPageComponent/Footer";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#551262]">
      {/* Top Section */}
      <div className="relative flex flex-col items-center justify-center pt-12 pb-16">
        {/* Background "Pricing" Text */}
        <p className="font-bold text-[70px] sm:text-[220px] tracking-wider text-center text-[#FFFFFF61] z-0">
          Pricing
        </p>

        {/* Plan Cards */}
        <div className="-mt-[40px] sm:mt-[-160px] flex flex-col items-center gap-4 z-10 px-5 sm:px-0">
          <div className="flex flex-col sm:flex-row gap-4">
            <PlansCardModel />
            <PlansCardModel />
          </div>
          <div className="border-[1px] border-[#FFFFFF61] rounded-3xl py-4 px-6 text-center">
            <span>
              <span className="text-[15px] sm:text-[17px] text-[#ECE6EDAD] font-semibold">
                Note:{" "}
              </span>
              <span className="text-[#ECE6EDAD] text-[13px] sm:text-[15px]">
                1 month free trial applicable with all our plans. No credit card
                required.
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
