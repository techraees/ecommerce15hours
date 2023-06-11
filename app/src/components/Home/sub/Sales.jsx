import React from "react";
import { Link } from "react-router-dom";

const BodySales = () => {
  return (
    <div className="pb-[80px]">
      <div className="container mx-auto ">
        <div className="sales flex w-[1110px] h-[550px] m-auto justify-end  bg-[#ff0000] pr-[150px]">
          <div className="flex justify-items-end items-center h-[100%] ">
            <div className="">
              <h6 className="text-[#ff0000] text-[24px] font-[700] block">
                -60%
              </h6>
              <h2 className="text-[60px] mb-[50px] font-[700] block">
                Global Sale
              </h2>
              <Link
                to="/products"
                className="bg-[#0315ff] px-[40px] text-[12px] text-white w-[50%] h-[50px] block pt-[15px] text-center font-[700] hover:bg-[#dc0345] ease-out duration-500"
              >
                BUY NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodySales;
