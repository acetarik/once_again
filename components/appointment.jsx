"use client";
import React, { useState, useContext } from "react";
// import SelectDemo from "./select";
import Link from "next/link";
import GlobalContext from "../app/api/contexts/GlobalContetxts";
import PocketBase from "pocketbase";

const Appointment = ({
  settime,
  setdate,
  setconcern,
  setapp,
  consultantid,
}) => {
  const {
    glogin,
    setgLogin,
    guser,
    setgUser,
    ghandlelogin,
    gsetuserid,
    guserid,
  } = useContext(GlobalContext);

  const [textareaValue, setTextareaValue] = useState("");
  const [selTime, setSelTime] = useState("");
  async function handleSubmit() {
    try {
      const pb = new PocketBase("http://127.0.0.1:8090");

      // example create data
      const data = {
        date_time: "2022-01-01 10:00:00.123Z",
        user: `${guserid}`,
        consultant: `${consultantid}`,
      };

      const record = await pb.collection("appointments").create(data);
      alert("appointment created");
    } catch (error) {
      alert(error);
    }
  }
  const handleTextareaChange = async (event) => {
    await setTextareaValue(event.target.value);
    setconcern(textareaValue);
    console.log(textareaValue);
  };

  const handleChange = (e) => {
    setSelTime(e.target.value);
    settime(selTime);
    console.log(selTime);
  };
  return (
    <div className="flex flex-col justify-center top-0 left-0 h-screen w-screen  absolute z-20 text-center ">
      <div className="flex flex-col h-[50%] w-[30%] justify-center text-center bg-green-500 mx-auto gap-5 rounded-xl z-50 blur-none absolute translate-x-[120%]">
        <textarea
          className="rounded-xl"
          value={textareaValue}
          onChange={handleTextareaChange}
          cols={150}
          rows={5}
        />
        <input
          height={20}
          type="date"
          placeholder="Date"
          className="text-center rounded-3xl h-10"
          onChange={setdate}
        />
        <div className="flex flex-row justify-center gap-6">
          <div
            className="bg-white h-10 rounded-3xl w-40 my-auto pt-2
        "
          >
            {" "}
            <label htmlFor="">TIME</label>
            <select
              value={selTime}
              onChange={handleChange}
              name="time"
              id="time"
            >
              <option value="09:00">09:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="14:00">02:00 PM</option>
              <option value="15:00">03:00 PM</option>
              <option value="16:00">O4:00 PM</option>
            </select>
            <p>selected value:{selTime}</p>
            <p></p>
          </div>
        </div>
        <button
          className="h-12 rounded-lg bg-yellow-500 w-20 mx-auto "
          onClick={() => {
            console.log(guserid);

            handleSubmit();
            setapp(false);
          }}
        >
          Book
        </button>
      </div>
    </div>
  );
};

export default Appointment;
