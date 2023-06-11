import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-[42vmax] w-[50vmax] bg-[rgba(0,0,255,0.01)]">
      <InfinitySpin
        height="200"
        width="200"
        color="#00a"
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
