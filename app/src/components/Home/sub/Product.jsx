import React from "react";
import { Link } from "react-router-dom";
import Stars from "react-rating-stars-component";

const Product = (props) => {
  const {
    name,
    description,
    price,
    ratings,
    images,
    category,
    stock,
    numOfReviews,
  } = props.product;
  console.log(images[0].url);
  const options = {
    edit: false,
    count: 5,
    color: "rgba(20,20,20,0.1)",
    activeColor: "#FF9900",
    size: window.innerWidth < 600 ? 20 : 25,
    value: 3.5,
    isHalf: true,
  };

  return (
    <Link to="product">
      <div className="flex flex-col mb-[50px] mr-[0px] h-[100%] m-auto bg-[#fff] transition-all hover:drop-shadow-[0px_0px_5px_rgba(0,0,0,0.3)] hover:scale-105">
        <div>
          <div
            className={`w-[255px] bg-[url(${images[0].url})] bg-cover h-[348px] relative hover:bg-[url(${images[1].url})]`}
          >
            <div className="absolute text-[12px] font-[700] bg-[#0315ff] text-[white] px-[10px] leading-[25px] top-[20px] left-[20px]">
              <span className={price > 1000 ? "" : "hidden"}>NEW</span>
            </div>
            <div className="absolute text-[12px] font-[700] bg-[#fff] text-[black] px-[10px] leading-[25px] top-[20px] right-[20px]  hover:bg-[#E6E6FA]">
              <span>Hrt</span>
            </div>
            <div className="hover-content absolute left-[20px] right-[20px] bottom-[20px] bg-[#FFC0CB] text-center text-[white]">
              <div className="hover:hidden">
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
            <span className="text-[10px] block mb-[10px] uppercase">
              {category}
            </span>
            <Link>
              <h6 className="leading-[1.3rem] font-[500] w-[220px] h-[60px] overflow-hidden ">
                {name}
              </h6>
            </Link>
            <p className="font-[700] leading-[2rem]">
              <span className="text-[14px] font-[700] leading-[2rem] text-[#aaaaaa] line-through">
                $79.00
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;{`$${price}.00`}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
