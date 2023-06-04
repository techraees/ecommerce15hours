import React from "react";

const ProductHeading = () => {
  return (
    <div className="px-[15px] w-[100%] flex justify-between items-center mb-[40px] text-[12px] font-[600]">
      <div className="total">
        <p className=" tracking-[0.75px]">
          <span className="text-[#0315ff] ">186</span>
          &nbsp; PRODUCTS FOUND
        </p>
      </div>
      <div className="sorting flex justify-between items-center">
        <p>SORT BY: </p>
        <div className="text-[14px] font-[400] cursor-pointer">
          &nbsp;&nbsp;HIGHEST RATE{" "}
        </div>
      </div>
    </div>
  );
};

export default ProductHeading;
