import React, { useState, useEffect } from "react";
import ChevronUpIcon from "@mui/icons-material/ExpandLess";

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
    <div className="bg-[#000]">
      <button
        className={`fixed bottom-[60px] right-[60px] rounded-fill duration-500 transition-opacity ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundColor: "#f00" }}
        onClick={scrollToTop}
      >
        <ChevronUpIcon style={{ fontSize: 36, color: "white" }} />
      </button>
    </div>
  );
};

export default Header;
