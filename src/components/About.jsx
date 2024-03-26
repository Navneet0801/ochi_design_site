// eslint-disable-next-line no-unused-vars
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.03" className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4vw] tracking-tight'>
        Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
        </h1>

        <div className='flex w-full pt-10 mt-20 border-t-[1px] border-[#93a64d]'>
            <div className='w-1/2 '>
                <h1 className='text-6xl'>Our approach</h1>
                <button className='hover:bg-black px-10 py-6 bg-zinc-900 rounded-full mt-10 text-white flex items-center gap-10 uppercase'>Read More
                <motion.div whileHover={{scale: 4}} className='w-3 h-3 bg-zinc-300 rounded-full'></motion.div>
                </button>
            </div>
            <div className='w-1/2 h-[70vh] bg-cover bg-[url("https://images.pexels.com/photos/317353/pexels-photo-317353.jpeg")] rounded-3xl'></div>
        </div>
    </div>
  )
}

export default About