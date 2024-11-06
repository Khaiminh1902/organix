import { Button } from '@/components/ui/button'
import { Medal } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import localFont from 'next/font/local'
import { cn } from '@/lib/utils'
import { Poppins } from "next/font/google"
import { Navbar } from './_components/navbar'

const headingFont = localFont({
  src: "../fonts/CalSans-SemiBold.woff2",
})

const textFont = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ],
})

const MarketingPage = () => {
  return (
    <div className='h-screen flex items-center justify-center flex-col bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] inset-0 -z-1'>
      <Navbar />
      <div className={cn(
        'flex items-center justify-center flex-col pt-40 ',
        headingFont.className
        )}>
        <h1 className='text-3xl md:text-6xl'>Empower Your Team with</h1>
        <span className='text-3xl md:text-6xl text-blue-600 rounded-md w-fit p-2 pb-3 mt-2 mb-2 border border-dashed border-blue-600'>Seamless</span> 
        <h1 className='text-3xl md:text-6xl'>Collaboration.</h1>
      </div>
      <div className={cn(
        'text-sm md:text-lg text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto',
        textFont.className
        )}>
        Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique -  accomplish it all with Organix
      </div>
      <Button className='mt-6' size="lg" asChild>
        <Link href="/sign-up">
          Get Organix for free
        </Link>
      </Button>
    </div>
  )
}

export default MarketingPage