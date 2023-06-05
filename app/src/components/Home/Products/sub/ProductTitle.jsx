import React from "react";
import img from "../../../../data/images/filterBackground.webp";
const ProductTitle = (props) => {
  console.log(props);
  return (
    <div className={`bg-[url(${img})]  w-[100%] h-[140px] `}>
      <div className="bg-[rgba(255,255,255,0.9)] h-[100%]">
        <div className="w-[60%] h-[100%] m-auto flex justify-center items-center ">
          <div className="px-[10px] text-[30px] font-[700] text-center tracking-[1px]">
            {props.title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTitle;
