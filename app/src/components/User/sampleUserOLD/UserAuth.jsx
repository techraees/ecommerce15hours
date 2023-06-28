import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import { TextField, Button, InputAdornment } from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  Facebook,
  GitHub,
  Google,
} from "@mui/icons-material";

import "./sub/user.css";
import GoogleImg from "../../data/images/google.svg";
import FacebookImg from "../../data/images/facebook.svg";
import GithubImg from "../../data/images/Github.svg";
import SocialButton from "./sub/SocialButton";
import HandleLogin from "./sub/HandleLogin";
import HandleSignup from "./sub/HandleSignup";

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
    <AnimatePresence>
      {showSignup && (
        <motion.div
          initial={{ y: showSignup ? -1000 : 1000 }}
          animate={{ y: showSignup ? 0 : -1000 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="fixed inset-0 flex justify-center  items-center z-50 bg-black bg-opacity-60 container overflow-y-auto hide-scrollbar z-[10000]"
          style={{ transform: `translateY(${formTop}px)` }}
        >
          <IconButton
            onClick={handleCloseSignup}
            style={{
              position: "absolute",
              top: "15px",
              right: "15px",
              color: "#1565c0",
            }}
          >
            <Close />
          </IconButton>
          <motion.div
            initial={{ translateY: -20, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            exit={{ translateY: -20, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-white  rounded-lg shadow-lg  w-[430px]  mt-[250px] mb-[20px] relative "
          >
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
            <div className=" px-[50px] pb-[30px]">
              {login ? <HandleLogin /> : <HandleSignup />}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Signup;
