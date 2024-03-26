// eslint-disable-next-line no-unused-vars
import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen px-12 flex items-center gap-5'>
        <div className='cardContainer h-[50vh] w-1/2'>
            <div className='relative flex items-center justify-center card w-full h-full bg-[#004D43] rounded-xl'>
              <img className='w-28' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
              <button className='text-[#CDEA68] border-[#CDEA68] absolute px-5 py-1 rounded-full border-2 left-8 bottom-4'>&copy;2023-2024</button>
            </div>
        </div>
        <div className='cardContainer w-1/2 flex gap-5 h-[50vh]'>
            <div className='relative flex items-center justify-center card w-1/2 h-full bg-[#212121] rounded-xl'>
              <img className='w-28' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
              <button className='text-[#F1F1F1] border-[#F1F1F1] absolute px-5 py-1 rounded-full border-2 left-4 bottom-4 tracking-tighter'>RATING 5.0 ON CLUTCH</button>
            </div>
            <div className='relative flex items-center justify-center card w-1/2 h-full bg-[#212121] rounded-xl'>
              <img className='w-28' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
              <button className='text-[#F1F1F1] border-[#F1F1F1] absolute px-5 py-1 rounded-full border-2 left-4 bottom-4 tracking-tighter'>BUSINESS BOOT-CAMP ALUMNI</button>
            </div>
        </div>
    </div>
  )
}

export default Cards