import React from "react";
import { Link } from "react-router-dom";
import Stars from "react-rating-stars-component";

const Product = (props) => {
  const {
    name,
    _id,
    description,
    price,
    ratings,
    images,
    category,
    stock,
    numOfReviews,
  } = props.product;
  const options = {
    edit: false,
    count: 5,
    color: "rgba(20,20,20,0.1)",
    activeColor: "#FF9900",
    size: window.innerWidth < 600 ? 20 : 25,
    value: ratings,
    isHalf: true,
  };

  return (
    <div>
      <Link to={`/product/${_id}`}>
        <div className="flex flex-col mb-[50px] mr-[0px] h-[550px] m-auto bg-[#fff] transition-all hover:drop-shadow-[0px_0px_5px_rgba(0,0,0,0.3)] hover:scale-105">
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
              <div className="flex items-center">
                <span className="mr-[10px] font-[300]">{ratings}</span>
                <span>
                  <Stars {...options} />
                </span>
                <span className="font-[200]">({numOfReviews} Reviews)</span>
              </div>
              <span className="text-[10px] block mb-[10px] uppercase">
                {category}
              </span>
              <Link>
                <h6 className="leading-[1.3rem] mb-[10px] font-[700] w-[220px] h-[60px] overflow-hidden font-['Ubantu'] ">
                  {name}
                </h6>
              </Link>
              <p className="font-[700] leading-[2rem] text-[rgb(15,17,17)] font-['Montserrat']">
                <span className="text-[14px] font-[500] leading-[2rem] text-[#f00] line-through mr-[10px]">
                  $79.00
                </span>
                <span className="relative">
                  <span className="text-[13px] mr-[3px] absolute top-[-15px]">
                    $
                  </span>
                  <span className="text-[28px] ml-[12px]">{price}</span>
                  <span className="text-[13px] absolute top-[-15px] opacity-[0]">
                    .
                  </span>
                  <span className="text-[13px] absolute top-[-15px]">00</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
