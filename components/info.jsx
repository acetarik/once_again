"use client";
// import React, { useState } from "react";
import Card from "./card";
// import { AnimatePresence, motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

export default function Info() {
  return (
    <div className="flex flex-row flex-wrap justify-around">
      <div>
        <Card title="HELLO" content="lorem ipsum " color="#258730" />
      </div>

      <div>
        <Card title="HELLO" content="lorem ipsum " color="#258730" />
      </div>
      <div>
        <Card title="HELLO" content="lorem ipsum " color="#258730" />
      </div>
      <div>
        <Card title="HELLO" color="#910c00" content="lorem ipsum " />
      </div>
    </div>
  );
}
