import React from "react";
import { motion } from "motion/react";

const Marquee = () => {
  // return (
  //   <div 
  //     data-scroll 
  //     data-scroll-speed=".1" 
  //     data-scroll-section 
  //     className="w-full text-white py-10 sm:py-20 mt-5 sm:mt-10 rounded-tl-3xl rounded-tr-3xl bg-[#004d43]"
  //   >
  //     <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden">
  //       {[...Array(2)].map((_, index) => (
  //         <motion.h1
  //           key={index}
  //           initial={{ x: "0" }}
  //           animate={{ x: "-100%" }}
  //           transition={{ ease: "linear", duration: 10, repeat: Infinity }}
  //           style={{ fontFamily: "f1" }}
  //           className="text-[clamp(3rem, 20vw, 12rem)] leading-none font-semibold uppercase -mb-[clamp(1rem,5vw,3rem)] pt-5 sm:pt-10 pr-10 sm:pr-20"
  //         >
  //           We are ochi{" "}
  //         </motion.h1>
  //       ))}
  //     </div>
  //   </div>
  // );
  return (
    <div data-scroll data-scroll-speed =".1" data-scroll-section className="w-full  text-white  py-20 mt-10 rounded-t-2xl md:rounded-t-3xl  bg-[#004d43]">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap  overflow-hidden">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
          style={{ fontFamily: "f1" }}
          className="text-[28vw] md:text-[24vw] leading-none font-semibold uppercase -mb-[6vw] pt-4 md:pt-10 pr-20 "
        >
          We are ochi{" "}
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
          style={{ fontFamily: "f1" }}
          className="text-[28vw] md:text-[24vw] leading-none font-semibold uppercase -mb-[6vw] pt-4 md:pt-10 pr-20 "
        >
          We are ochi{" "}
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
