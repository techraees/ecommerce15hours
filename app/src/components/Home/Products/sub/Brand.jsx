import React from "react";
import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <div className="mb-[50px]">
      <div className="mb-[15px] font-[700]">BRANDS</div>
      <div>
        <ul className={" mb-[15px] "} id="clothing">
          <li className="text-[#787878] mb-[5px] text-[14px] font-[300]">
            <Link to="#">ASOS</Link>
          </li>
          <li className="text-[#787878] mb-[5px] text-[14px] font-[300]">
            <Link to="#">MANGO</Link>
          </li>
          <li className="text-[#787878] mb-[5px] text-[14px] font-[300]">
            <Link to="#">RIVER ISLAND</Link>
          </li>
          <li className="text-[#787878] mb-[5px] text-[14px] font-[300]">
            <Link to="#">TOPSHOP</Link>
          </li>
          <li className="text-[#787878] mb-[5px] text-[14px] font-[300]">
            <Link to="#">ZARA</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Brand;
