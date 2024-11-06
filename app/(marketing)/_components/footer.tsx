import { socialMedia } from "@/data";
import Image from "next/image";
import React from 'react'
import World from '@/public/world.svg'

export const Footer = () => {
  return (
    <div className='bg-white fixed bottom-0 h-14 flex items-center justify-between w-full p-4 border-t'>
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