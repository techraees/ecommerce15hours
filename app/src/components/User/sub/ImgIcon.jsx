import React from "react";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const SocialButton = ({ title, img }) => {
  return (
    <div className="w-[32px] m-[10px] cursor-pointer">
      <img src={img} alt={title} width="80%" />
    </div>
  );
};

export default SocialButton;
