import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={`eyes w-full ${isMobile?'h-[50vh]':'h-[80vh]'} overflow-hidden`}>
      {isMobile ? (
      <video autoPlay className="h-full min-w-full -pb-25 -mt-15 px-4 p-1 rounded-[2vw]"
          src="https://ochi.design/wp-content/uploads/2022/05/Main-HQ-1.mp4" // Replace with your video URL
          controls
          style={{
            
            top: "100%",
            left: "100%",
            transform: "translate(-1%, 40%)",
            width: "100%",
            maxHeight: "80%",
            zIndex: 1000,
          }}
          />
      ) : (
        // DESKTOP VIEW (Locomotive Scroll)
        <div
        data-scroll
        data-scroll-speed="-.7 "
        className=" relative  w-full h-screen bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] bg-cover bg-center"
      >
        <div className=" flex gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]    ">
          <div className="flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            <div className="blackball w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900 relative">
              <div
                className="absolute w-full h-full flex items-center justify-start"
                style={{ transform: `rotate(${rotate}deg)` }}
              >
                <div className="whiteball w-[25%] h-[25%] rounded-full bg-zinc-100 ml-[10%]"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            <div className="blackball w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900 relative">
              <div
                className="absolute w-full h-full flex items-center justify-start"
                style={{ transform: `rotate(${rotate}deg)` }}
              >
                <div className="whiteball w-[25%] h-[25%] rounded-full bg-zinc-100 ml-[10%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
  );
};

export default Eyes;


// import React, { useEffect, useState } from "react";

// const Eyes = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     window.addEventListener("resize", handleResize);
//     handleResize();

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const [rotate, setRotate] = useState(0);
//   useEffect(() => {
//     window.addEventListener("mousemove", (e) => {
//       let mouseX = e.clientX;
//       let mouseY = e.clientY;
//       // window.innerWidth/2 gives center and delta will give the diff bw where our mouse currently is wrt centre of screen

//       let deltaX = mouseX - window.innerWidth / 2;
//       let deltaY = mouseY - window.innerHeight / 2;
//       //this angle is in radians so we will convert it to degree pi radians =180 degree

//       var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
//       setRotate(angle - 180);
//     });
//   });

//   return (
//     <div className="eyes w-full h-[70vw]  overflow-hidden">
//       {isMobile ? (
//         // MOBILE VIEW
          
            
//         <div  className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[50vh] bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] bg-cover bg-center"
        
//         >
//           <div className=" flex gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]    ">
//             <div className="flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
//               <div className="blackball w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900 relative">
//                 <div
//                   className="absolute w-full h-full flex items-center justify-start"
//                   style={{ transform: `rotate(${rotate}deg)` }}
//                 >
//                   <div className="whiteball w-[25%] h-[25%] rounded-full bg-zinc-100 ml-[10%]"></div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
//               <div className="blackball w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900 relative">
//                 <div
//                   className="absolute w-full h-full flex items-center justify-start"
//                   style={{ transform: `rotate(${rotate}deg)` }}
//                 >
//                   <div className="whiteball w-[25%] h-[25%] rounded-full bg-zinc-100 ml-[10%]"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
          
//       ) : (
//         // DEKSTOP VIEW
    //     <div
    //       data-scroll
    //       data-scroll-speed="-.7 "
    //       className=" relative  w-full h-screen bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] bg-cover bg-center"
    //     >
    //       <div className=" flex gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]    ">
    //         <div className="flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
    //           <div className="blackball w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900 relative">
    //             <div
    //               className="absolute w-full h-full flex items-center justify-start"
    //               style={{ transform: `rotate(${rotate}deg)` }}
    //             >
    //               <div className="whiteball w-[25%] h-[25%] rounded-full bg-zinc-100 ml-[10%]"></div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
    //           <div className="blackball w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900 relative">
    //             <div
    //               className="absolute w-full h-full flex items-center justify-start"
    //               style={{ transform: `rotate(${rotate}deg)` }}
    //             >
    //               <div className="whiteball w-[25%] h-[25%] rounded-full bg-zinc-100 ml-[10%]"></div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </div>
//   );
// };

// export default Eyes;
