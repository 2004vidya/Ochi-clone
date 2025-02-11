import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

const   App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='min-h-screen w-full  bg-[#f1f1f1] text-black ' > 
    <Navbar/>
    <LandingPage/>
    <Marquee/>
    <About/>
    <Eyes/>
    <Featured/>
    <Cards/>
    <Footer/>
    
    </div>
  )
}

export default   App