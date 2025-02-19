import React from 'react'

const Cards = () => {
  return (
    <div className='w-full min-h-screen flex flex-col md:flex-row gap-5 items-center px-10 py-10 bg-zinc-100 md:px-20 md:py-20'>
      
      {/* Left Card */}
      <div className="cardcontainer  w-[90vw]  md:w-1/2 h-[50vh] md:h-[70vh]">
        <div className="card relative rounded-xl flex items-center justify-center w-full h-full bg-[#004d43]">
          <img className='w-[30vw] md:w-[12vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <button className='absolute border-2 py-1 px-4 rounded-full border-[#cdea68] text-[#cdea68] left-5 bottom-5 md:left-10 md:bottom-10'>&copy;2019-2022</button>
        </div>
      </div>

      {/* Right Cards */}
      <div className="cardcontainer flex flex-wrap md:flex-nowrap gap-5  w-[90vw]  md:w-1/2 h-[50vh] md:h-[70vh]">
        
        {/* First Small Card */}
        <div className="card rounded-xl relative flex items-center justify-center w-full md:w-1/2 h-full bg-[#171616]">
          <img className='w-[30vw] md:w-[12vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
          <button className='absolute border-2 py-1 px-4 rounded-full border-zinc-100 text-zinc-100 left-5 bottom-5 md:left-10 md:bottom-10'>RATING 5.0 ON CLUTCH</button>
        </div>

        {/* Second Small Card */}
        <div className="card relative flex items-center justify-center rounded-xl  w-[90vw]  md:w-1/2 h-full bg-[#212121]">
          <img className='w-[30vw] md:w-[12vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
          <button className='absolute border-2 py-1 px-4 rounded-full border-zinc-100 text-zinc-100 left-5 bottom-5 md:left-4 md:bottom-10'>BUSINESS BOOTCAMP ALUMNI</button>
        </div>

      </div>

    </div>
  )
}

export default Cards
// import React from 'react'

// const Cards = () => {
//   return (
//     <div className='w-full h-screen flex gap-5 items-center px-20 py-20 bg-zinc-100'>
//         <div className="cardcontainer h-[70vh]  w-1/2">
//             <div className="card relative rounded-xl flex items-center justify-center   w-full h-full bg-[#004d43]">
//                 <img className='w-[12vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
//                 <button className='absolute border-2 py-1 px-4 rounded-full border-[#cdea68] text-[#cdea68] left-10 bottom-10'>&copy;2019-2022</button>
//             </div>
        
//         </div>
//         <div className="cardcontainer flex gap-5 h-[70vh]  w-1/2">
//         <div className="card rounded-xl relative  flex items-center justify-center  w-1/2 h-full bg-[#171616]">
//             <img className='w-[12vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
//             <button className='absolute border-2 py-1 px-4 rounded-full border-zinc-100  text-zinc-100  left-10 bottom-10'>RATING 5.0 ON CLUTCH</button>
        
        
//         </div>
//         <div className="card relative  flex items-center justify-center  rounded-xl  w-1/2 h-full bg-[#212121]">
//         <img className='w-[12vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
//         <button className='absolute border-2 py-1 px-4  rounded-full border-zinc-100  text-zinc-100 left-4 bottom-10'>BUSINESS BOOTCAMP ALUMINI</button>
        
        
//         </div>
//         </div>
//     </div>
//   )
// }

// export default Cards