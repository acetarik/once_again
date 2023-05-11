"use client";
import { motion } from "framer-motion";
import React, { useState, useContext, useEffect } from "react";
import PocketBase from "pocketbase";
import { TbUserCircle } from "react-icons/tb";
// import GlobalContext from "../app/api/contexts/GlobalContetxts";
import GlobalContext from "../app/api/contexts/GlobalContetxts";
// async function loginUser(email, password) {
//   const gcontext = useContext(GlobalContext);
//   const pb = new PocketBase("http://127.0.0.1:8090");
//   try {
//     const authData = await pb
//       .collection("users")
//       .authWithPassword(email, password);
//     // gcontext.setLogin(true);
//     // console.log(gcontext.login);

//     // handle login success
//     // alert("Login success");
//   } catch (error) {
//     // handle login error
//     alert("Login failed");
//   }

//   // after the above you can also access the auth data from the authStore
//   //   console.log({ authData });
//   //   console.log({ tokken: pb.authStore.token });
//   //   console.log({ model: pb.authStore.model.id });
// }
export default function Logins(props) {
  const gcontext = useContext(GlobalContext);

  async function loginUser(email, password) {
    const pb = new PocketBase("http://127.0.0.1:8090");
    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(email, password);
      //   gcontext.handlelogin;
      //
      // useEffect(() => {
      //   handlelogin

      // }, [third]);
      // console.log(gcontext.handlelogin());
      await gcontext.handlelogin();

      console.log(7);

      console.log(gcontext.login);

      // handle login success
      alert("Login success");
    } catch (error) {
      // handle login error
      alert("Login failed");
    }

    // after the above you can also access the auth data from the authStore
    //   console.log({ authData });
    //   console.log({ tokken: pb.authStore.token });
    //   console.log({ model: pb.authStore.model.id });
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [data, setData] = useState({});
  // setData = async () => {
  //   const fetcher = await fetch("../api/bonga", {
  //     method: "POST",
  //     body: JSON.stringify({ hello: "world" }),
  //   });
  // };

  return (
    <div className="h-[100%] w-[33.3333%] jk2 rounded-tr-2xl rounded-br-2xl flex flex-col justify-center gap-10 font-sans">
      <h1 className="text-[2rem] mx-auto underline">Login</h1>
      <TbUserCircle className="text-[3.5rem] stroke-1 mx-auto" />
      <ul className="flex flex-col flex-wrap font-sans ">
        <li className="mx-auto">
          <label htmlFor="name">Email </label>
          <br />{" "}
          <input
            className="text-pink-900"
            type="email"
            name="name"
            id="name"
            autoComplete="off"
            autoCorrect="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </li>
        <li className="mx-auto">
          <label htmlFor="user-p">Password </label>
          <br />{" "}
          <input
            type="password"
            name="user-p"
            id="user-p"
            autoComplete="off"
            autoCorrect="off"
            className="text-pink-900"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </li>
        <motion.button
          className="h-8 rounded-2xl w-20 mx-auto mt-[4%] bg-gray-900"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => loginUser(email, password)}
        >
          Login
        </motion.button>
      </ul>
    </div>
  );
}
