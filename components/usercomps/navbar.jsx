import React from "react";
import Search from "./search";
export default function UNavbar() {
  return (
    <nav className="mt-10 w-[80%] mx-auto rounded-2xl h-14 bg-red-500 top-200 sticky urd text-3xl flex flex-row">
      <div className="my-auto ml-5">تشکیل</div>
      <Search />
    </nav>
  );
}
