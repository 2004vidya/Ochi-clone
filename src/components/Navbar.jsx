import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [showNavbar, setshowNavbar] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const isMounted = useRef(false);
  const [isGlass, setIsGlass] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (!isMounted.current) {
        isMounted.current = true;
        lastScrollY.current = currentScrollY;
        return;
      }
      if (currentScrollY > lastScrollY.current) {
        setshowNavbar(false);
        setIsMenuOpen(false); // Close menu when scrolling down
      } else {
        setshowNavbar(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const timer = setTimeout(() => setIsGlass(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  const mobileMenuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  return (
    <>
      <motion.div 
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: showNavbar ? 0 : "-100%", opacity: showNavbar ? 1 : 0 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className={`fixed z-[999] w-full px-4 md:px-8 lg:px-20 py-4 lg:py-8 font-["Neue Montreal"] flex justify-between items-center
          ${isGlass ? 'backdrop-blur-md  bg-grey-900  border border-white/20 rounded-b-md' : 'bg-transparent'}`}>

        <div className="logo w-12 lg:w-20">
          <svg viewBox="0 0 72 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
                d="M9.8393 10.2032C4.22951 10.3257 -0.0459221 14.7356 0.000372391 20.2752C0.0412204 25.3548 4.57808 30.3608 10.6862 29.9226C15.5145 29.5768 19.9015 25.4119 19.8525 20.0057C19.8035 14.5995 15.1904 10.0916 9.8393 10.2032ZM9.89649 25.7005C6.87101 25.7005 4.39834 23.1144 4.40924 19.9839C4.39525 19.2507 4.52792 18.522 4.79947 17.8407C5.07102 17.1594 5.47597 16.5392 5.99056 16.0164C6.50515 15.4937 7.11902 15.0789 7.79613 14.7966C8.47324 14.5142 9.19995 14.3698 9.93362 14.372C10.6673 14.3742 11.3931 14.5228 12.0686 14.8092C12.744 15.0956 13.3554 15.514 13.8668 16.0398C14.3783 16.5656 14.7796 17.1882 15.0471 17.8711C15.3146 18.554 15.4429 19.2834 15.4246 20.0166C15.4409 23.1008 12.9111 25.7059 9.88832 25.7005H9.89649Z"
                fill="currentColor"
              ></path>
              <path
                d="M62.8086 29.4855H67.1222V10.6372H62.8086V29.4855Z"
                fill="currentColor"
              ></path>
              <path
                d="M67.6816 0.172852V6.13439H71.5322C71.6738 6.13439 71.8046 6.13439 72.0006 6.11534V0.172852H67.6816Z"
                fill="currentColor"
              ></path>
              <path
                d="M31.5648 25.7016C28.5393 25.7016 26.0667 23.1156 26.0776 19.9851C26.0936 18.5291 26.6764 17.1366 27.7023 16.1029C28.7282 15.0692 30.1166 14.4757 31.573 14.4482C32.4198 14.4541 33.2537 14.6557 34.0095 15.0373C34.7654 15.4188 35.4227 15.97 35.9301 16.6477L40.0667 15.0144C38.2884 12.0853 35.0669 10.1145 31.4995 10.1989C25.8897 10.3214 21.6142 14.7313 21.6605 20.2709C21.7014 25.3505 26.2382 30.3565 32.3464 29.9183C33.9908 29.7803 35.5761 29.2408 36.9631 28.347C38.3501 27.4532 39.4963 26.2326 40.3009 24.7924L36.2542 22.9931C35.7705 23.8086 35.0851 24.486 34.2638 24.9604C33.4426 25.4347 32.5132 25.69 31.5648 25.7016Z"
                fill="currentColor"
              ></path>
              <path
                d="M52.4097 10.1387C51.2512 10.1119 50.1066 10.3947 49.0941 10.958C48.0816 11.5212 47.2379 12.3445 46.6501 13.3427V0.172852H42.293V29.4688H46.6501C46.6501 29.1721 46.6501 18.7816 46.6501 18.7816C46.6501 15.6946 47.8619 13.4352 50.8084 13.4352C54.6046 13.4352 54.6209 17.4178 54.6209 19.6962C54.6209 22.9165 54.6209 25.5189 54.6209 28.7393V29.4987H59.0271C59.0271 29.3708 59.0488 29.2728 59.0488 29.1721C59.0488 25.5108 59.0951 21.8522 59.0325 18.1909C58.9916 15.6538 58.5015 10.1387 52.4097 10.1387Z"
                fill="currentColor"
              ></path>
          </svg>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-10">
          {["Services", "Our Work", "About Us", "Insights", "Contact Us"].map((item, index) => (
            <a key={index} className={`text-lg capitalize font-light ${index === 4 && "lg:ml-32"}`}>
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-black"
        >
          <div className="w-6 h-0.5 bg-current mb-1 transition-transform"></div>
          <div className="w-6 h-0.5 bg-current mb-1 transition-transform"></div>
          <div className="w-6 h-0.5 bg-current transition-transform"></div>
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            transition={{ duration: 0.3 }}
            className="fixed z-[998] top-0 right-0 w-full h-screen backdrop-blur-lg bg-black/50 lg:hidden"
          >
            <div className="absolute right-0 top-0 h-full w-3/4 flex flex-col items-end p-8 gap-8 bg-white/10 backdrop-blur-xl font-[f1] text-6xl">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-black text-2xl p-2"
              >
                ×
              </button>
              {["Services", "Our Work", "About Us", "Insights", "Contact Us"].map((item, index) => (
                <a 
                  key={index} 
                  className="text-6xl font-[f1] text-white capitalize font-light"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar


// import React, { useEffect, useRef, useState } from 'react';
// import { motion } from 'motion/react';

// const Navbar = () => {
//   const [showNavbar, setShowNavbar] = useState(true);
//   const lastScrollY = useRef(0);
//   const isMounted = useRef(false);
//   const [isGlass, setIsGlass] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (!isMounted.current) {
//         isMounted.current = true;
//         lastScrollY.current = currentScrollY;
//         return;
//       }
//       setShowNavbar(currentScrollY <= lastScrollY.current);
//       lastScrollY.current = currentScrollY;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsGlass(true), 4000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <motion.div 
//       initial={{ y: 0, opacity: 1 }}
//       animate={{ y: showNavbar ? 0 : "-100%", opacity: showNavbar ? 1 : 0 }}
//       transition={{ ease: "easeInOut", duration: 0.5 }}
//       className={`fixed z-[999] w-full px-6 md:px-20 py-4 md:py-8 font-['Neue Montreal'] flex justify-between items-center 
//         ${isGlass ? 'backdrop-blur-md bg-white/10 border border-white/20 rounded-b-md' : 'bg-transparent'}`}
//     >
//       <div className="logo">
//       {/* <svg
//               width="72"
//               height="30"
//               viewBox="0 0 72 30"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M9.8393 10.2032C4.22951 10.3257 -0.0459221 14.7356 0.000372391 20.2752C0.0412204 25.3548 4.57808 30.3608 10.6862 29.9226C15.5145 29.5768 19.9015 25.4119 19.8525 20.0057C19.8035 14.5995 15.1904 10.0916 9.8393 10.2032ZM9.89649 25.7005C6.87101 25.7005 4.39834 23.1144 4.40924 19.9839C4.39525 19.2507 4.52792 18.522 4.79947 17.8407C5.07102 17.1594 5.47597 16.5392 5.99056 16.0164C6.50515 15.4937 7.11902 15.0789 7.79613 14.7966C8.47324 14.5142 9.19995 14.3698 9.93362 14.372C10.6673 14.3742 11.3931 14.5228 12.0686 14.8092C12.744 15.0956 13.3554 15.514 13.8668 16.0398C14.3783 16.5656 14.7796 17.1882 15.0471 17.8711C15.3146 18.554 15.4429 19.2834 15.4246 20.0166C15.4409 23.1008 12.9111 25.7059 9.88832 25.7005H9.89649Z"
//                 fill="currentColor"
//               ></path>
//               <path
//                 d="M62.8086 29.4855H67.1222V10.6372H62.8086V29.4855Z"
//                 fill="currentColor"
//               ></path>
//               <path
//                 d="M67.6816 0.172852V6.13439H71.5322C71.6738 6.13439 71.8046 6.13439 72.0006 6.11534V0.172852H67.6816Z"
//                 fill="currentColor"
//               ></path>
//               <path
//                 d="M31.5648 25.7016C28.5393 25.7016 26.0667 23.1156 26.0776 19.9851C26.0936 18.5291 26.6764 17.1366 27.7023 16.1029C28.7282 15.0692 30.1166 14.4757 31.573 14.4482C32.4198 14.4541 33.2537 14.6557 34.0095 15.0373C34.7654 15.4188 35.4227 15.97 35.9301 16.6477L40.0667 15.0144C38.2884 12.0853 35.0669 10.1145 31.4995 10.1989C25.8897 10.3214 21.6142 14.7313 21.6605 20.2709C21.7014 25.3505 26.2382 30.3565 32.3464 29.9183C33.9908 29.7803 35.5761 29.2408 36.9631 28.347C38.3501 27.4532 39.4963 26.2326 40.3009 24.7924L36.2542 22.9931C35.7705 23.8086 35.0851 24.486 34.2638 24.9604C33.4426 25.4347 32.5132 25.69 31.5648 25.7016Z"
//                 fill="currentColor"
//               ></path>
//               <path
//                 d="M52.4097 10.1387C51.2512 10.1119 50.1066 10.3947 49.0941 10.958C48.0816 11.5212 47.2379 12.3445 46.6501 13.3427V0.172852H42.293V29.4688H46.6501C46.6501 29.1721 46.6501 18.7816 46.6501 18.7816C46.6501 15.6946 47.8619 13.4352 50.8084 13.4352C54.6046 13.4352 54.6209 17.4178 54.6209 19.6962C54.6209 22.9165 54.6209 25.5189 54.6209 28.7393V29.4987H59.0271C59.0271 29.3708 59.0488 29.2728 59.0488 29.1721C59.0488 25.5108 59.0951 21.8522 59.0325 18.1909C58.9916 15.6538 58.5015 10.1387 52.4097 10.1387Z"
//                 fill="currentColor"
//               ></path>
//             </svg> */}
//       </div>
      
//       {/* Mobile Menu Button */}
//       <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-black text-2xl">
//         ☰
//       </button>
      
//       {/* Links for Desktop & Mobile */}
//       <div className={`absolute md:static top-full left-0 w-full md:w-auto md:flex items-center  md:bg-transparent 
//         transition-transform duration-300 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full md:translate-y-0'}`}>
//         <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 p-6 md:p-0">
//           {["Services", "Our Work", "About Us", "Insights", ].map((item, index) => (
//             <a key={index} className={`text-lg capitalize font-light text-black ${index === 4 ? 'md:ml-32' : ''}`}>
//               {item}
//             </a>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Navbar;

// import React, { useEffect, useRef, useState } from 'react'
// import { motion } from 'motion/react';

// const Navbar = () => {
//   const [showNavbar, setshowNavbar] = useState(true);
//   const lastScrollY = useRef(0);
//   const isMounted = useRef(false); // Prevent animation interference on first render
//   const [isGlass, setIsGlass] = useState(false); // Track when to apply glassmorphism


//   useEffect(() => {
//     const handleScroll =()=>{
//       const currentScrollY = window.scrollY;

//       if (!isMounted.current) {
//         isMounted.current = true;
//         lastScrollY.current = currentScrollY; // Prevent navbar hiding on page load
//         return;
//       }
//       if(currentScrollY > lastScrollY.current){
//         setshowNavbar(false);
//       }
//       else{
//         setshowNavbar(true);
//       }
//       lastScrollY.current = currentScrollY;
//     };
//     window.addEventListener("scroll",handleScroll);
//     return()=>window.removeEventListener("scroll",handleScroll);
   
//   },[lastScrollY])

//   useEffect(() => {
//     // Apply glassmorphism after the landing page animation ends (adjust timing)
//     const timer = setTimeout(() => setIsGlass(true), 4000); // 1.5s matches animation duration
//     return () => clearTimeout(timer);
//   }, []);
  

  
//   return (
//     <motion.div 
//     initial={{ y: 0, opacity: 1 }}
//     animate={{ y: showNavbar ? 0 : "-100%", opacity: showNavbar ? 1 : 0 }}
//     transition={{ ease: "easeInOut", duration: 0.5  }}
    
    
//     className={`fixed z-[999] w-full px-20 py-8 font-["Neue Montreal"] flex justify-between 
//       ${isGlass ? 'backdrop-blur-md bg-white/10 border border-white/20 rounded-b-md' : 'bg-transparent'}`}>
//         <div className="logo">
//         <svg width="72" height="30" viewBox="0 0 72 30" fill="none" xmlns="http://www.w3.org/2000/svg">
// 									<path d="M9.8393 10.2032C4.22951 10.3257 -0.0459221 14.7356 0.000372391 20.2752C0.0412204 25.3548 4.57808 30.3608 10.6862 29.9226C15.5145 29.5768 19.9015 25.4119 19.8525 20.0057C19.8035 14.5995 15.1904 10.0916 9.8393 10.2032ZM9.89649 25.7005C6.87101 25.7005 4.39834 23.1144 4.40924 19.9839C4.39525 19.2507 4.52792 18.522 4.79947 17.8407C5.07102 17.1594 5.47597 16.5392 5.99056 16.0164C6.50515 15.4937 7.11902 15.0789 7.79613 14.7966C8.47324 14.5142 9.19995 14.3698 9.93362 14.372C10.6673 14.3742 11.3931 14.5228 12.0686 14.8092C12.744 15.0956 13.3554 15.514 13.8668 16.0398C14.3783 16.5656 14.7796 17.1882 15.0471 17.8711C15.3146 18.554 15.4429 19.2834 15.4246 20.0166C15.4409 23.1008 12.9111 25.7059 9.88832 25.7005H9.89649Z" fill="currentColor"></path>
// 									<path d="M62.8086 29.4855H67.1222V10.6372H62.8086V29.4855Z" fill="currentColor"></path>
// 									<path d="M67.6816 0.172852V6.13439H71.5322C71.6738 6.13439 71.8046 6.13439 72.0006 6.11534V0.172852H67.6816Z" fill="currentColor"></path>
// 									<path d="M31.5648 25.7016C28.5393 25.7016 26.0667 23.1156 26.0776 19.9851C26.0936 18.5291 26.6764 17.1366 27.7023 16.1029C28.7282 15.0692 30.1166 14.4757 31.573 14.4482C32.4198 14.4541 33.2537 14.6557 34.0095 15.0373C34.7654 15.4188 35.4227 15.97 35.9301 16.6477L40.0667 15.0144C38.2884 12.0853 35.0669 10.1145 31.4995 10.1989C25.8897 10.3214 21.6142 14.7313 21.6605 20.2709C21.7014 25.3505 26.2382 30.3565 32.3464 29.9183C33.9908 29.7803 35.5761 29.2408 36.9631 28.347C38.3501 27.4532 39.4963 26.2326 40.3009 24.7924L36.2542 22.9931C35.7705 23.8086 35.0851 24.486 34.2638 24.9604C33.4426 25.4347 32.5132 25.69 31.5648 25.7016Z" fill="currentColor"></path>
// 									<path d="M52.4097 10.1387C51.2512 10.1119 50.1066 10.3947 49.0941 10.958C48.0816 11.5212 47.2379 12.3445 46.6501 13.3427V0.172852H42.293V29.4688H46.6501C46.6501 29.1721 46.6501 18.7816 46.6501 18.7816C46.6501 15.6946 47.8619 13.4352 50.8084 13.4352C54.6046 13.4352 54.6209 17.4178 54.6209 19.6962C54.6209 22.9165 54.6209 25.5189 54.6209 28.7393V29.4987H59.0271C59.0271 29.3708 59.0488 29.2728 59.0488 29.1721C59.0488 25.5108 59.0951 21.8522 59.0325 18.1909C58.9916 15.6538 58.5015 10.1387 52.4097 10.1387Z" fill="currentColor"></path>
// 								</svg>
//         </div>
//         <div className="links flex gap-10">
//             {["Services","Our Work" ,"About Us","Insights","Contact Us"].map((item,index)=><a key={index} className={`text-lg capitalize font-light ${index===4 && "ml-32"} `}  >{item}</a>)}
//         </div>

//     </motion.div>
//   )
// }

// export default Navbar