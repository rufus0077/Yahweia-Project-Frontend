import React from 'react'
import { TextRevealCard } from './ui/TextRevelCard'
import { BackgroundBeams } from './ui/BgBeams'

const Internship = () => {
  return (
    <div className='pt-10 pb-20 flex items-center justify-center w-full'>
        <TextRevealCard className="shadow-input shadow-none bg-inherit " text='Hover Over me to reveal' revealText='Internship and Career opportunity'>
            <div className='flex justify-center items-center '>
            <button className="p-[3px] relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                        <a href="">Register Now</a>
                    </div>
            </button>

                     </div>
        </TextRevealCard>
    </div>
  )
}

export default Internship