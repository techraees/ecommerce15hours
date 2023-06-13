import React, { useState } from "react";
import { Link } from "react-router-dom";
import Price from "./Price";
import Color from "./Color";
import Brand from "./Brand";
import FilterByRatings from "./FilterByRatings";

const categories = [
  "All",
  "Laptop",
  "Footwear",
  "Bottom",
  "Tops",
  "Attire",
  "Camera",
  "Smartphones",
];

const ProductSidebar = ({ parentFunc, categoryParentFunc, handleRatings }) => {
  const [category, setCategory] = useState("all");

  const handleActiveSendingCategory = (value) => {
    setCategory(value);
    categoryParentFunc(value);
  };
  return (
    <div className="w-[255px] bg-[white] px-[15px]">
      <div className="mb-[20px]">
        <h6 className="mb-[15px] font-[700] text-[2rem]">Filter By</h6>
        <h3 className="mb-[15px] font-[700] text-[16px] text-blue-500">
          Categories
        </h3>
        <ul className="ml-[10px]">
          {categories.map((cate, index) => (
            <li key={index}>
              <Link
                to="#"
                className={
                  cate.toLowerCase() === category
                    ? "text-[18px] mt-[105px] font-[600] text-[rgba(0,0,0,0.8)] leading-[1.5rem] duration-300"
                    : "text-[14px] mt-[105px] font-[600]  text-[#787878] leading-[1.5rem] duration-300 hover:text-[18px]"
                }
                onClick={() => handleActiveSendingCategory(cate.toLowerCase())}
              >
                {cate}{" "}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-[30px]">
        <Price newPrice={parentFunc} />
        <FilterByRatings applyRatings={handleRatings} />
        <Color />
        <Brand />
      </div>
    </div>
  );
};

export default ProductSidebar;
