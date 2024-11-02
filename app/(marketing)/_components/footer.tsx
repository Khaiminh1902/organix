import { socialMedia } from "@/data";
import React from 'react'

export const Footer = () => {
  return (
    <div className='fixed bottom-0 w-full h-14 p-4 border-t bg-slate-100 flex items-center justify-between'>
        <span className='text-sm'>Copyright © 2024 Tony Nguyen</span>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              href={info.link}
              key={info.id}
              className="rounded-[10px] w-10 h-10 cursor-pointer flex justify-center items-center bg-black-200 border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
    </div>
  )
}