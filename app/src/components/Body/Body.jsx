import React from "react";
import Hero from "./sub/Hero";
import BodyContent from "./sub/BodyContent";
import BodySales from "./sub/BodySales";
import PopularProducts from "./sub/PopularProducts";
import Brand from "./sub/Brand";

const Body = () => {
  return (
    <div>
      <Hero />
      <BodyContent />
      <BodySales />
      <PopularProducts />
      <Brand />
    </div>
  );
};

export default Body;
