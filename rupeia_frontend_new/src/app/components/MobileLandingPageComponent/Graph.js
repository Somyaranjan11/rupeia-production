import React from "react";
import rupeiaGraph from "../../components/Images/rupeia_graph.png";
import mobileGraph from "../../components/Images/rupeia-graph-image-final.png";

const Graph = () => {
  return (
    <div className="flex justify-center items-center sm:py-10">
      <img
        src={rupeiaGraph.src}
        className="w-full sm:w-[1100px] h-[700px] hidden sm:block pr-10"
      />
      <div className="block md:hidden">
        <p className="text-[22px] sm:text-[32px] my-5 text-center font-normal bg-gradient-to-r from-[#d0cccb] via-[#6a6867] to-[#d0cccb] bg-clip-text text-transparent">
          The Performance of Rupeia 
        </p>
        <img src={mobileGraph.src} className="h-[250px] w-full pl-2" />
      </div>
    </div>
  );
};

export default Graph;
