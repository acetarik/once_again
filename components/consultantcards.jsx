"use client";
import React, { useEffect, useState } from "react";
import Appointment from "./appointment";
// {app && (
//   <div className="h-screen w-screen blur bg-slate-500 opacity-50 z-1 absolute -translate-x-[33%] -translate-y-[40%]" />
// )}
const ConsulCards = ({ name, settime, setdate, setconcern, value }) => {
  const [app, setapp] = useState(false);
  return (
    <div>
      <div className="h-[13rem] w-[13rem] rounded-full bg-[#e9ef35] text-sm flex flex-col  justify-center text-center ">
        <ul className="gap-3 flex flex-col">
          <li className="mx-auto">
            <h1>{name}</h1>
          </li>
          <button
            value={`${value}`}
            className="button rounded-xl bg-yellow-500"
            onClick={(e) => {
              setapp(true);
              console.log(e.target.value);
            }}
          >
            BOOK AN APPOINTMENT
          </button>
        </ul>
      </div>

      {app && (
        <Appointment
          settime={settime}
          setdate={setdate}
          setconcern={setconcern}
          setapp={setapp}
          consultantid={value}
          //! this is the consultant id and i gotta make a new db request for this
        />
      )}
    </div>
  );
};
// {props.value}

export default ConsulCards;
