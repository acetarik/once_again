"use client";
import React, { useEffect } from "react";
import PocketBase from "pocketbase";
import { useState, useContext } from "react";
import Image from "next/image";
// import image1 from "../../assets/last1.png";
import Link from "next/link";
import GlobalContext from "../app/api/contexts/GlobalContetxts";
import { setgid } from "process";
//{<Link href="/register" className="h-[100%] bg-black" />}
//{<Image src={image1} alt="image1" className="w-[15rem] h-[15rem]" />}
const Login3 = (props) => {
  const {
    glogin,
    setgLogin,
    guser,
    setgUser,
    ghandlelogin,
    gsetuserid,
    guserid,
  } = useContext(GlobalContext);
  const [l_email, setL_email] = useState("");
  const [l_password, setL_password] = useState("");
  const loginUser = async (email, password) => {
    const pb = new PocketBase("http://127.0.0.1:8090");
    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(email, password);
      const { username, id } = await pb
        .collection("users")
        .getFirstListItem(`email='${email}'`);
      console.log({ record: username, id: id });

      // localStorage.setItem("username", username);
      // localStorage.setItem("LOGGEDIN", true);
      // console.log({
      //   username: localStorage.getItem("username"),
      //   LOGGED: localStorage.getItem("LOGGEDIN"),
      // });
      await setgLogin(true);
      await setgUser(username);
      await gsetuserid(id);
      console.log(glogin);
      alert("Login success");
    } catch (error) {
      // handle login error
      // localStorage.setItem("LOGGEDIN", false);

      alert("Login failed");
    }
  };
  return (
    <div
      className={`${
        props.isOpen ? "fixed" : "hidden"
      } top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90rem]`}
    >
      <div className="bg-transparent h-screen w-[50%] m-auto flex flex-row justify-center z-[5] rounded-2xl">
        <div className="w-[50%] h-[50%] m-auto bg-white rounded-l-3xl flex flex-col justify-center items-center">
          <button
            className="text-center bg-black h-20 w-20 top-0 left-0 text-white"
            onClick={props.setisOpen}
          >
            X
          </button>
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
                value={l_email}
                onChange={(e) => setL_email(e.target.value)}
                className="h-[2rem] rounded-xl bg-slate-200"
              />
            </li>
            <li>
              <input
                placeholder="Password"
                type="text"
                value={l_password}
                onChange={(e) => setL_password(e.target.value)}
                className="h-[2rem] rounded-xl bg-slate-200"
              />
            </li>
          </ul>
          <div className="flex flex-col  gap-3 justify-around items-center">
            <button
              className="button rounded-2xl w-[14rem] hover:bg-[#e2b808] bg-[#3bab5a]"
              onClick={() => {
                loginUser(l_email, l_password);
                props.handler;
              }}
            >
              <h1 className="text-white">Login</h1>
            </button>
            <button className="button rounded-2xl w-[14rem] hover:bg-[#e2b808] bg-[#3bab5a]">
              <Link href="/register" className="h-[100%] w-[100%]">
                <h1 className="text-white">Create Account</h1>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-8 z-10">
        {props.children}
      </div>
    </div>
  );
};

export default Login3;
