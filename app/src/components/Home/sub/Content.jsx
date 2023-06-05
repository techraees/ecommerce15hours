import React from "react";
import { Link } from "react-router-dom";

const HeroContent = () => {
  return (
    <div className="py-[80px]">
      <div className="container mx-auto">
        <div className="flex w-[1140px] h-[240px] m-auto justify-between text-center ">
          <div className="clothing bg-[#89CFF0] w-[360px] h-[240px] hover:text-[#007bff] ease-out duration-200">
            <div className="py-[6.1rem] text-[30px] font-[700]">
              <Link>CLOTHING</Link>
            </div>
          </div>
          <div className="shoes  w-[360px] h-[240px] hover:text-[#007bff] ease-out duration-200">
            <div className="py-[6.1rem] text-[30px] font-[700]">
              <Link>SHOES</Link>
            </div>
          </div>
          <div className="accessories bg-[#89CFF0] w-[360px] h-[240px] hover:text-[#007bff] ease-out duration-200">
            <div className="py-[6.1rem] text-[30px] font-[700] ">
              <Link>ACCESSORIES</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
