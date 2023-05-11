import React from "react";
import Logins from "./login";
import Register from "./register";

export default function Loginblock() {
  return (
    <>
      <div className="h-[60%] w-[70%] flex sm:flex-col lg:flex-row bg-white rounded mx-auto rounded-tl-2xl rounded-bl-2xl rounded-tr-2xl rounded-br-2xl shadow-blue-900 shadow-2xl ">
        <Register className="w-[66.666%] " />
        <Logins className="flex-1" />
      </div>
    </>
  );
}
