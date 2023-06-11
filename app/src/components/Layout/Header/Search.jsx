import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  const navigate = useNavigate();
  const [isFocused, setIsFocused] = useState(false);
  const [keyword, setKeyword] = useState("");
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
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
        <div
          className={
            isFocused
              ? "h-[85px] w-[400px] duration-500 ease-in-out "
              : "h-[85px] duration-500  ease-in-out w-[200px]"
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
