import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "motion/react";
const LandingPage = () => {
  return (
    <motion.div 
    initial={{ backgroundColor: "	#27272a" }} 
    animate={{ backgroundColor: "#f1f1f1" }}  
    transition={{ duration: 2, delay: 2 }} 
    
    
    
    className="backdrop  w-full h-screen  flex items-center justify-center">
      <motion.div 
        initial={{scale:"70%",y:30}}
        animate={{scale:"100%",y:"0"}}
        transition={{ease:[0.7, 0, 0.84, 0],duration:1.5,delay:.5}}
      
      
      data-scroll data-scroll-speed="-.1" className=" rounded-lg h-[98vh] w-[98vw]  bg-white  pb-20">
        <div className="textStructure   mt-40 px-20 ">
          {["We Create", "Eye Opening",  "Presentations"].map((item, index) => {
            return (
              <div key={index} className="masker ">
                <div className="flex  w-fit items-end overflow-hiddenx">
                  {index === 1 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "9vw" }}
                      transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 ,delay:3}}
                      className="w-[8vw] mr-[1vw] rounded-md relative -top-[2.3vw] h-[5.7vw] bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] bg-cover bg-center overflow-hidden "
                    ></motion.div>
                  )}
                  <h1
                    style={{ fontFamily: "f1" }}
                    className=" flex items-center h-full uppercase text-[9vw] leading-[7vw]  font-semibold "
                  >
                    {item}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
        <div className="border-t-1 border-zinc-700 mt-15  py-5 px-20 flex justify-between items-center  ">
          {[
            "For public and private companies",
            "From the first pitch to IPO",
          ].map((item, index) => (
            <p
              key={index}
              className="text-md font-light tracking-tight leading-none"
            >
              {item}
            </p>
          ))}
          <div className="start flex items-center gap-5  ">
            <div className="px-5  py-2 border-2 border-zinc-500 rounded-full uppercase font-light text-md">
              Start The Project
            </div>
            <div className=" w-8 h-8 flex items-center justify-center border-2 border-zinc-500 rounded-full">
              <span className="rotate-45">
                <FaArrowUpLong />
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;
