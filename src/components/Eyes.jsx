import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      // window.innerWidth/2 gives center and delta will give the diff bw where our mouse currently is wrt centre of screen

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      //this angle is in radians so we will convert it to degree pi radians =180 degree

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });

  return (
    //   <div  className="eyes w-full h-screen overflow-hidden flex justify-center items-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] bg-cover bg-center">
    //   <div className="flex gap-10">
    //     {/* Eye 1 */}
    //     <div className="flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
    //       <div className="blackball w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900 relative">
    //         {/* Whiteball is placed inside and rotated within the blackball */}
    //         <div
    //           className="absolute w-full h-full flex items-center justify-start"
    //           style={{ transform: `rotate(${rotate}deg)` }}
    //         >
    //           <div className="whiteball w-[25%] h-[25%] rounded-full bg-zinc-100 ml-[10%]"></div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Eye 2 */}
    //     <div className="flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
    //       <div className="blackball w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900 relative">
    //         <div
    //           className="absolute w-full h-full flex items-center justify-start"
    //           style={{ transform: `rotate(${rotate}deg)` }}
    //         >
    //           <div className="whiteball w-[25%] h-[25%] rounded-full bg-zinc-100 ml-[10%]"></div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="eyes w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.7 " className=" relative  w-full h-screen bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] bg-cover bg-center">
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
    </div>
  );
};

export default Eyes;
