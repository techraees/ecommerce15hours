import React from "react";
import topshop from "../../../fdata/images/topshop.webp";
import mango from "../../../fdata/images/Mango.webp";
import zara from "../../../fdata/images/zara.webp";
import bershka from "../../../fdata/images/bershka.webp";
import asos from "../../../fdata/images/asos.webp";
import riverIsland from "../../../fdata/images/river island.webp";

const Brand = () => {
  return (
    <div className="flex justify-between py-[100px] px-[85px] bg-[#f5f5f9] h-[222px]">
      <div className="w-[120px] h-[24px]">
        <img src={topshop} alt="" />
      </div>
      <div className="w-[120px] h-[24px]">
        <img src={mango} alt="" />
      </div>
      <div className="w-[120px] h-[24px]">
        <img src={zara} alt="" />
      </div>
      <div className="w-[120px] h-[24px]">
        <img src={bershka} alt="" />
      </div>
      <div className="w-[120px] h-[24px]">
        <img src={asos} alt="" />
      </div>
      <div className="w-[120px] h-[24px]">
        <img src={riverIsland} alt="" />
      </div>
    </div>
  );
};

export default Brand;
