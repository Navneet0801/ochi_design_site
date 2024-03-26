/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import React from 'react'

const Marqee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.1" className='w-full py-10 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl'>
        <div className="text border-t-2 flex border-b-2 border-zinc-300 overflow-hidden whitespace-nowrap">
            <motion.h1 
              initial={{x: 0}}
              animate={{x: "-100%"}}
              transition={{ease: "linear", repeat: Infinity, duration: 10}}
              className='text-white tracking-tight py-2 text-[15vw] leading-none font-[Founders Grotesk] uppercase font-semibold pr-20'>
                we are ochi
              </motion.h1>
            <motion.h1 
              initial={{x: 0}}
              animate={{x: "-100%"}}
              transition={{ease: "linear", repeat: Infinity, duration: 10}}
              className='text-white tracking-tight py-2 text-[15vw] leading-none font-[Founders Grotesk] uppercase font-semibold pr-20'>
                we are ochi
              </motion.h1>
        </div>
    </div>
  )
}

export default Marqee