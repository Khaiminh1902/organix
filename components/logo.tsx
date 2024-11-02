import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import localFont from "next/font/local"

const headingFont = localFont({
    src: "../app/fonts/CalSans-SemiBold.woff2",
})

export const Logo = () => {
    return (
        <Link href="/" className="">
            <div className="hover:opacity-75 transition items-center gap-x-2 md:flex hidden">
                <Image 
                    src="/logo.png"
                    alt="logo"
                    height={35}
                    width={35}
                />
                <p className={cn(
                    "text-2xl text-neutral-700 pb-1",
                    headingFont.className
                )}>
                    Organix
                </p>
            </div>
        </Link>
    )
}