import React from "react";
import "./Product.css";
import ProductTitle from "./sub/ProductTitle";
import ProductSection from "./sub/ProductSection.jsx";

const Product = () => {
  const title = "DRESSES";
  return (
    <div className="mt-[85px]">
      <ProductTitle title={title} />
      <ProductSection title={title} />
    </div>
  );
};

export default Product;
