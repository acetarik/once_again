"use client";
import React from "react";
// import Navbar from "../../components/navbar";
// import Nav2 from "../../components/nav2";
import About from "../../components/about";
import Footer from "../../components/footer";
import Mainpagebg from "../../components/mainpagebg";
import Info from "../../components/info";
import BookAnApp from "../../components/bookanappointment";
export default function Minpage() {
  return (
    <div className="flex flex-col flex-wrap justify-center min-h-screen gap-6">
      <Mainpagebg className="mt-0 h-[100%]" />
      <About />
      <Info />
      <div className="h-screen flex flex-col justify-center">
        <div className="h-12 w-12 mx-auto border-purple-400">
          <div className="rale">HELLO</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
