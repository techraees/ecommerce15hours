import React, { useState, useEffect } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className=" fixed bottom-[60px] right-[60px]">
      {isScrolled && (
        <button
          className="bg-red-600 hover:bg-red-300 hover:duration-300 w-[10px] rotate-[270deg] text-white font-bold py-2 px-4 rounded"
          onClick={scrollToTop}
        >
          <ArrowForwardIosIcon />
        </button>
      )}
    </div>
  );
};

export default Header;
