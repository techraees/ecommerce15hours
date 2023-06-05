import React from "react";
import { Link } from "react-router-dom";
import Stars from "react-rating-stars-component";

const Product = () => {
  const options = {
    edit: false,
    count: 5,
    color: "rgba(20,20,20,0.1)",
    activeColor: "#FF9900",
    size: window.innerWidth < 600 ? 20 : 25,
    value: 2.5,
    isHalf: true,
  };
  return (
    <div className="flex flex-col mb-[50px] mr-[0px] h-[498px] m-auto bg-[#fff] drop-shadow-[0px_0px_5px_rgba(0,0,0,0.3)]">
      <div>
        <div className="img bg-[#E6E6FA] w-[255px] h-[348px] relative">
          <div className="absolute text-[12px] font-[700] bg-[#0315ff] text-[white] px-[10px] leading-[25px] top-[20px] left-[20px]">
            <span>NEW</span>
          </div>
          <div className="absolute text-[12px] font-[700] bg-[#fff] text-[black] px-[10px] leading-[25px] top-[20px] right-[20px]  hover:bg-[#E6E6FA]">
            <span>Hrt</span>
          </div>
          <div className="hover-content absolute left-[20px] right-[20px] bottom-[20px] bg-[#FFC0CB] text-center text-[white]">
            <div className="">
              <Link
                to="add-cart"
                className="leading-[50px] text-[14px] font-[400] "
              >
                ADD TO CART
              </Link>
            </div>
          </div>
        </div>
        <div className="content pt-[5px] px-[15px]">
          <div className="mb-[5px]">
            <Stars {...options} />
          </div>
          <span className="text-[10px] block mb-[10px]">MANGO</span>
          <Link>
            <h6 className="leading-[1.3rem] font-[700]">
              PETITE Belted Jumper Dress
            </h6>
          </Link>

          <p className="font-[700] leading-[2rem]">
            <span className="text-[14px] font-[700] leading-[2rem] text-[#aaaaaa] line-through">
              $79.00
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;$60.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
