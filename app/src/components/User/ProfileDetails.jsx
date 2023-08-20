import React, { useState, useEffect } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DocumentScannerOutlinedIcon from "@mui/icons-material/DocumentScannerOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import HailOutlinedIcon from "@mui/icons-material/HailOutlined";
import DownloadIcon from "@mui/icons-material/Download";
import { TextField } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { toast } from "react-toastify";

import "./profile.css";

import { useDispatch, useSelector } from "react-redux";
import { UPDATE_PROFILE_RESET } from "../../redux/constants/userConstants";
import {
  updateProfile,
  loadUser,
  clearErrors,
} from "../../redux/actions/userAction";

const ProfileDetails = ({ borderValue }) => {
  const { user } = useSelector((state) => state.user);
  const { error, isUpdated, loading } = useSelector((state) => state.profile);
  const { name, email, _id, role, avatar, createdAt } = user;
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Do something with the uploaded file
    console.log(file);
  };
  const date = new Date(createdAt);
  const day = date.getDate();
  const month = date.toLocaleString("en-us", { month: "long" });
  const year = date.getFullYear();
  const formattedDate = `${day} ${month} ${year}`;

  const options = [
    {
      name: "Name",
      realName: name,
      icons: (
        <AccountCircleOutlinedIcon
          className="text-blue-500 absolute top-[25px] right-[25px]"
          fontSize="large"
        />
      ),
      editable: true,
    },
    {
      name: "_ID",
      realName: _id,
      icons: (
        <DocumentScannerOutlinedIcon
          className="text-blue-500 absolute top-[25px] right-[25px]"
          fontSize="large"
        />
      ),
      editable: false,
    },
    {
      name: "Email",
      realName: email,
      icons: (
        <EmailOutlinedIcon
          className="text-blue-500 absolute top-[25px] right-[25px]"
          fontSize="large"
        />
      ),
      editable: false,
    },
    {
      name: "Role",
      realName: role,
      icons: (
        <ManageAccountsOutlinedIcon
          className="text-blue-500 absolute top-[25px] right-[25px]"
          fontSize="large"
        />
      ),
      editable: false,
    },
    {
      name: "Joining Date",
      realName: formattedDate,
      icons: (
        <ManageAccountsOutlinedIcon
          className="text-blue-500 absolute top-[25px] right-[25px]"
          fontSize="large"
        />
      ),
      editable: false,
    },
    {
      name: "Profile Photo",
      realName: avatar.url,
      icons: (
        <div className="relative ">
          <input
            type="file"
            className="hidden"
            onChange={handleFileUpload} // Replace handleFileUpload with your actual file upload function
          />
          <Tooltip title="Change Picture Now" placement="top">
            <DownloadIcon
              className={`"text-blue-500 absolute bottom-[25px] right-[2px] cursor-pointer " ${
                borderValue
                  ? "text-blue-500 absolute bottom-[35px] right-[2px] cursor-pointer uploadIcon"
                  : "text-blue-500 absolute bottom-[35px] right-[2px] cursor-pointer "
              }`}
              fontSize="large"
              onClick={() => {
                document.querySelector('input[type="file"]').click();
              }} // Trigger file input click when icon is clicked
            />
          </Tooltip>
        </div>
      ),
      editable: true,
    },
  ];

  // Editable Content Changes
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const handleFocus = (index) => {
    setFocusedIndex(index);
  };
  const [fieldValues, setFieldValues] = useState(
    options
      .map((profileBox) => {
        if (profileBox.editable) {
          return profileBox.realName;
        }
        return null;
      })
      .filter((value) => value !== null)
  );
  const [updateData, setUpdateData] = useState({});
  const handleValueChange = (index, value) => {
    setFieldValues((prevFieldValues) =>
      prevFieldValues.map((prevValue, i) => (i === index ? value : prevValue))
    );
    setUpdateData({ name: value });
  };
  const handleBlur = (data) => {
    setFocusedIndex(-1);
    dispatch(updateProfile(data));
  };

  // Updating the Profile Image
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [userAvatarPreview, setUserAvatarPreview] = useState("/vite.svg");

  // const registerDataChange = async (e) => {
  //   if (e.target.name === "avatar") {
  //     try {
  //       ImageResizer.imageFileResizer(
  //         e.target.files[0],
  //         200,
  //         200,
  //         "JPEG",
  //         100,
  //         0,
  //         (uri) => {
  //           setAvatar(uri);
  //           setAvatarPreview(uri);
  //         },
  //         "base64",
  //         400,
  //         50
  //       );
  //     } catch (error) {
  //       throw new Error(error);
  //     }
  //   } else {
  //     setUserData({ ...userData, [e.target.name]: e.target.value });
  //   }
  // };

  useEffect(() => {
    if (user) {
      setUserName(name);
      setUserEmail(email);
      setUserAvatarPreview(avatar.url);
    }
    if (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    if (isUpdated) {
      toast.success("Profile Updated Successfully!", {
        position: toast.POSITION.TOP_CENTER,
      });

      dispatch(loadUser());

      dispatch({
        type: UPDATE_PROFILE_RESET,
      });
    }
  }, [dispatch, error, isUpdated, user]);
  return (
    <div>
      <h2 className="font-[700] text-[40px] mb-[20px]">Personal Information</h2>
      <p className="leading-[1.5] text-[18px] font-[400] text-[rgba(0,0,0,0.7)]">
        Manage your personal information, including phone numbers and email
        address where you can be contacted
      </p>
      <div className="grid grid-cols-2 gap-5 justify-end my-[20px]">
        {options.map((profileBox, index) => (
          <div
            className={`relative flex flex-col justify-center px-[25px] py-[20px] bg-[#f6f5f8] rounded-xl h-[110px] w-[350px] ${
              borderValue && index === options.length - 1
                ? "boxBorder px-[18px] py-[20px]"
                : ""
            }`}
            key={index}
          >
            <h3 className="font-[700] text-[18px] mb-[5px]">
              {profileBox.name}
            </h3>
            {profileBox.editable ? (
              <TextField
                variant="standard"
                value={fieldValues[index]}
                onFocus={() => handleFocus(index)}
                onBlur={() => handleBlur(updateData.name)}
                onChange={(e) => handleValueChange(index, e.target.value)}
                InputProps={{
                  disableUnderline: focusedIndex !== index,
                  style: { padding: 0 },
                }}
              />
            ) : (
              <p className="text-[#9c9c9c] cursor-pointer">
                {profileBox.realName}
              </p>
            )}
            {profileBox.icons}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileDetails;
