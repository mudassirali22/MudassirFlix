import React from "react";

const Loader = () => {
  return (
    <>
      <div className="relative flex justify-center items-center pt-50 ">
        <div className="absolute animate-spin rounded-full h-40 w-40 border-t-4 border-b-4 border-purple-500"></div>
        <img
          src="https://www.svgrepo.com/show/509009/avatar-thinking-3.svg"
          className="rounded-full w-35 h-32"
        />
      </div>
      <h1 className="text-4xl text-purple-500 font-bold text-center pt-10"  > Loading......</h1>
    </>
  );
};

export default Loader;
