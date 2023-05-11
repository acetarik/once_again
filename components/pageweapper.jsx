"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Pagewrapper() {
  return (
    <motion.div
      className="bg-red-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      exit={{ opacity: 0 }}
    ></motion.div>
  );
}
