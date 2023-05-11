"use client";
import React, { useState, useEffect } from "react";
import PocketBase from "pocketbase";
//TODO : make cards for available consultants
import Appointment from "./appointment";

import Link from "next/link";
import ConsulCards from "./consultantcards";
async function broconsultants(setConsultants) {
  try {
    const pb = new PocketBase("http://127.0.0.1:8090");

    const record = await pb
      .collection("users")
      .getFullList({ filter: "role='user'" });
    console.log(1);
    const namesArray = record.map((obj) => {
      const { username, id } = obj;
      return { username, id };
    });

    // filter: "role=user",
    console.log({ record: namesArray });

    setConsultants(namesArray);
  } catch (error) {
    console.log("Error:", error);
    alert("Failed to retrieve records.");
  }
}
const BookAnApp = ({ setconcern, settime, setdate }) => {
  const [consultants, setConsultants] = useState([]);

  useEffect(() => {
    broconsultants(setConsultants);

    // setConsultants(broconsultants());
  }, []);
  useEffect(() => {
    console.log({ CONS: consultants });
  }, [consultants]);
  return (
    <div>
      <div className="flex flex-col justify-center">
        <div className="flex flex-row justify-center gap-[2rem] flex-wrap">
          {consultants.map((consultant, undex) => (
            <ConsulCards
              key={undex}
              name={`${consultant.username}`}
              value={consultant.id}
              settime={settime}
              setdate={setdate}
              setconcern={setconcern}
            /> //!todo: add id to key
          ))}
        </div>
      </div>
      <button className="h-10 w-30 bg-yellow-800">
        <Link href="/mainpage"> back to main page</Link>
      </button>
    </div>
  );
};

export default BookAnApp;
// <button
//   className="top-0 left-0 bg-red-500 button rounded-xl h-10 w-30"
//   onClick={() => {
//     broconsultants();
//     console.log(12222);
//   }}
// >
//   {" "}
//   book kro mjhay
// </button>
