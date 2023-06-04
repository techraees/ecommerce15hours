import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import Logo from "../../../data/images/logo.svg";
import Bag from "../../../data/images/bag.svg";
import Heart from "../../../data/images/heart.svg";
import User from "../../../data/images/user.svg";

const Header = () => {
  return (
    <div className="bg-[white] fixed top-[0px] w-[100%] z-[900] hover:shadow-[0px_5px_30px_rgba(0,0,0,0.15)] ">
      <header className=" w-full  border-b-[1px] border-solid border-[#ebebeb] h-[85.8px]">
        <div className="flex justify-between ">
          <nav className="flex h-20 p-1.5 pl-20 items-center w-[50%]">
            <NavLink to="/" className="mr-8">
              <img src={Logo} alt="Essence" className="w-[74px] h-[16px]" />
            </NavLink>
            <div>
              <ul className="flex content-center ">
                <li className="px-3 leading-[34px] font-[400] text-[#787878]">
                  Shop
                </li>
                <li className="px-3 leading-[34px] font-[400] text-[#787878]">
                  Pages
                </li>
                <li className="px-3 leading-[34px] font-[400] text-[#787878]">
                  Blog
                </li>
                <li className="px-3 leading-[34px] font-[400] text-[#787878]">
                  Contact
                </li>
              </ul>
            </div>
            {/* <NavLink to="/">
              <Logo />
            </NavLink> */}
          </nav>
          <div className="flex  justify-end">
            <div className="border-[1px] border-solid border-[#ebebeb]">
              <NavLink to="/">
                <input
                  type="text"
                  placeholder="Type for Search"
                  className="outline-none h-[85px] border-b-[1px] border-[#ebebeb] border-solid w-[400px] pl-[60px] pr-[15px]"
                />
              </NavLink>
            </div>
            <div className="border-1-[1px] border-solid border-[#ebebeb] w-[90px]  h-[85px] ">
              <NavLink to="/wishlist" className="">
                <img
                  src={Heart}
                  alt="Heart Icon"
                  className="w-5 m-auto mt-[32.5px] "
                />
              </NavLink>
            </div>
            <div className="border-l-[1px] border-solid border-[#ebebeb] w-[90px] h-[85px]">
              <NavLink to="addtocart">
                <img
                  src={Bag}
                  alt="Heart Icon"
                  className="w-5 m-auto mt-[32.5px]"
                />
              </NavLink>
            </div>
            <div className="border-l-[1px] border-solid border-[#ebebeb] w-[90px] h-[85px]">
              <NavLink to="user">
                <img
                  src={User}
                  alt="Heart Icon"
                  className="w-5 m-auto mt-[32.5px]"
                />
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
