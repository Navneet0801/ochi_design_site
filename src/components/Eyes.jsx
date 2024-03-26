// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react'

function Eyes()  {
    const [rotate, setRotate] = useState(0);
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            console.log(mouseX, mouseY);

            let deltaX = mouseX - (window.innerWidth/2);
            let deltaY = mouseY - (window.innerHeight/2);

            let angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
            setRotate(angle - 180);
        })
    })
    
    
  return (
    <div className='eyes w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-speed="-0.7" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
            <div className='flex gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                <div className='flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full'>
                    <div className='relative w-2/3 h-2/3 bg-zinc-900 rounded-full'>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-8'>
                            <div className='w-8 h-8 bg-zinc-100 rounded-full'></div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full'>
                    <div className='relative w-2/3 h-2/3 bg-zinc-900 rounded-full'>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-8'>
                            <div className='w-8 h-8 bg-zinc-100 rounded-full'></div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Eyes