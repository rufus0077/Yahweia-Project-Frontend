import React from 'react'

const MagicBorder = ({
    title,icon,position,handleClick ,otherClasses
}:{
    title:string,
    icon: React.ReactNode , position: string; 
    handleClick?: () => void; otherClasses?: string
}) => {
  return (
    <button className="relative w-full inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none 
    md:w-32 md:mt-2 mt-2  ">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFD700_0%,#FFA500_50%,#FFD700_100%)]" />
        <span className={`inline-flex 
        h-full w-full cursor-pointer items-center 
        justify-center rounded-lg bg-slate-950 
        px-3 py-1 text-sm font-medium gap-2 text-white backdrop-blur-3xl ${otherClasses}`}>
            
            {position==='left' && icon}
            {title}
            {position==='right' && icon}
        </span>
</button>
  )
}

export default MagicBorder