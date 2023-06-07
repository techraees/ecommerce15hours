import React from "react";
import { Grid } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-[100%] w-[100%] bg-[rgba(0,0,0,0.01)]">
      <Grid
        height="40"
        width="40"
        color="#787878"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
