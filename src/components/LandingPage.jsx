import React, { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "motion/react";
const LandingPage = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [reloadKey, setReloadKey] = useState(0); // Add reloadKey state
  useEffect(() => {
    const handleResize =()=>{
      setIsMobile(window.innerWidth<768);
    };
    window.addEventListener("resize",handleResize);
    handleResize();
    setReloadKey(prevKey => prevKey + 1); // Update key on mount
  
    return () => window.removeEventListener("resize",handleResize);
  }, [])
  
  // return (
  //   <motion.div 
  //     initial={{ backgroundColor: "#27272a" }} 
  //     animate={{ backgroundColor: "#f1f1f1" }}  
  //     transition={{ duration: 2, delay: 2 }} 
  //     className="w-full h-screen flex items-center justify-center"
  //   >
  //     <motion.div 
  //       initial={{ scale: 0.7, y: 30 }}
  //       animate={{ scale: 1, y: 0 }}
  //       transition={{ ease: [0.7, 0, 0.84, 0], duration: 1.5, delay: 0.5 }}
  //       data-scroll 
  //       data-scroll-speed="-0.1" 
  //       className="rounded-lg h-[95vh] w-[95vw] bg-white pb-10 sm:pb-20 shadow-lg"
  //     >
  //       <div className="textStructure mt-20 sm:mt-40 px-6 sm:px-20 text-center sm:text-left">
  //         {["We Create", "Eye Opening", "Presentations"].map((item, index) => (
  //           <div key={index} className="masker">
  //             <div className="flex w-fit items-end">
  //               {index === 1 && (
  //                 <motion.div
  //                   initial={{ width: 0 }}
  //                   animate={{ width: "9vw" }}
  //                   transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 3 }}
  //                   className="w-[8vw] mr-[1vw] rounded-md relative -top-[2.3vw] h-[5.7vw] bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] bg-cover bg-center"
  //                 />
  //               )}
  //               <h1
  //                 style={{ fontFamily: "f1" }}
  //                 className="flex items-center h-full uppercase text-[clamp(2rem,9vw,5rem)] leading-[clamp(1.5rem,7vw,4rem)] font-semibold"
  //               >
  //                 {item}
  //               </h1>
  //             </div>
  //           </div>
  //         ))}
  //       </div>

  //       {/* Footer Section */}
  //       <div className="border-t border-zinc-700 mt-10 sm:mt-15 py-5 px-6 sm:px-20 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
  //         <div className="text-sm sm:text-md font-light tracking-tight leading-none space-y-2 sm:space-y-0">
  //           <p>For public and private companies</p>
  //           <p>From the first pitch to IPO</p>
  //         </div>
  //         <div className="start flex flex-col sm:flex-row items-center gap-4 sm:gap-5 mt-5 sm:mt-0">
  //           <div className="px-5 py-2 border-2 border-zinc-500 rounded-full uppercase font-light text-sm sm:text-md cursor-pointer hover:bg-zinc-200 transition">
  //             Start The Project
  //           </div>
  //           <div className="w-10 h-10 flex items-center justify-center border-2 border-zinc-500 rounded-full">
  //             <span className="rotate-45">
  //               <FaArrowUpLong />
  //             </span>
  //           </div>
  //         </div>
  //       </div>
  //     </motion.div>
  //   </motion.div>
  // );
  
  return (
    
    <motion.div 
    key={reloadKey} // Force remounting with a unique key
    initial={{ backgroundColor: "	#27272a" }} 
    animate={{ backgroundColor: "#f1f1f1" }}  
    transition={{ duration: 5, delay: 2  }} 
    
    
    
    className="backdrop  w-full h-screen  flex items-center justify-center">
      {isMobile?(
        // MOBILE VIEW 
        
      <motion.div 
      key={`mobile-${reloadKey}`} //unique key for child element
      initial={{scale:"75%",y:10}}
      animate={{scale:"100%",y:"0"}}
      transition={{ease:[0.7, 0, 0.84, 0],duration:3,delay:.5}}
    
    
    data-scroll data-scroll-speed="-.1" className=" rounded-lg h-[98vh] w-[98vw]  bg-white  pb-10">
      <div className="textStructure   mt-32 pl-4 ">
        {["We Create", "Eye Opening",  "Presentations"].map((item, index) => {
          return (
            <div key={index} className="masker ">
              <div className="flex  w-fit items-end overflow-hiddenx">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "20vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 ,delay:3}}
                    className="w-[20vw]  mr-[4vw] rounded-md relative -top-[3.2vw] h-[12vw] bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] bg-cover bg-center overflow-hidden "
                  ></motion.div>
                )}
                <h1
                  
                  style={{ fontFamily: "f1" }}
                  className=" flex items-center h-full uppercase text-[15vw] leading-[12vw] tracking-wide  font-semibold "
                >
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-1 pl-4 border-zinc-700 mt-40  py-8 flex flex-col 
       items-left   ">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md mb-8 text-left  font-light tracking-tight leading-[4vw]"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5  ">
          <div className="px-5  py-1 border-2 border-zinc-500 rounded-full uppercase font-light text-md">
            Start The Project
          </div>
          
        </div>
      </div>
    </motion.div>
      ):(
        // DEKSTOP VIEW 
        
      <motion.div 
      key={`desktop-${reloadKey}`} //unique key for child element
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
      )}
    </motion.div>
  );
};

export default LandingPage;
