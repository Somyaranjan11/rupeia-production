import React, { useEffect } from "react";

const AnalyizeCard = ({ setPageStep, pageStep }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setPageStep(pageStep + 1);
    }, 5000); // 5 seconds

    // Clear timeout on unmount to avoid memory leaks
    return () => clearTimeout(timer);
  }, [pageStep, setPageStep]);

  return (
    <div className="min-h-screen">
      <div className="loading-container flex justify-center items-center flex-col min-h-screen">
        <div className="spinner flex justify-center items-center">
          {[...Array(12)].map((_, i) => (
            <div key={i} className={`bar bar-${i + 1}`}></div>
          ))}
        </div>
        <p className="text-[17px] font-medium text-[#F6D9FA] text-center mt-10">
          Analyzing over 1800 mutual funds...
        </p>
      </div>
    </div>
  );
};

export default AnalyizeCard;
