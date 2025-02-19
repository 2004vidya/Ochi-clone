// import React, { useState } from "react";
// import { motion, useAnimation } from "motion/react";

// const Featured = () => {
//   const cards = [useAnimation(), useAnimation()];
//   const handleHover = (index) => cards[index].start({ y: "0" });
//   const handleHoverEnd = (index) => cards[index].start({ y: "120%" });

//   return (
//     <div className="w-full py-20">
//       <div className="w-full px-8 md:px-20 border-b-2 border-zinc-700 pb-15">
//         <h1 className='text-4xl md:text-6xl font-["Neue_Montreal"] tracking-tight'>
//           Featured Projects
//         </h1>
//       </div>

//       {/* Cards Section */}
//       <div className="cards flex flex-col sm:flex-row justify-between pt-20 px-8 md:px-20 pb-10 gap-10">
//         {[
//           {
//             title: "FYDE",
//             img: "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png",
//           },
//           {
//             title: "VISE",
//             img: "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg",
//           },
//           {
//             title: "TRAWA",
//             img: "https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg",
//           },
//           {
//             title: "BLACK BOOK",
//             img: "https://ochi.design/wp-content/uploads/2022/06/Frame-3876-1326x1101.jpg",
//           },
//         ].map((project, index) => (
//           <div key={index} className="w-full sm:w-1/2">
//             <div className="flex items-center">
//               <span className="w-4 h-4 mb-4 mr-3 rounded-full bg-black"></span>
//               <span className="mb-4 uppercase">{project.title}</span>
//             </div>

//             <motion.div
//               onHoverStart={() => handleHover(index % 2)}
//               onHoverEnd={() => handleHoverEnd(index % 2)}
//               className="cardcontainer h-[65vh] md:h-[85vh] relative bg-cover bg-center"
//             >
//               <h1
//                 style={{ fontFamily: "f1" }}
//                 className="font-extrabold flex overflow-hidden text-[#cdea68] absolute pl-8 pt-4 left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-6xl md:text-9xl leading-none"
//               >
//                 {project.title.split("").map((char, i) => (
//                   <motion.span
//                     key={i}
//                     initial={{ y: "120%" }}
//                     className="inline-block"
//                     animate={cards[index % 2]}
//                     transition={{
//                       ease: [0.22, 1, 0.36, 1],
//                       delay: i * 0.05,
//                     }}
//                   >
//                     {char}
//                   </motion.span>
//                 ))}
//               </h1>
//               <div
//                 className="overflow-hidden card w-full rounded-lg bg-cover bg-center h-full"
//                 style={{ backgroundImage: `url(${project.img})` }}
//               ></div>
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Featured;

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "motion/react";

const Featured = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "120%" });
  };

  return (
    <div className="mx-auto container ">
      {isMobile ? (
        // MOBILE VIEW

        <div className="w-full py-10">
          <div className="w-full px-4 border-b-2 border-zinc-700 pb-10">
            <h1 className='text-4xl font-["Neue_Montreal"]  tracking-tight'>
              Featured Projects
            </h1>
          </div>
          <div className="cards flex flex-col justify-between pt-20 px-2  pb-10 gap-10">
            <div className="w-[85vw] mx-auto ">
              <div className="flex items-center ">
                <span className="w-4 h-4 mb-4 mr-3 rounded-full bg-black"></span>
                <span className="mb-4 uppercase">fyde</span>
              </div>

              <motion.div
                onHoverStart={() => handleHover(0)}
                onHoverEnd={() => handleHoverEnd(0)}
                className="cardcontainer h-[85vw] relative  bg-cover bg-center  "
              >
                <h1
                  style={{ fontFamily: "f1" }}
                  className="font-extrabold flex overflow-hidden text-[#cdea68] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl md:text-9xl leading-none w-full justify-center "
                >
                  {"FYDE".split("").map((item, index) => (
                    <motion.span
                      initial={{ y: "120%" }}
                      className="inline-block "
                      animate={cards[0]}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.05,
                      }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </h1>
                <div className='overflow-hidden bg-[url("https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png")]  card w-full rounded-lg bg-cover bg-center h-full  '></div>
              </motion.div>
            </div>
            <div className="flex flex-wrap -mt-2 items-start">
              <div className="ml-4 mr-4 mb-4 border-1 px-2 rounded-full">
                <a
                  className="uppercase"
                  href="https://ochi.design/presentation-design-agency-services/"
                >
                  <span className="btn__text">Audit</span>
                </a>
              </div>
              <div className="mr-4 mb-10 border-1 px-2 rounded-full">
                <a
                  className="uppercase"
                  href="https://ochi.design/presentation-design-agency-services/"
                >
                  <span className="btn__text">copywriting</span>
                </a>
              </div>
              <div className="mr-4 mb-4 border-1 px-2 rounded-full">
                <a
                  className="uppercase"
                  href="https://ochi.design/presentation-design-agency-services/"
                >
                  <span className="btn__text">sales deck</span>
                </a>
              </div>
              <div className=" ml-4 mr-4 mb-4 -mt-4 border-1 px-2 rounded-full">
                <a
                  className="uppercase"
                  href="https://ochi.design/presentation-design-agency-services/"
                >
                  <span className="btn__text">slides design</span>
                </a>
              </div>
            </div>
            <div className="w-[85vw] mx-auto ">
              <div className="flex items-center ">
                <span className="w-4 h-4 mb-4 mr-3 rounded-full bg-black"></span>
                <span className="mb-4 uppercase">vise</span>
              </div>
              <motion.div
                onHoverStart={() => handleHover(1)}
                onHoverEnd={() => handleHoverEnd(1)}
                className="cardcontainer relative h-[85vw] bg-cover bg-center  "
              >
                <h1
                  style={{ fontFamily: "f1" }}
                  className="font-extrabold flex overflow-hidden text-[#cdea68] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl md:text-9xl leading-none w-full justify-center "
                >
                  {"VISE".split("").map((item, index) => (
                    <motion.span
                      initial={{ y: "120%" }}
                      className="inline-block "
                      animate={cards[1]}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.05,
                      }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </h1>
                <div className='overflow-hidden card w-full rounded-lg bg-green-600 bg-[url("https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg")] border-2 border-zinc-700 bg-cover bg-center h-full  '></div>
              </motion.div>
            </div>
            <div className="flex flex-wrap -mt-2 items-start">
              <div className="ml-4 mr-4 mb-4 border-1 px-2 rounded-full">
                <a
                  className="uppercase"
                  href="https://ochi.design/presentation-design-agency-services/"
                >
                  <span className="btn__text">agency </span>
                </a>
              </div>
              <div className="mr-4 mb-10 border-1 px-2 rounded-full">
                <a
                  className="uppercase"
                  href="https://ochi.design/presentation-design-agency-services/"
                >
                  <span className="btn__text">company presentation</span>
                </a>
              </div>
              
            </div>
          </div>
          {/* section-2  */}
          <div className="cards flex flex-col justify-between px-6 py-8 gap-10">
            <div className="w-[85vw] mx-auto ">
              <div className="flex items-center ">
                <span className="w-4 h-4 mb-4 mr-3 rounded-full bg-black"></span>
                <span className="mb-4 uppercase">TRAWA</span>
              </div>

              <motion.div
                onHoverStart={() => handleHover(0)}
                onHoverEnd={() => handleHoverEnd(0)}
                className="cardcontainer h-[85vw] relative  bg-cover bg-center  "
              >
                <h1
                  style={{ fontFamily: "f1" }}
                  className="font-extrabold flex overflow-hidden text-[#cdea68] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl md:text-9xl leading-none w-full justify-center "
                >
                  {"TRAWA".split("").map((item, index) => (
                    <motion.span
                      initial={{ y: "120%" }}
                      className="inline-block "
                      animate={cards[0]}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.02,
                      }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </h1>
                <div className='overflow-hidden bg-[url("https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg")]  card w-full rounded-lg bg-cover bg-center h-full  '></div>
              </motion.div>
              
            </div>
            <div className="flex flex-wrap -mt-2 items-start">
              <div className="ml-2 mr-2  mb-4 border-1 px-2 rounded-full">
                <a
                  className="uppercase"
                  href="https://ochi.design/presentation-design-agency-services/"
                >
                  <span className="btn__text">brand identity</span>
                </a>
              </div>
              <div className=" ml-2 mr-2 mb-10 border-1 px-2 rounded-full">
                <a
                  className="uppercase"
                  href="https://ochi.design/presentation-design-agency-services/"
                >
                  <span className="btn__text">design research </span>
                </a>
              </div>
              <div className="ml-2 -mt-4 mr-4 mb-4 border-1 px-2 rounded-full">
                <a
                  className="uppercase"
                  href="https://ochi.design/presentation-design-agency-services/"
                >
                  <span className="btn__text">investor deck </span>
                </a>
              </div>
              
            </div>
            <div className="w-[85vw] mx-auto ">
              <div className="flex items-center ">
                <span className="w-4 h-4 mb-4 mr-3 rounded-full bg-black"></span>
                <span className="mb-4 uppercase">BLACK BOOK </span>
              </div>
              <motion.div
                onHoverStart={() => handleHover(1)}
                onHoverEnd={() => handleHoverEnd(1)}
                className="cardcontainer relative h-[85vw] bg-cover bg-center  "
              >
                <h1
                  style={{ fontFamily: "f1" }}
                  className="font-extrabold flex overflow-hidden text-[#cdea68] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-7xl md:text-9xl leading-none w-full justify-center"
                >
                  {"BLACK BOOK".split("").map((item, index) => (
                    <motion.span
                      initial={{ y: "120%" }}
                      className="inline-block "
                      animate={cards[1]}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.06,
                      }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </h1>
                <div className='overflow-hidden card w-full rounded-lg bg-green-600 bg-[url("https://ochi.design/wp-content/uploads/2022/06/Frame-3876-1326x1101.jpg")] border-2 border-zinc-700 bg-cover bg-center h-full  '></div>
              </motion.div>
              
            </div>
            <div className="flex flex-wrap -mt-2 items-start">
              <div className="ml-2 mr-2  mb-4 border-1 px-2 rounded-full">
                <a
                  className="uppercase"
                  href="https://ochi.design/presentation-design-agency-services/"
                >
                  <span className="btn__text">brand identity</span>
                </a>
              </div>
              <div className=" ml-2 mr-2 mb-10 border-1 px-2 rounded-full">
                <a
                  className="uppercase"
                  href="https://ochi.design/presentation-design-agency-services/"
                >
                  <span className="btn__text">design research </span>
                </a>
              </div>
              <div className="ml-2 -mt-4 mr-4 mb-4 border-1 px-2 rounded-full">
                <a
                  className="uppercase"
                  href="https://ochi.design/presentation-design-agency-services/"
                >
                  <span className="btn__text">investor deck </span>
                </a>
              </div>
              
            </div>
          </div>
        </div>
      ) : (
        // DEKSTOP VIEW
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
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.05,
                      }}
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
                className="cardcontainer relative h-[85vh] bg-cover bg-center  "
              >
                <h1
                  style={{ fontFamily: "f1" }}
                  className=" flex overflow-hidden font-extrabold  text-[#cdea68]  absolute pt-4 pr-8 right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-9xl leading-none "
                >
                  {"VISE".split("").map((item, index) => (
                    <motion.span
                      initial={{ y: "120%" }}
                      className="inline-block "
                      animate={cards[1]}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.05,
                      }}
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
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.02,
                      }}
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
                className="cardcontainer relative h-[85vh] bg-cover bg-center  "
              >
                <h1
                  style={{ fontFamily: "f1" }}
                  className=" flex overflow-hidden font-extrabold  text-[#cdea68]  absolute pt-4 pr-8 right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-9xl leading-none "
                >
                  {"BLACK BOOK".split("").map((item, index) => (
                    <motion.span
                      initial={{ y: "120%" }}
                      className="inline-block "
                      animate={cards[1]}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.06,
                      }}
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
      )}
    </div>
  );
};

export default Featured;
