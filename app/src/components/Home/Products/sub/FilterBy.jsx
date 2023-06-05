import React from "react";
import Price from "./Price.jsx";
import Color from "./Color.jsx";
import Brand from "./Brand.jsx";

const FilterBy = () => {
  return (
    <div className="mb-[30px]">
      <div className="mb-[30px] font-[700] text-[18px] ">Filter By</div>
      <Price />
      <Color />
      <Brand />
    </div>
  );
};

export default FilterBy;
