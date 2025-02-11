
import React, { useState } from "react";
import { motion, useAnimation } from "motion/react";

const Featured = () => {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "120%" });
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-2 border-zinc-700 pb-15">
        <h1 className='text-6xl font-["Neue_Montreal"] tracking-tight'>
          Featured Projects
        </h1>
      </div>
      <div className="cards flex justify-between pt-20 px-20 pb-10 gap-10">
        <div className="w-1/2">
          <div className="flex items-center ">
            <span className="w-4 h-4 mb-4 mr-3 rounded-full bg-black"></span>
            <span className="mb-4 uppercase">fyde</span>
          </div>

          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer h-[85vh] relative  bg-cover bg-center  "
          >
            <h1
              style={{ fontFamily: "f1" }}
              className=" font-extrabold flex overflow-hidden  text-[#cdea68]  absolute pl-8 pt-4 left-full  -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-9xl leading-none "
            >
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "120%" }}
                  className="inline-block "
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className='overflow-hidden bg-[url("https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png")]  card w-full rounded-lg bg-cover bg-center h-full  '></div>
          </motion.div>
        </div>
        <div className="w-1/2">
          <div className="flex items-center ">
            <span className="w-4 h-4 mb-4 mr-3 rounded-full bg-black"></span>
            <span className="mb-4 uppercase">vise</span>
          </div>
          <motion.div 
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
          className="cardcontainer relative h-[85vh] bg-cover bg-center  ">
            <h1
              style={{ fontFamily: "f1" }}
              className=" flex overflow-hidden font-extrabold  text-[#cdea68]  absolute pt-4 pr-8 right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-9xl leading-none "
            >
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "120%" }}
                  className="inline-block "
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className='overflow-hidden card w-full rounded-lg bg-green-600 bg-[url("https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg")] border-2 border-zinc-700 bg-cover bg-center h-full  '></div>
          </motion.div>
        </div>
      </div>
       {/* section-2  */}
       <div className="cards flex justify-between px-20 py-8 gap-10">
        <div className="w-1/2">
          <div className="flex items-center ">
            <span className="w-4 h-4 mb-4 mr-3 rounded-full bg-black"></span>
            <span className="mb-4 uppercase">TRAWA</span>
          </div>

          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer h-[85vh] relative  bg-cover bg-center  "
          >
            <h1
              style={{ fontFamily: "f1" }}
              className=" font-extrabold flex overflow-hidden  text-[#cdea68]  absolute pl-8 pt-4 left-full  -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-9xl leading-none "
            >
              {"TRAWA".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "120%" }}
                  className="inline-block "
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.02 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className='overflow-hidden bg-[url("https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg")]  card w-full rounded-lg bg-cover bg-center h-full  '></div>
          </motion.div>
        </div>
        <div className="w-1/2">
          <div className="flex items-center ">
            <span className="w-4 h-4 mb-4 mr-3 rounded-full bg-black"></span>
            <span className="mb-4 uppercase">BLACK BOOK </span>
          </div>
          <motion.div 
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
          className="cardcontainer relative h-[85vh] bg-cover bg-center  ">
            <h1
              style={{ fontFamily: "f1" }}
              className=" flex overflow-hidden font-extrabold  text-[#cdea68]  absolute pt-4 pr-8 right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-9xl leading-none "
            >
              {"BLACK BOOK".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "120%" }}
                  className="inline-block "
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className='overflow-hidden card w-full rounded-lg bg-green-600 bg-[url("https://ochi.design/wp-content/uploads/2022/06/Frame-3876-1326x1101.jpg")] border-2 border-zinc-700 bg-cover bg-center h-full  '></div>
          </motion.div>
        </div>
      </div>
       
    </div>
  );
};

export default Featured;
