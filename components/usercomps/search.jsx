import React from "react";
import { TbSearch } from "react-icons/tb";

export default function Search() {
  return (
    <div className="flex flex-row h-[60%] text-2xl rounded-3xl my-auto ml-[30%] w-[30%] bg-pink-300 justify-center z-50">
      Search
      <TbSearch className="my-auto" />
    </div>
  );
}
