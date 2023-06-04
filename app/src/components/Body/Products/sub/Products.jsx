import React from "react";
import ProductTopbar from "./ProductTopbar.jsx";
import ProductBody from "./ProductBody.jsx";
import ProductPagination from "./ProductPagination.jsx";

const Products = () => {
  return (
    <div className=" w-[855px] bg-[white]">
      <ProductTopbar />
      <ProductBody />
      <ProductPagination />
    </div>
  );
};

export default Products;
