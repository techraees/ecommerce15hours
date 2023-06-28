import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DocumentScannerOutlinedIcon from "@mui/icons-material/DocumentScannerOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import HailOutlinedIcon from "@mui/icons-material/HailOutlined";

const ProfileDetails = ({ user }) => {
  const { name, email, _id, role, avatar } = user;
  return (
    <div>
      <h2 className="font-[700] text-[40px] mb-[20px]">Personal Information</h2>
      <p className="leading-[1.5] text-[18px] font-[400] text-[rgba(0,0,0,0.7)]">
        Manage your personal information, including phone numbers and email
        address where you can be contacted
      </p>
      <div className="grid grid-cols-2 gap-5 justify-end my-[20px]">
        <div className="relative flex flex-col justify-center px-[25px] py-[20px] bg-[#f6f5f8] rounded-xl h-[110px] w-[350px]">
          <h3 className="font-[700] text-[18px] mb-[5px]">Name</h3>
          <p className="text-[#9c9c9c]">{name}</p>
          <AccountCircleOutlinedIcon
            className="text-blue-500 absolute top-[25px] right-[25px] "
            fontSize="large"
          />
        </div>
        <div className="relative flex flex-col justify-center px-[25px] py-[20px] bg-[#f6f5f8] rounded-xl h-[110px] w-[350px]">
          <h3 className="font-[700] text-[18px] mb-[5px]">_ID</h3>
          <p className="text-[#9c9c9c]">{_id}</p>
          <DocumentScannerOutlinedIcon
            className="text-blue-500 absolute top-[25px] right-[25px] "
            fontSize="large"
          />
        </div>
        <div className="relative flex flex-col justify-center px-[25px] py-[20px] bg-[#f6f5f8] rounded-xl h-[110px] w-[350px]">
          <h3 className="font-[700] text-[18px] mb-[5px]">Email</h3>
          <p className="text-[#9c9c9c]">{email}</p>
          <EmailOutlinedIcon
            className="text-blue-500 absolute top-[25px] right-[25px] "
            fontSize="large"
          />
        </div>
        <div className="relative flex flex-col justify-center px-[25px] py-[20px] bg-[#f6f5f8] rounded-xl h-[110px] w-[350px]">
          <h3 className="font-[700] text-[18px] mb-[5px]">Role</h3>
          <p className="text-[#9c9c9c]">{role}</p>
          <ManageAccountsOutlinedIcon
            className="text-blue-500 absolute top-[25px] right-[25px] "
            fontSize="large"
          />
        </div>
        <div className="relative flex flex-col justify-center px-[25px] py-[20px] bg-[#f6f5f8] rounded-xl h-[110px] w-[350px]">
          <h3 className="font-[700] text-[18px] mb-[5px]">public_id</h3>
          <p className="text-[#9c9c9c]">{avatar.public_id}</p>
          <HailOutlinedIcon
            className="text-blue-500 absolute top-[25px] right-[25px] "
            fontSize="large"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
