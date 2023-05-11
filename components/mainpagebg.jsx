"use client";
import React from "react";
import Image from "next/image";
import Nav2 from "./nav2";
// import Pic1 from "../../assets/pla.jpg";

export default async function Mainpagebg() {
  return (
    <>
      <Nav2 className="mb-0 " />
      <div className="  flex flex-col  place-items-center bg-center text-lg text-white cust-img h-screen">
        <div className=" my-auto">
          <div className="pl-0"></div>
          <br />
          <div className="rale pl-0"></div>
        </div>
      </div>
    </>
  );
}
