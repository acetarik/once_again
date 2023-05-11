"use client";
import React, { useState, useEffect } from "react";
import { TbUserCircle } from "react-icons/tb";
import Image from "next/image";
import PocketBase from "pocketbase";
import Link from "next/link";

// import image from "../../assets/retro.png";
export default function RegisterPage() {
  const createUser = async (name, password, email, gender, dob) => {
    const pb = new PocketBase("http://127.0.0.1:8090");

    // example create data
    const data = {
      username: name,
      email: email,
      emailVisibility: true,
      password: password,
      passwordConfirm: password,
      name: name,
      dob: new Date(dob),
    };
    try {
      const record = await pb.collection("users").create(data);
    } catch {
      alert(1);
    }
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setdob] = useState("");
  let names;
  // useEffect(() => {
  //   names = fname + lname;
  // }, [fname, lname]);
  return (
    <div className="h-[70%] w-[40%] rounded-3xl bg-[#258730] mx-auto flex flex-col justify-center gap-10 nuni">
      <TbUserCircle className="stroke-1 text-[6rem] mx-auto" />
      <ul className="mx-auto flex flex-col gap-5">
        <li className="mx-auto flex gap-[15%] justify-center">
          <input
            type="text"
            name="fname"
            id="fname"
            placeholder="First Name"
            className="h-10 rounded-3xl text-center"
            onChange={(e) => setfName(e.target.value)}
          />

          <input
            className="h-10 rounded-3xl text-center"
            type="text"
            name="reglname"
            id="reglname"
            placeholder="Last Name"
            onChange={(e) => setlName(e.target.value)}
          />
        </li>
        <li className="mx-auto flex justify-center gap-[15%]">
          <input
            type="text"
            id="regem"
            name="regem"
            placeholder="Email"
            className="text-center h-10 rounded-2xl"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Date of Birth"
            type="datetime-local"
            id="regdob"
            value={dob}
            onChange={async (e) => {
              setdob(e.target.value);
              // console.log(dob);
            }}
            name="regdob"
            className="text-center h-10 rounded-2xl"
            // onChange={(e)=>{}}
          />
        </li>
        <li className="mx-auto flex justify-center gap-[15%]">
          <input
            type="password"
            id="passw"
            name="passw"
            placeholder="Password"
            className="text-center h-10 rounded-2xl"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            placeholder="Confirm Password"
            type="password"
            id="cpassw"
            name="cpassw"
            className="text-center h-10 rounded-2xl"
          />
        </li>
        <li className="mx-auto">
          <div className="wrapper">
            <input
              type="radio"
              name="select"
              id="option-1"
              // defaultcheceked
              value="female"
              onSelect={(e) => setGender(e.target.value)}
            />
            <input
              type="radio"
              name="select"
              id="option-2"
              value="male"
              onSelect={(e) => setGender(e.target.value)}
            />
            <label htmlFor="option-1" className="option option-1">
              <div className="dot"></div>
              <span>Female</span>
            </label>
            <label htmlFor="option-2" className="option option-2">
              <div className="dot"></div>
              <span>Male</span>
            </label>
          </div>
        </li>
        <li className="mx-auto">
          <button
            className="regbtn"
            onClick={() => {
              createUser(fname + lname, password, email, gender, dob);
            }}
          >
            <Link href="/mainpage">
              {" "}
              <span className="span-mother">
                <span>R</span>
                <span>E</span>
                <span>G</span>
                <span>I</span>
                <span>S</span>
                <span>T</span>
                <span>E</span>
                <span>R</span>
              </span>
              <span className="span-mother2">
                <span>R</span>
                <span>E</span>
                <span>G</span>
                <span>I</span>
                <span>S</span>
                <span>T</span>
                <span>E</span>
                <span>R</span>
              </span>
            </Link>
          </button>
        </li>
      </ul>
    </div>
  );
}
