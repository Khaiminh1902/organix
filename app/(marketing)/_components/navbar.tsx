import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex w-full top-0 fixed pt-4'>
        <div className='pl-20'></div>
        <div className='top-0 w-full h-16 px-6 shadow-sm bg-white flex items-center rounded-full justify'>
            <div className='mx-auto flex items-center w-full justify-between'>
                <Logo />
                <div className='space-x-4 md:block md:w-auto flex items-center justify-between w-full'>
                    <Button className='rounded-full p-5' size="sm" variant="outline" asChild>
                        <Link href="/sign-in">
                        Login
                        </Link>
                    </Button>
                    <Button className='rounded-full p-5' size="sm" asChild>
                        <Link href="/sign-up">
                            Get Organix for free
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
        <div className='pr-20'></div>
    </div>
  )
}