import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  clearErrors,
  getProduct,
  getProductDetails,
} from "../../../redux/actions/productAction";
import ReviewCard from "./ReviewCard";
import Carousel from "react-material-ui-carousel";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import RatingStars from "react-rating-stars-component";
import Loader from "../../Layout/Loader/Loader";

const SingleProduct = () => {
  // Collapse Options
  const [isActive, setIsActive] = useState(false);
  const handleCollapse = () => {
    setIsActive(!isActive);
  };
  const { product, error, loading } = useSelector(
    (state) => state.productDetails
  );
  // Redux Data
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetails("64807496d4ddeebd02f69d8d"));
    if (error) {
      toast.error(error.message || error, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      dispatch(clearErrors());
    }
  }, [dispatch, id, error]);

  // Stars Options
  const options = {
    edit: false,
    count: 5,
    color: "rgba(20,20,20,0.1)",
    activeColor: "#FF9900",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.product.ratings,
    isHalf: true,
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="w-[100%] grid grid-cols-2 gap-4 justify-center  mb-[20px]">
            <Carousel>
              {product.product.images &&
                product.product.images.map((img, index) => (
                  <img
                    src={img.url}
                    alt={`${index} Slider`}
                    key={index}
                    style={{ maxWidth: "100%", height: "100%" }}
                  />
                ))}
            </Carousel>
            <div className=" py-[50px] px-[5%]">
              <div className="flex justify-between items-center">
                <span className="text-[10px] mb-[10px] block uppercase">
                  {product.product.category}
                </span>
                <span className="text-[1rem] mb-[10px] block uppercase">
                  PRODUCT ID: &nbsp;
                  <span className="font-[100]">{product.product._id}</span>
                </span>
              </div>
              <h2 className="mb-[5px] text-[24px] leading-[3rem] font-[700] ">
                {product.product.name}
              </h2>
              <div className="flex items-center">
                <span className="mr-[5px]">{product.product.ratings}</span>
                <span>
                  <RatingStars {...options} />
                </span>
                <span>({product.product.numOfReviews} Reviews)</span>
              </div>
              <hr />
              <div className="flex items-center justify-between my-[10px]">
                <p className="font-[700] leading-[2rem] text-[rgb(15,17,17)] font-['Montserrat']">
                  <span className="text-[14px] font-[500] leading-[2rem] text-[#f00] line-through mr-[10px]">
                    $79.00
                  </span>
                  <span className="relative">
                    <span className="text-[13px] mr-[3px] absolute top-[-15px]">
                      $
                    </span>
                    <span className="text-[28px] ml-[12px]">
                      {product.product.price}
                    </span>
                    <span className="text-[13px] absolute top-[-15px] opacity-[0]">
                      .
                    </span>
                    <span className="text-[13px] absolute top-[-15px]">00</span>
                  </span>
                </p>
                <p>
                  <span className="font-[500] text-[1.2rem]">Status: </span>(
                  {product.product.Stock})
                  {product.product.Stock >= 1 ? (
                    <span className="text-[#00ff00] ml-[10px] font-[700]">
                      InStock
                    </span>
                  ) : (
                    <span className="text-[#ff0000] ml-[5px] font-[700]">
                      OutOfStock
                    </span>
                  )}
                </p>
              </div>
              <hr />
              <div className="flex my-[20px]">
                <button className="bg-gray-100 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                  -
                </button>
                <input
                  className=" bg-transparent border-none w-[50px] text-center text-gray-700  focus:outline-none"
                  type="text"
                  value="100"
                />
                <button className="bg-gray-100 hover:bg-green-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                  +
                </button>
                <Link className=" flex items-center rounded bg-[#FFCC99] bottom-[20px] justify-center hover:bg-[#FF9900] font-[500] duration-300 ease-out  text-[white] w-[30%] ml-[20px]">
                  ADD TO CART
                </Link>
              </div>
              <span className="font-[500] text-[1.3rem] ">
                About this item:
              </span>
              <p className="mb-[10px] leading-[1.75rem] font-[300] text-[1rem] leading-[50px] text-[1.2rem] font-[300] pt-[10px]">
                {product.product.description}
              </p>
              <div className="my-[20px] flex items-center text-center">
                <div
                  className=" mr-[3rem] relative w-[30%] select-none"
                  onClick={handleCollapse}
                >
                  <span className="px-[30px] mb-[10px] block bg-[#fff] drop-shadow-[0px_0px_1px_rgba(0,0,0,0.3)] leading-[3rem] ">
                    SIZE: X
                  </span>
                  <ul
                    className={
                      isActive
                        ? "absolute top-[50px] bg-[#f6f6f6] w-[100%] text-start font-[400] leading-[40px] ease-in duration-1000 "
                        : "absolute top-[50px] bg-[#f6f6f6] w-[100%] text-start font-[400] leading-[40px] ease-in duration-1000 hidden"
                    }
                  >
                    <li className="px-[20px]">SIZE: XL</li>
                    <li className="px-[20px]">SIZE: X</li>
                    <li className="px-[20px]">SIZE: M</li>
                    <li className="px-[20px]">SIZE: S</li>
                  </ul>
                </div>
                <div
                  className="mr-[3rem] relative w-[30%] select-none"
                  onClick={handleCollapse}
                >
                  <span className="px-[30px] mb-[10px] block bg-[#fff] drop-shadow-[0px_0px_1px_rgba(0,0,0,0.3)] leading-[3rem] ">
                    COLOR: BLACK
                  </span>
                  <ul
                    className={
                      isActive
                        ? "absolute top-[50px] bg-[#f6f6f6] w-[100%] text-start font-[400] leading-[40px] ease-in duration-1000  "
                        : "absolute top-[50px] bg-[#f6f6f6] w-[100%] text-start font-[400] leading-[40px] ease-in duration-1000 hidden "
                    }
                  >
                    <li className="px-[20px]">SIZE: XL</li>
                    <li className="px-[20px]">SIZE: X</li>
                    <li className="px-[20px]">SIZE: M</li>
                    <li classNme="px-[20px]">SIZE: S</li>
                  </ul>
                </div>
              </div>
              <Link
                className={
                  isActive
                    ? " flex items-center rounded bg-[#FFCC99] p-[10px] mt-[180px]  justify-center hover:bg-[#FF9900] font-[500] duration-300 ease-out  text-[white] w-[30%] "
                    : " flex items-center rounded bg-[#FFCC99] p-[10px] justify-center hover:bg-[#FF9900] font-[500] duration-300 ease-out  text-[white] w-[30%] "
                }
              >
                Submit Reviews
              </Link>
            </div>
          </div>
          <h2 className="text-[#000000be] font-[500] text-[2vmax] text-center border-b-[1px] border-b-solid border-b-[rgba(0,0,0,0.226)] pb-[0.75vmax] w-[20vmax] m-auto mb-[1.5vmax] font-['Poppins']">
            Reviews
          </h2>
          {product.product.reviews && product.product.reviews[0] ? (
            <div className="flex overflow-auto mb-[85px]">
              {product.product.reviews &&
                product.product.reviews.map((review, index) => (
                  <ReviewCard review={review} key={index} />
                ))}
            </div>
          ) : (
            <p className="font-[400] text-[1.5vmax] font-['Gill Sans'] text-center text-[rgba(0,0,0,0.548)] my-[2vmax]">
              No Reviews Yet!
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default SingleProduct;
