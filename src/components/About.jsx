import React from "react";

const About = () => {
  return (
    <div className="w-full  py-25 px-12 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black ">
      <h1 className='font-["Neue_Montreal"] text-[4.2vw] leading-[4vw]'>
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className=" flex  w-full border-t-2 pt-6 mt-[6vw] border-[#afdb12]  ">
      <div className="w-1/2">
        <h1 className="text-[4vw]">Our approach :</h1>
        <button className=" flex gap-10  items-center px-8 mt-6 py-5 rounded-full bg-zinc-900 uppercase text-white">
          Read More
          <div className="w-2 h-2 bg-zinc-100 rounded-full "></div>
        </button>
      </div>
      <div className="w-1/2 h-[75vh] rounded-3xl bg-[url(https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg)] bg-cover "></div>

      </div>
      
    </div>
  );
};

export default About;
