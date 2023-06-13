import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";

const FilterByRatings = ({ applyRatings }) => {
  const [selectedRating, setSelectedRating] = useState([0, 5]);
  const handleRatingChange = (event, value) => {
    if (event.target.checked) {
      setSelectedRating(value);
      applyRatings(value);
    } else {
      setSelectedRating(null);
      applyRatings(selectedRating); // Remove the filter if the rating is deselected
    }
  };
  const handleResetClick = () => {
    setSelectedRating([0, 5]);
    applyRatings([0, 5]); // Remove the filter on reset
  };

  return (
    <div className="mb-[20px]">
      <h3 className="mb-[15px] font-[700] text-[16px] text-blue-500">
        Ratings
      </h3>
      <FormControlLabel
        control={
          <Radio
            checked={selectedRating[0] === 4 && selectedRating[1] === 5}
            onChange={(e) => {
              handleRatingChange(e, [4, 5]);
            }}
            color="primary"
          />
        }
        label={
          <span className="flex justify-between">
            <Rating name="rating-5" value={5} readOnly />{" "}
            <p className="ml-[10px]">4 to 5</p>
          </span>
        }
      />
      <FormControlLabel
        control={
          <Radio
            checked={selectedRating[0] === 3 && selectedRating[1] === 4}
            onChange={(e) => handleRatingChange(e, [3, 4])}
            color="primary"
          />
        }
        label={
          <span className="flex justify-between">
            <Rating name="rating-4" value={4} readOnly />{" "}
            <p className="ml-[10px]">3 to 4</p>
          </span>
        }
      />
      <FormControlLabel
        control={
          <Radio
            checked={selectedRating[0] === 2 && selectedRating[1] === 3}
            onChange={(e) => handleRatingChange(e, [2, 3])}
            color="primary"
          />
        }
        label={
          <span className="flex justify-between">
            <Rating name="rating-3" value={3} readOnly />{" "}
            <p className="ml-[10px]">2 to 3</p>
          </span>
        }
      />
      <FormControlLabel
        control={
          <Radio
            checked={selectedRating[0] === 1 && selectedRating[1] === 2}
            onChange={(e) => handleRatingChange(e, [1, 2])}
            color="primary"
          />
        }
        label={
          <span className="flex justify-between">
            <Rating name="rating-2" value={2} readOnly />{" "}
            <p className="ml-[10px]">1 to 2</p>
          </span>
        }
      />
      <FormControlLabel
        control={
          <Radio
            checked={selectedRating[0] === 0 && selectedRating[1] === 1}
            onChange={(e) => handleRatingChange(e, [0, 1])}
            color="primary"
          />
        }
        label={
          <span className="flex justify-between">
            <Rating name="rating-1" value={1} readOnly />{" "}
            <p className="ml-[10px]">0 to 1</p>
          </span>
        }
      />
      <Button
        style={{ marginLeft: "150px" }}
        size="small"
        variant="contained"
        color="info"
        onClick={handleResetClick}
      >
        Reset
      </Button>
    </div>
  );
};

export default FilterByRatings;
