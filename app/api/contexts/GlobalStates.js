"use client";
import React, { useState, useContext } from "react";
import Link from "next/link";
import GlobalContext from "./GlobalContetxts";

const GlobalStates = ({ children }) => {
  const [glogin, setgLogin] = useState(false);
  const [guser, setgUser] = useState(null);
  const [guserid, gsetuserid] = useState(null);
  const ghandlelogin = () => {
    setgLogin(true);
  };
  return (
    <GlobalContext.Provider
      value={{
        glogin,
        setgLogin,
        guser,
        setgUser,
        ghandlelogin,
        guserid,
        gsetuserid,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalStates;
