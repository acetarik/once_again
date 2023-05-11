//make a modal window for login that opens when you click the login button in react
// compare this snippet from components\login3.jsx:
import React from "react";
import Image from "next/image";
import image1 from "../assets/last1.png";

const Login3 = (props) => {
  return (
    <div className={`${props.isOpen ? "block" : "hidden"} z-50`}>
      <div className="bg-transparent h-screen w-[50%] m-auto flex flex-row justify-center z-[5] rounded-2xl">
        <div className="w-[50%] h-[50%] m-auto bg-white rounded-l-3xl flex flex-col justify-center items-center">
          <Image src={image1} alt="image1" className="w-[15rem] h-[15rem]" />
        </div>
        <div className="w-[50%] h-[50%] m-auto bg-white rounded-r-3xl flex flex-col justify-around items-center">
          <h1 className="text-[2rem] mt-5 z-[15] text-[#243228]">
            Member Login
          </h1>
          <ul className="flex flex-col gap-7 mt-[-50px]">
            <li>
              <input
                placeholder="Email"
                type="text"
                className="h-[2rem] rounded-xl bg-slate-200"
              />
            </li>
            <li>
              <input
                placeholder="Password"
                type="text"
                className="h-[2rem] rounded-xl bg-slate-200"
              />
            </li>
          </ul>
          <div className="flex flex-col  gap-3 justify-around items-center">
            <button className="button rounded-2xl w-[14rem] hover:bg-[#e2b808] bg-[#3bab5a]">
              <h1 className="text-white">Login</h1>
            </button>
            <button className="button rounded-2xl w-[14rem] hover:bg-[#e2b808] bg-[#3bab5a]">
              <h1 className="text-white">Create Account</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
