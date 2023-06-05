import React from "react";
import ProductThumbnail from "./sub/ProductThumbnail.jsx";
import ProductDescription from "./sub/ProductDescription.jsx";

const SingleProduct = () => {
  return (
    <div className="w-[100%] grid grid-cols-2 gap-4 justify-center items-center ">
      <ProductThumbnail />
      <ProductDescription />
    </div>
  );
};

export default SingleProduct;
