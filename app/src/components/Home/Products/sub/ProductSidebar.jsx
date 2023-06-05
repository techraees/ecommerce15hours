import React from "react";
import Category from "./Category.jsx";
import FilterBy from "./FilterBy.jsx";

const ProductSidebar = () => {
  return (
    <div className="w-[255px] bg-[white] px-[15px]">
      <Category />
      <FilterBy />
    </div>
  );
};

export default ProductSidebar;
