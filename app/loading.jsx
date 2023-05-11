import React from "react";

const loading = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div class="spinner">
        //make this a component
        <div class="double-bounce1"></div>
      </div>
    </div>
  );
};

export default loading;
