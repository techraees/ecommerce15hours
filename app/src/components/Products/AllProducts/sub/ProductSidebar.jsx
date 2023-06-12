import React, { useState } from "react";
import { Link } from "react-router-dom";
import Price from "./Price";
import Color from "./Color";
import Brand from "./Brand";

const categories = [
  "Laptop",
  "Footwear",
  "Bottom",
  "Tops",
  "Attire",
  "Camera",
  "Smartphones",
];

const ProductSidebar = ({ parentFunc, categoryParentFunc }) => {
  const [category, setCategory] = useState("");

  const handleActiveSendingCategory = (value) => {
    console.log(value);
    setCategory(value);
    categoryParentFunc(value);
  };
  return (
    <div className="w-[255px] bg-[white] px-[15px]">
      <div className="mb-[50px]">
        <h6 className="mb-[30px] font-[700] text-[1.5rem] ">Categories</h6>
        <ul>
          <li className="" onClick={() => handleActiveSendingCategory()}>
            <Link
              to="#"
              className="text-[14px] mt-[105px] font-[600] text-[rgba(0,0,0,0.7)] leading-[1.5rem]"
            >
              CLOTHING
            </Link>
            <ul className={`ml-[15px] mb-[15px]  `} id="clothing">
              <li className="text-[#787878] mb-[5px] text-[14px] font-[300]">
                <Link to="#">All</Link>
              </li>
            </ul>
          </li>
          {categories.map((cate, index) => (
            <li className="" key={index}>
              <Link
                to="#"
                className={
                  cate === category
                    ? "text-[18px] mt-[105px] font-[700] text-[rgba(0,0,0,1)] leading-[1.5rem] duration-300"
                    : "text-[14px] mt-[105px] font-[600] text-[rgba(0,0,0,0.5)] leading-[1.5rem] duration-300 hover:text-[25px]"
                }
                onClick={() => handleActiveSendingCategory(cate)}
              >
                {cate}{" "}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-[30px]">
        <div className="mb-[30px] font-[700] text-[18px] ">Filter By</div>
        <Price newPrice={parentFunc} />
        <Color />
        <Brand />
      </div>
    </div>
  );
};

export default ProductSidebar;
