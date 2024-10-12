import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { MovingBorder } from './ui/MovingBorder'
import MagicBorder from './ui/MagicBorder'
import { title } from 'process'
import { StarsBackground } from './ui/StarBg'
import { FaLocationArrow } from 'react-icons/fa6'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
        <div>
           <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen ' fill='purple'/>
            <Spotlight className='top-10 left-full h-80[vh] w-[50vw] ' fill='purple'/>
            <Spotlight className='top-28 left-80 h-80[vh] w-50[vw] ' fill='blue'/> 
            {/* <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen ' fill='#FFD700'/>
            <Spotlight className='top-10 left-full h-80[vh] w-[50vw] ' fill='#FFEA00'/>
            <Spotlight className='top-28 left-80 h-80[vh] w-50[vw] ' fill='#FFA500'/> */}
            {/* <StarsBackground /> */}

        </div>

        <div className="h-screen w-full bg-black-100   bg-grid-white/[0.05] 
          flex items-center justify-center absolute top-0 left-0">
      {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none
             inset-0 flex items-center justify-center 
            bg-black-100
                [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
        </div>
        <div className='flex justify-center relative my-20 z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center '>
                <h2 className='uppercase tracking-widest text-base text-center text-blue-100 sm:text-lg  max-w-100'>
                    Trio Devs Digital Services
                </h2>
                <TextGenerateEffect 
                className='text-white  text-center text-[40px] md:text-5xl lg:text-6xl
                 font-sans' 
                words=' "Where Creativity Meets Technology"'
                >
                </TextGenerateEffect>

                <p className="text-center text-xs  text-white-100 md:tracking-wider   md:text-sm lg:text-sm py-4 px-30">
                   Blending innovation with technology 
                </p>

                <a href="#about">
                    <MagicBorder title='Join us' icon={<FaLocationArrow />} position={'right'} />
                </a>

                
            </div>

        </div>



    </div>
  )
}

export default Hero