import React, { useState, useRef } from "react";

const EditableContent = ({ value }) => {
  // Editable Range Slider Values
  const [content, setContent] = useState("Click");
  const [editing, setEditing] = useState(false);
  const divRef = useRef(null);

  const handleDivClick = () => {
    setEditing(true);
  };

  const handleInputChange = (event) => {
    let inputValue = event.target.value;
    const numericValue = parseInt(inputValue);
    console.log(numericValue);

    if (isNaN(numericValue) || numericValue > 2500) {
      inputValue = "2500";
    } else if (inputValue === "") {
      inputValue = "0";
    }

    setContent(inputValue);
  };

  const handleKeyDown = (event) => {
    const keyCode = event.keyCode || event.which;
    const isNumberKey = keyCode >= 48 && keyCode <= 57;
    const isBackspace = keyCode === 8;
    const isEnter = keyCode === 13;

    if (!isNumberKey && !isBackspace && !isEnter) {
      event.preventDefault();
    }

    if (isEnter) {
      event.preventDefault();
      divRef.current.blur();
    }
  };
  return (
    <span
      onClick={handleDivClick}
      contentEditable={editing}
      onBlur={() => setEditing(false)}
      onInput={handleInputChange}
      onKeyDown={handleKeyDown}
      style={{
        outline: "none",
        padding: "10px",
        paddingLeft: "0px",
        paddingRight: "0px",
      }}
      ref={divRef}
    >
      {value}
    </span>
  );
};

export default EditableContent;
