import React from "react";
import { Link } from "react-router-dom";
import pink from "../../../data/images/pink.webp";

const PopularProducts = () => {
  return (
    <div className="pb-[80px]">
      <div className="container">
        <div className="productsHeadings text-center mb-[50px]">
          <h2 className="text-[30px] font-[700]">Popular Products</h2>
        </div>
      </div>

      <div className="container flex justify-between w-[1140px]  mx-auto">
        <div className="flex flex-col  h-[498px] m-auto ">
          <div className="px-[15px]">
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
            <div className="content pt-[25px]">
              <span className="text-[10px]">MANGO</span>
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
        <div className="flex flex-col w-[1140px] h-[498px] m-auto">
          <div className="px-[15px]">
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
            <div className="content pt-[25px]">
              <span className="text-[10px]">MANGO</span>
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
        <div className="flex flex-col w-[1140px] h-[498px] ">
          <div className="px-[15px]">
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
            <div className="content pt-[25px]">
              <span className="text-[10px]">MANGO</span>
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
        <div className="flex flex-col w-[1140px] h-[498px] m-auto">
          <div className="px-[15px]">
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
            <div className="content pt-[25px]">
              <span className="text-[10px]">MANGO</span>
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
      </div>
    </div>
  );
};

export default PopularProducts;
