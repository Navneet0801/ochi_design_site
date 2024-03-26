// eslint-disable-next-line no-unused-vars
import React from 'react'
import { motion } from 'framer-motion';
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.4" className='w-full h-[95vh] bg-[#F1F1F1] pt-1'>
      <div className="textstructure mt-44 px-20">
        {["We create", "eye-openings", "presentations"].map((item, index) => {
          return (
          // eslint-disable-next-line react/jsx-key
          <div className="masker">
            <div className='w-fit flex items-end overflow-hidden'>
              {index === 1 && (
              <motion.div 
                initial={{width: 0}}
                animate={{width: "7vw"}}
                transition={{ease: [0.76, 0, 0.24, 1], duration: 1}}
                className='w-[7vw] h-[5vw] -top-[0.3vw] relative bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")] bg-cover rounded-md'></motion.div>
              )}
              <h1 className='uppercase font-["Founders Grotesk"] text-[7vw] leading-[6.5vw] font-bold tracking-tighter'>{item}</h1>
            </div>
          </div>
          );
        })}
      </div>
      <div className='border-t-[1px] border-zinc-800 mt-28 flex justify-between items-center px-20 py-2'>
        {["For public and private companies", "From the first pitch to IPO"].map((item) => (
          // eslint-disable-next-line react/jsx-key
          <p className='text-md font-semibold tracking-tight leading-none'>{item}</p>
        ))}
        <div className="start flex items-center gap-2">
          <div className='px-5 py-2 border-[2px] border-zinc-500 font-semibold text-md rounded-full'>START THE PROJECT</div>
          <span className='rotate-[45deg]'>
            <div className='w-10 h-10 border-[1px] border-zinc-600 rounded-full flex items-center justify-center'><FaArrowUpLong /></div>
          </span>
        </div>
      </div>
    </div>
  )
}

export default LandingPage