import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
  return (
    <div
      className="h-screen w-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-400">
      <div className="">
        <SignIn />
      </div>
    </div>
  )
}