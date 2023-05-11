"use client";
// import React from "react";
// import { useInView } from "react-intersection-observer";

// export default function About() {
//   const { ref, inView } = useInView({
//     threshold: 0.5, // Change this value to adjust when the animation starts
//   });

//   return (
//     <div
//       ref={ref}
//       className={`${
//         inView ? "opacity-100 translate-y-0" : " translate-y-10 opacity-0"
//       } transition-opacity duration-1000 h-[30rem] text-center flex justify-center flex-col`}
//     >
//       <h1>ABOUT</h1>
//     </div>
//   );
// }
import React from "react";
import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const aboutRef = useRef(null);
  const { ref, inView } = useInView({ threshold: 0.5 });
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };
  return (
    <div
      ref={ref}
      className="h-[20rem] mx-auto w-[95%] mt-[20%] rounded-xl bg-[#910c00] text-center flex justify-center flex-col"
    >
      <AnimatePresence>
        {inView && (
          <motion.div
            // ref={ref}
            className="text-2xl my-auto"
            variants={variants}
            initial="hidden"
            animate="visible"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            ipsa. Quas quisquam odio fugiat tempore blanditiis ea, cum fuga eum,
            architecto quae nesciunt! Vel, sint? Dicta expedita modi incidunt
            dolores? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Unde facere ratione in similique id asperiores, eius dolorum?
            Officiis laborum, nostrum libero doloremque cumque id alias sapiente
            iure ad accusantium cupiditate!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
