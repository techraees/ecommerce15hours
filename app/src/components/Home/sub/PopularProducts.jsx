import React, { useEffect } from "react";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../../redux/actions/productAction";

const PopularProducts = React.forwardRef((props, ref) => {
  const dispatch = useDispatch();

  const { loading, products, productsCount, error } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const handle = () => {
    console.log(props);
  };
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

      <div className="container flex flex-wrap justify-between w-[1140px]  mx-auto">
        {products &&
          products.map((product, index) => (
            <Product product={product} key={index} />
          ))}
      </div>
    </div>
  );
});

export default PopularProducts;
