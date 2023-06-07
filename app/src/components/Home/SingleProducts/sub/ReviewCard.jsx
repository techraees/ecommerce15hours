import React from "react";
import Profile from "../../../../data/images/profile.png";
import RatingsStars from "react-rating-stars-component";
import Tooltip from "@mui/material/Tooltip";

const ReviewCard = ({ review }) => {
  // Stars Options
  const options = {
    edit: false,
    count: 5,
    color: "rgba(20,20,20,0.1)",
    activeColor: "#FF9900",
    size: window.innerWidth < 600 ? 20 : 25,
    value: review.rating,
    isHalf: true,
  };
  return (
    <div className="flex-none drop-shadow-[0_0_5px_rgba(0,0,0,0.226)] text-center border-[1px] p-[1vmax] border-solid border-[rgba(56,56,56,0.116)] w-[30vmax] flex-col items-center m-[1vmax]">
      <img src={Profile} alt="Profile" className="w-[5vmax] m-auto" />
      <p className="text-[rgba(0,0,0,0.836)] font-[600] text-[0.9vmax] font-['Poppins']">
        {review.name}
      </p>
      <div className="flex items-center justify-center">
        <RatingsStars {...options} />
      </div>
      <Tooltip title={review.comment}>
        <span className="line-clamp-5 text-[rgba(0,0,0,0.445)] text-left font-[300] text-[0.8vmax] font-['Poppins']">
          {review.comment}
        </span>
      </Tooltip>
    </div>
  );
};

export default ReviewCard;
