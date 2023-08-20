import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import Backdrop from "@mui/material/Backdrop";

const Search = () => {
  const navigate = useNavigate();
  const [isFocused, setIsFocused] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    setOpen(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
    setOpen(false);
  };
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    console.log(keyword.trim());
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate("/products");
    }
  };
  return (
    <>
      <form onSubmit={searchSubmitHandler}>
        <Backdrop open={open} />
        <div
          style={{ zIndex: "" }}
          className={
            isFocused
              ? "h-[85px] w-[400px] bg-[white] duration-500 ease-in-out relative"
              : "h-[85px] duration-500 bg-[white] ease-in-out w-[200px] relative"
          }
        >
          <button type="submit">
            <SearchIcon
              className="absolute top-[32.5px] left-[20px] "
              style={{ width: "20px", height: "20px" }}
            />
          </button>
          <input
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={(e) => setKeyword(e.target.value)}
            type="text"
            placeholder="Type for Search"
            className="outline-none h-[100%]  w-[200px] pl-[60px] pr-[15px] text-[#787878]"
          />
        </div>
      </form>
    </>
  );
};

export default Search;
