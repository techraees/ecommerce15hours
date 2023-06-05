import React, { useRef } from "react";
import Hero from "./sub/Hero";
import Content from "./sub/Content";
import Sales from "./sub/Sales";
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
      <Content />
      <Sales />

      <PopularProducts ref={nestedComponentRef} value={"hello"} />
      <Brand />
    </div>
  );
};

export default Body;
