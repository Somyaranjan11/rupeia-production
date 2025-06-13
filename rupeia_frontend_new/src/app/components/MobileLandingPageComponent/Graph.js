import React from "react";
import rupeiaGraph from "../../components/Images/rupeia_graph.png";

const Graph = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <img src={rupeiaGraph.src} className="w-[1100px] h-[550px]" />
    </div>
  );
};

export default Graph;
