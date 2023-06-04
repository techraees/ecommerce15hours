import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Color = () => {
  const colors = [
    { value: "#fff" },
    { value: "#969696" },
    { value: "#030303" },
    { value: "#0315ff" },
    { value: "#dc0647" },
    { value: "#fff56a" },
    { value: "#f26e51" },
    { value: "#9a8777" },
    { value: "#5b862a" },
    { value: "#8662a9" },
  ];
  return (
    <div className="mb-[50px]">
      <div className="mb-[30px] font-[700]">Color</div>
      <div className="flex flex-wrap justify-between">
        {colors.map((item, index) => (
          <Link
            className="mb-[15px]  mr-[12px] shadow-[0px_0px_5px_rgba(0,0,0,0.1)]"
            key={index}
          >
            <Box
              sx={{
                width: 30,
                height: 30,
                backgroundColor: item.value,
              }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Color;
