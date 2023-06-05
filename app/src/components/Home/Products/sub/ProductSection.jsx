import React from "react";
import Sidebar from "./ProductSidebar.jsx";
import Products from "./Products.jsx";

const ProductSection = () => {
  return (
    <div className="py-[80px]  w-[1110px] m-auto flex justify-between">
      <Sidebar />
      <Products />
    </div>
  );
};

export default ProductSection;
