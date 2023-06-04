import React, { useState } from "react";

import { Link } from "react-router-dom";

const Category = () => {
  const [isCollapse, setIsActive] = useState(true);
  const handleCollapse = () => {
    setIsActive(!isCollapse);
    console.log(isCollapse);
  };
  return (
    <div className="mb-[50px]">
      <h6 className="mb-[30px] font-[700] text-[18px] ">Categories</h6>
      <ul>
        <li className="">
          <Link
            to="#"
            className="text-[12px] mt-[105px] font-[600] "
            onClick={handleCollapse}
          >
            CLOTHING
          </Link>
          <ul
            className={
              isCollapse
                ? `ml-[15px] mb-[15px]  `
                : "ml-[15px] mb-[15px]  hidden"
            }
            id="clothing"
          >
            <li className="text-[#787878] mb-[5px] text-[14px] font-[300]">
              <Link to="#">All</Link>
            </li>
            <li className="text-[#787878] mb-[5px] text-[14px] font-[300]">
              {" "}
              <Link to="#">Bodysuits</Link>
            </li>
            <li className="text-[#787878] mb-[5px] text-[14px] font-[300]">
              <Link to="#">Dresses</Link>
            </li>
            <li className="text-[#787878] mb-[5px] text-[14px] font-[300]">
              <Link to="#">Hoodies &amp; Sweats</Link>
            </li>
            <li className="text-[#787878] mb-[5px] text-[14px] font-[300]">
              <Link to="#">Jackets &amp; Coats</Link>
            </li>
            <li className="text-[#787878] mb-[5px] text-[14px] font-[300]">
              <Link to="#">Jeans</Link>
            </li>
            <li className="text-[#787878] mb-[5px] text-[14px] font-[300]">
              <Link to="#">Pants &amp; Leggings</Link>
            </li>
            <li className="text-[#787878] mb-[5px] text-[14px] font-[300]">
              <Link to="#">Rompers &amp; Jumpsuits</Link>
            </li>
            <li className="text-[#787878] mb-[5px] text-[14px] font-[300]">
              <Link to="#">Shirts &amp; Blouses</Link>
            </li>
            <li className="text-[#787878] mb-[5px] text-[14px] font-[300]">
              <Link to="#">Shirts</Link>
            </li>
            <li className="text-[#787878] mb-[5px] text-[14px] font-[300]">
              <Link to="#">Sweaters &amp; Knits</Link>
            </li>
          </ul>
        </li>
        <li className="">
          <Link to="#" className="text-[12px] mb-[15px] font-[600]">
            SOES
          </Link>
          <ul className={"ml-[15px] mb-[15px] hidden"} id="clothing">
            <li className="text-[#787878] mb-[5px] text-[14px] font-[300]">
              <Link to="#">All</Link>
            </li>
            <li className="text-[#787878] mb-[5px] text-[14px] font-[300]">
              {" "}
              <Link to="#">Bodysuits</Link>
            </li>
            <li className="text-[#787878] mb-[5px] text-[14px] font-[300]">
              <Link to="#">Dresses</Link>
            </li>
            <li className="text-[#787878] mb-[5px] text-[14px] font-[300]">
              <Link to="#">Hoodies &amp; Sweats</Link>
            </li>
            <li className="text-[#787878] mb-[5px] text-[14px] font-[300]">
              <Link to="#">Jackets &amp; Coats</Link>
            </li>
            <li className="text-[#787878] mb-[5px] text-[14px] font-[300]">
              <Link to="#">Jeans</Link>
            </li>
            <li className="text-[#787878] mb-[5px] text-[14px] font-[300]">
              <Link to="#">Pants &amp; Leggings</Link>
            </li>
            <li className="text-[#787878] mb-[5px] text-[14px] font-[300]">
              <Link to="#">Rompers &amp; Jumpsuits</Link>
            </li>
            <li className="text-[#787878] mb-[5px] text-[14px] font-[300]">
              <Link to="#">Shirts &amp; Blouses</Link>
            </li>
            <li className="text-[#787878] mb-[5px] text-[14px] font-[300]">
              <Link to="#">Shirts</Link>
            </li>
            <li className="text-[#787878] mb-[5px] text-[14px] font-[300]">
              <Link to="#">Sweaters &amp; Knits</Link>
            </li>
          </ul>
        </li>
        <li className="">
          <Link to="#" className="text-[12px] mb-[15px] font-[600]">
            ACCESSORIES
          </Link>
          <ul className={"ml-[15px] mb-[15px] hidden"} id="clothing">
            <li className="text-[#787878] mb-[5px] text-[14px] font-[300]">
              <Link to="#">All</Link>
            </li>
            <li className="text-[#787878] mb-[5px] text-[14px] font-[300]">
              {" "}
              <Link to="#">Bodysuits</Link>
            </li>
            <li className="text-[#787878] mb-[5px] text-[14px] font-[300]">
              <Link to="#">Dresses</Link>
            </li>
            <li className="text-[#787878] mb-[5px] text-[14px] font-[300]">
              <Link to="#">Hoodies &amp; Sweats</Link>
            </li>
            <li className="text-[#787878] mb-[5px] text-[14px] font-[300]">
              <Link to="#">Jackets &amp; Coats</Link>
            </li>
            <li className="text-[#787878] mb-[5px] text-[14px] font-[300]">
              <Link to="#">Jeans</Link>
            </li>
            <li className="text-[#787878] mb-[5px] text-[14px] font-[300]">
              <Link to="#">Pants &amp; Leggings</Link>
            </li>
            <li className="text-[#787878] mb-[5px] text-[14px] font-[300]">
              <Link to="#">Rompers &amp; Jumpsuits</Link>
            </li>
            <li className="text-[#787878] mb-[5px] text-[14px] font-[300]">
              <Link to="#">Shirts &amp; Blouses</Link>
            </li>
            <li className="text-[#787878] mb-[5px] text-[14px] font-[300]">
              <Link to="#">Shirts</Link>
            </li>
            <li className="text-[#787878] mb-[5px] text-[14px] font-[300]">
              <Link to="#">Sweaters &amp; Knits</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Category;
