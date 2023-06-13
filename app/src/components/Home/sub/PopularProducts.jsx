import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import Product from "./Product";
import {
  clearErrors,
  getProduct,
  getProductDetails,
} from "../../../redux/actions/productAction";
import Loader from "../../Layout/Loader/Loader";

const PopularProducts = React.forwardRef((props, ref) => {
  const dispatch = useDispatch();

  const { loading, products, productsCount, error } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch(clearErrors());
    }
    dispatch(getProduct());
    dispatch(getProductDetails());
  }, [dispatch, error, toast]);

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
    <div className="pb-[80px]">
      <div className="container" ref={ref}>
        <div className="productsHeadings text-center mb-[50px]">
          <h2 className="text-[30px] font-[700]">Popular Products</h2>
        </div>
      </div>
      <div className="flex flex-wrap justify-between w-[1140px]  mx-auto h-[100%]">
        {loading ? (
          <Loader />
        ) : (
          <div className="flex flex-wrap justify-center justify-evenly w-[1140px]  mx-auto ">
            {products &&
              products.map((product, index) => (
                <Product product={product} key={index} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
});

export default PopularProducts;
