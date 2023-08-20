import React, { useState } from "react";
import "./Product.css";
import img from "../../../fdata/images/filterBackground.webp";
import ProductSidebar from "./sub/ProductSidebar.jsx";
import Products from "./sub/Products.jsx";

const Product = () => {
  const [price, setPrice] = useState([0, 2500]);
  const [category, setCategory] = useState("all");
  const [ratings, setRatings] = useState([0, 5]);
  const handlePrice = (data) => {
    setPrice(data);
  };

  const handleCategory = (data) => {
    setCategory(data);
  };

  const sendingCategory = (data) => {
    return typeof data === "string" ? data.toLowerCase() : data;
  };

  const handleRatings = (data) => {
    setRatings(data);
  };

  return (
    <div>
      <div className={`bg-[url(${img})]  w-[100%] h-[140px] `}>
        <div className="bg-[rgba(255,255,255,0.9)] h-[100%]">
          <div className="w-[60%] h-[100%] m-auto flex justify-center items-center ">
            <div className="px-[10px] text-[30px] font-[700] text-center tracking-[1px]">
              DRESSES:
            </div>
          </div>
        </div>
      </div>
      <div className="py-[80px]  w-[1110px] m-auto flex justify-between">
        <ProductSidebar
          parentFunc={handlePrice}
          categoryParentFunc={handleCategory}
          handleRatings={handleRatings}
        />
        <Products
          price={price}
          category={sendingCategory(category)}
          ratingsArray={ratings}
        />
      </div>
    </div>
  );
};

export default Product;
