import React from "react";
import cateGories1 from "../Images/blogs-pharma.png";
import cateGories2 from "../Images/blogs-bipharma.png";
import cateGories3 from "../Images/blogs-chemistry.png";
import cateGories4 from "../Images/blogs-nutirition.png";
import cateGories5 from "../Images/blogs-counter.png";
import cateGories6 from "../Images/blogs-customatic.png";
import cateGories7 from "../Images/blogs-agrisciencs.png";

const Categories = () => {
  const categoriesData = [
    {
      id: 1,
      name: "Pharma",
      image: cateGories1,
    },
    {
      id: 2,
      name: "Biopharma",
      image: cateGories2,
    },
    {
      id: 3,
      name: "Specialty Chemicals",
      image: cateGories3,
    },
    {
      id: 4,
      name: "Nutrition",
      image: cateGories4,
    },
    {
      id: 5,
      name: "Over The Counter",
      image: cateGories5,
    },
    {
      id: 6,
      name: "Cosmetics",
      image: cateGories6,
    },
    {
      id: 7,
      name: "Agriscience",
      image: cateGories7,
    },
    {
      id: 8,
      name: "CosmAgriscienceetics",
      image: cateGories7,
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-4">
      {categoriesData?.map((data, index) => (
        <div key={index}>
          <img src={data?.image.src} />
          <p className="bg-white text-[#213565] text-[14px] font-semibold text-center shadow-xl py-1 rounded-br-2xl">
            {data?.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
