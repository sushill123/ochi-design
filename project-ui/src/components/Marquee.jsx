import { motion } from 'framer-motion';
import React from 'react'

const Marquee = () => {

  return (
    <div data-scroll data-scroll-speed=".1" data-scroll-section className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004d43] text-white'>
      <div className="text border-t-2 border-b-2 border-zinc-400 flex  overflow-hidden whitespace-nowrap">
        <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 10 }} className="text-[10vw] leading-none -mb-15 uppercase pt-5 font-semibold pr-20">Visual Designer</motion.h1>
        <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 10 }} className="text-[10vw] leading-none -mb-5 uppercase pt-5 font-semibold pr-20">Visual Designer</motion.h1>
        <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 10 }} className="text-[10vw] leading-none -mb-5 uppercase pt-5 font-semibold pr-20">Visual Designer</motion.h1>
      </div>
    </div>
  )
}


export default Marquee;