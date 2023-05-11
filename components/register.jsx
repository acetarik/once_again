import React from "react";
import Link from "next/link";

export default function Register() {
  return (
    <div className="h-[100%} sm:w-[100%] lg:w-[66.666%] jk3 border-r-2 rounded-tl-2xl rounded-bl-2xl text-center flex flex-col flex-wrap justify-center">
      <h1 className="text-[3rem] font-sans">Welcome to the Website</h1>
      <h3 className="text-[2rem]"> New to the Website?</h3>
      <button className="rounded-2xl text-blue-900 font-bold bg-white h-[1.5rem] w-[5rem] mx-auto hover:bg-red-500">
        <Link href="pages/register">Register</Link>
      </button>
      <h3></h3>
    </div>
  );
}
