import React from "react";

export default function Card(params) {
  console.log("coloris ", params.color);
  return (
    <>
      <div
        className=" h-[20rem] w-[20rem] flex flex-col rounded-xl shadow-md text-center"
        style={{ backgroundColor: params.color }}
      >
        <h1>{params.title}</h1>
        <div>{params.content}</div>
      </div>
    </>
  );
}
