import React from "react";
import blogsCardImage from "../Images/blogs-card-image.png";
import { FaArrowRight } from "react-icons/fa6";

const BlogsCard = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <div>
        <img src={blogsCardImage.src} className="h-[205px]" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[13px] text-[#4C4D55] font-normal leading-5 font-poppins text-black">
          Actylis Limerick - Strengthening Partnerships with a Biopharma CDMO
        </p>
        <p className="text-[13px] text-[#4C4D55] font-semibold font-poppins">
          2ND AUGUST 2024
        </p>
        <p className="text-[13px] text-[#4C4D55] font-normal leading-5 font-poppins line-clamp-3">
          Pharmaceuticals are characterized by several analytical techniques to
          confirm their identity and describe their quality. Purity, potency,
          and assay are common approaches used to quantify how much of an active
          pharmaceutical ingredient (API) is in a drug substance, but what do
          these values actually tell us? Each of these results is determined by
          different factors, and it is important to understand the differences
          between them and the limitations of each approach.
        </p>
      </div>
      <div className="flex items-center gap-1 pb-3">
        <p className="text-[13px] text-[#4C4D55] font-normal leading-5">
          Read Story
        </p>
        <span>
          <FaArrowRight className="text-[#4C4D55] text-[15px]" />
        </span>
      </div>
    </div>
  );
};

export default BlogsCard;
