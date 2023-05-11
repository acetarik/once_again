"use client";
import React from "react";
import Link from "next/link";
import About from "./about";
import { FiLogIn } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const sectionrefs = {
    about: useRef(null),
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 350) {
      // change 100 to your desired scroll position
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  return (
    <nav
      className={`flex flex-row mx-auto mt-2  mb-0 bg-red-500 rounded-3xl transition-all sticky top-0 h-16 z-50 nuni justify-between items-center ${
        isSticky ? "fixed w-[100%] rounded-[0%]" : "w-[70%]"
      }`}
    >
      <div className="flex flex-row">
        <div className="mx-3 my-auto urd">{isSticky ? "تشکیل |" : ""}</div>
        <div
          className="mx-3 my-auto"
          onClick={() => {
            sectionrefs.about.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          about us{" "}
          <div className="w-1 rounded-[0.25rem]  bg-blue-500 hover:w-full hover:opaity-100 h-3 transition-all duration-200"></div>
        </div>
        <div className="mx-3 my-auto">
          Situation in Pakistan
          <div className="w-1 rounded-[0.25rem]  bg-blue-500 hover:w-full hover:opaity-100 h-3 transition-all duration-200"></div>
        </div>
        <div className="mx-3 my-auto">
          our goals{" "}
          <div className="w-1 rounded-[0.25rem]  bg-blue-500 hover:w-full hover:opaity-100 h-3 transition-all duration-200 "></div>
        </div>
      </div>
      <button type="button" className="mr-3 justify-end">
        <Link href={"/pages/login"} className="flex flex-row">
          Login
          <FiLogIn className="my-auto" />
        </Link>
      </button>
    </nav>
  );
}
