// import React, { useEffect } from 'react';
// import Navbar from './components/Navbar';
// import LandingPage from './components/LandingPage';
// import Marquee from './components/Marquee';
// import About from './components/About';
// import Eyes from './components/Eyes';
// import Featured from './components/Featured';
// import Cards from './components/Cards';
// import Footer from './components/Footer';
// import LocomotiveScroll from 'locomotive-scroll';

// const App = () => {
//   useEffect(() => {
//     const locomotiveScroll = new LocomotiveScroll({
//       el: document.querySelector('[data-scroll-container]'),
//     });
//     return () => locomotiveScroll.destroy();
//   }, []);

//   return (
//     <div data-scroll-container className="min-h-screen w-full bg-[#f1f1f1] text-black">
//       <Navbar />
//       <LandingPage />
//       <Marquee />
//       <About />
//       {/* Eyes Wrapper */}
//       <div className="eyes-wrapper">
//         <Eyes />
//       </div>
//       <Featured />
//       <div className="px-4 mb-100 md:mb-8 md:px-8">
//         <Cards />
//       </div>
//       <div className="md:mt-16">
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default App;


import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Cards from './components/Cards';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    return () => locomotiveScroll.destroy();  // Cleanup when the component unmounts
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#f1f1f1] text-black">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <div className="px-4 mb-100 md:mb-8  md:px-8">
        <Cards />
      </div>
      <div className="  md:mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default App;
