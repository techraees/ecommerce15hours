import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import Box from "@mui/material/Box";

import ProfilePhoto from "../../fdata/images/profile.png";
import OrdersHistory from "./OrdersHistory";
import ProfileDetails from "./ProfileDetails";
import PaymentsDetails from "./PaymentsDetails";
import GiftCards from "./GiftCards";
import Loader from "../Layout/Loader/Loader";

import "./profile.css";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";

const Profile = () => {
  // Redux Data
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  const { name, email, role, avatar, _id } = user;
  const [activeId, setActiveId] = useState("personal");
  const [isLoading, setLoading] = useState(true);
  const [borderValue, setBorderValue] = useState(false);

  const handleDetail = (e) => {
    const clickedId = e.target.id;
    console.log(clickedId);
    setActiveId(clickedId);
    setLoading(true);
  };

  useEffect(() => {
    // Simulating a delay to showcase the loader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isLoading, user]);

  const renderContent = () => {
    switch (activeId) {
      case "personal":
        return <ProfileDetails borderValue={borderValue} />;
      case "billing":
        return <PaymentsDetails />;
      case "order":
        return <OrdersHistory />;
      case "gifts":
        return <GiftCards />;
      default:
        return <ProfileDetails />;
    }
  };

  return (
    <div className="w-[80%] m-auto my-[30px]">
      <div className="border-b-[2px] border-b-solid border-b-[9c9c9c] mb-[60px]">
        <div className="flex justify-between items-center mb-[20px]">
          <h1 className="font-[700] text-[24px]">Essence Account</h1>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-[900] font-bold py-2 px-10 rounded-full">
            Sign out
          </button>
        </div>
      </div>
      <div className="mb-[20px] grid grid-cols-3 gap-4">
        <div>
          <div>
            <div className="">
              <img
                src={avatar.url}
                alt={avatar.public_id}
                width="100%"
                className="w-[200px] h-[200px] rounded-full mb-[10px]"
              />
              <div
                className="top-[153px] rounded-full cursor-pointer w-[50%] mb-[10px] text-white p-1 font-[500] text-center bg-blue-500 duration-200 hover:bg-blue-800"
                onClick={() => setBorderValue(!borderValue)}
              >
                <Box component="span" sx={{ p: 2 }}>
                  Change Photo
                </Box>
              </div>
            </div>

            <h2 className="font-[700] text-[24px] mb-[8px]">{name}</h2>
            <p
              className="text-[#9c9c9c] mb-[48px]"
              onClick={() => console.log(handleDetail())}
            >
              {email}
            </p>
            <ul className="font-[700] text-[24px] text-[#9c9c9c]">
              <li
                className={
                  activeId === "personal"
                    ? "mb-[13px] text-[dodgerBlue]  cursor-pointer"
                    : "mb-[13px] cursor-pointer"
                }
                id="personal"
                onClick={(e) => handleDetail(e)}
              >
                Personal information
              </li>
              <li
                className={
                  activeId === "billing"
                    ? "mb-[13px] text-[dodgerBlue]  cursor-pointer"
                    : "mb-[13px] cursor-pointer"
                }
                onClick={(e) => handleDetail(e)}
                id="billing"
              >
                Billing & Payments
              </li>
              <li
                className={
                  activeId === "order"
                    ? "mb-[13px] text-[dodgerBlue]  cursor-pointer"
                    : "mb-[13px] cursor-pointer"
                }
                onClick={(e) => handleDetail(e)}
                id="order"
              >
                Order History
              </li>
              <li
                className={
                  activeId === "gifts"
                    ? "mb-[13px] text-[dodgerBlue]  cursor-pointer"
                    : "mb-[13px] cursor-pointer"
                }
                onClick={(e) => handleDetail(e)}
                id="gifts"
              >
                Gifts Cards
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-2">
          {isLoading ? (
            <Loader />
          ) : (
            <div className="animation-container">
              <motion.div
                className="box"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {renderContent()}
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
