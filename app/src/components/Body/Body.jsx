import React, { useRef } from "react";
import Hero from "./sub/Hero";
import BodyContent from "./sub/BodyContent";
import BodySales from "./sub/BodySales";
import PopularProducts from "./sub/PopularProducts";
import Brand from "./sub/Brand";

const Body = () => {
  const nestedComponentRef = useRef(false);
  const scrollToNestedComponent = () => {
    if (nestedComponentRef.current) {
      nestedComponentRef.current.scrollIntoView({ behavior: "smooth" });
    }
    return "Hello World";
  };
  return (
    <div>
      <Hero onClick={scrollToNestedComponent} />
      <BodyContent />
      <BodySales />

      <PopularProducts ref={nestedComponentRef} />
      <Brand />
    </div>
  );
};

export default Body;
