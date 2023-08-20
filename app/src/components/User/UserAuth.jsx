import React, { useEffect, useState } from "react";

import "./sub/user.css";
import video from "../../fdata/images/backgroundVideo.mp4";
import HandleLogin from "./sub/HandleLogin";
import HandleSignup from "./sub/HandleSignup";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Signup = ({ stateValue }) => {
  const [showSignup, setShowSignup] = useState(false);
  const [formTop, setFormTop] = useState(0);
  const [login, setLogin] = useState(true);

  const handleCloseSignup = () => {
    setShowSignup(false);
  };

  // Login Handle
  const handleLogin = (status) => {
    setLogin(status);
  };
  useEffect(() => {
    const handleScroll = () => {
      console.log("Scroll is calling bro! Don't Worry");
    };
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    setFormTop(50 - scrollTop);
    window.addEventListener("scroll", handleScroll);

    setShowSignup(stateValue);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [stateValue]);

  return (
    <div className="">
      <div className="fixed top-[0px]  w-[30%] z-[10000] bg-[white] h-screen overflow-y-auto ">
        <Link
          to="/"
          className="fixed top-[20px] right-[30px] hover:bg-black duration-300 "
        >
          <Button>Back</Button>
        </Link>
        <div className="flex  text-center  w-full text-[#999] text-[18px]">
          <div
            onClick={() => {
              handleLogin(true);
            }}
            className={
              login == true
                ? "p-5 w-full justify-self-center cursor-pointer border-b-solid border-b-[5px] border-b-[#1565c0] text-[#1565c0] duration-300"
                : "p-5 w-full justify-self-center cursor-pointer  duration-300"
            }
          >
            LOGIN
          </div>
          <div
            onClick={() => {
              handleLogin(false);
            }}
            className={
              login == false
                ? "p-5 w-full justify-self-center cursor-pointer border-b-solid border-b-[5px] border-b-[#1565c0] text-[#1565c0] duration-300"
                : "p-5 w-full justify-self-center cursor-pointer  duration-300"
            }
          >
            REGISTER
          </div>
        </div>{" "}
        <div className=" px-[50px] pb-[30px] overflow-auto">
          {login ? <HandleLogin /> : <HandleSignup />}
        </div>
      </div>
      <div className="fixed inset-0  w-[100%] z-[1000]">
        <video
          src={video}
          autoPlay
          loop
          width="100%"
          className="blur-sm"
        ></video>
      </div>
    </div>
  );
};

export default Signup;
