import React from "react";
import { Link } from "react-router-dom";

const HeroBody = () => {
  return (
    <div className="">
      <div className="heroBackground">
        <div className="container mx-auto w-[1140px] h-[600px] py-[200px]">
          <div className="flex flex-col ">
            <h6 className="mt-[10px]">asoss</h6>
            <h2 className="mb-[50px] text-[60px] font-[700]">New Collection</h2>
            <Link className="bg-[#0315ff] color-white p-[12px] text-center w-[200px] text-[white]">
              VIEW COLLECTION
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBody;
