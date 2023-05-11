"use client";
import React from "react";
import { useState, useEffect, useContext } from "react";
import Login3 from "./login3";
import Link from "next/link";
import Loginblock from "./loginblock";
import GlobalContext from "../app/api/contexts/GlobalContetxts";

const Nav2 = () => {
  const { glogin, setgLogin, guser, setgUser, ghandlelogin } =
    useContext(GlobalContext);
  const [isLogin, setisLogin] = useState(false);
  const handleLogin = () => {
    setisLogin(true);
  };
  const handleClose = () => {
    setisLogin(false);
  };
  const ayo = () => {
    useEffect(() => {
      const isLoggedIn = localStorage.getItem("LOGGEDIN");
    }, []);
  };
  //localstorage
  const [hello, sethello] = useState(false);
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("LOGGEDIN");
    sethello(isLoggedIn);
    return () => {
      localStorage.setItem("LOGGEDIN", false);
    };
  }, []);
  console.log({ hellos: hello });
  return (
    <>
      {isLogin && (
        <Login3
          isOpen={isLogin}
          handler={ayo}
          setisOpen={handleClose}
          className="overlay z-[200000000] absolute top-0"
        />
      )}
      <nav className="flex flex-row justify-between w-screen overflow-x-hidden bg-[#e2b714] h-20 text-white text-lg font-bold sticky top-0">
        <div className="my-auto w-auto ml-[3rem] flex flex-row justify-center text-center">
          {" "}
          تشکیل|
        </div>
        <ul className="flex flex-row justify-center gap-20 w-screen my-auto">
          <li>ABOUT</li>
          <li>INFO</li>
          <li>CONTACT{console.log({ hello: hello })}</li>
          <button className="bg-red-500 w-20 h-11">
            <Link href="/appointment"> book app</Link>
          </button>
        </ul>
        {glogin ? (
          <h1 className="h-10  w-10 text-center mr-[10rem] bg-red-300 rounded">
            🧮 {guser}
          </h1>
        ) : (
          <button
            className="button my-auto bg-[#258730] rounded-xl mr-[100px] w-20 h-10 hover:bg-red-300"
            onClick={handleLogin}
          >
            LOGIN
          </button>
        )}
      </nav>
    </>
  );
};

export default Nav2;
