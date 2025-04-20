import React from "react";

const AnimateLoader = ({ count = 1 }) => {
  const arr = Array(count).fill(0);
  return (
    <>
      {arr.map((item, index) => (
        <div key={index} className="mt-2 mb-2 w-full">
          <div className="w-full h-5 bg-[#E7E7E7] mt-3 animate-pulse rounded-md"></div>
          <div className="w-1/2 h-4 bg-[#E7E7E7] mt-3 animate-pulse rounded-md"></div>
          <div className="w-3/4 h-4 bg-[#E7E7E7] mt-3 animate-pulse rounded-md"></div>
          <div className="w-1/3 h-4 bg-[#E7E7E7] mt-3 animate-pulse rounded-md"></div>
        </div>
      ))}
    </>
  );
};

export default AnimateLoader;