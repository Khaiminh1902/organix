import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react"
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

const headingFont = localFont({
    src: "../../../fonts/CalSans-SemiBold.woff2",
})

export const Navbar = () => {
    return (
        <nav className="fixed z-50 top-0 px-4 w-full h-14 border-b shadow-sm bg-white flex items-center">
            <div className="flex items-center gap-x-4">
                <div className="hidden md:flex">
                    <Link href="/select-org">
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
                </div>
                <Button size="sm" variant="primary" className="rounded-sm hidden md:block h-auto py-1.5 px-2">
                    Create
                </Button>
                <Button size="sm" variant="primary" className="rounded-sm block md:hidden">
                    <Plus className="h-4 w-4" />
                </Button>
            </div>
            <div className="ml-auto flex items-center gap-x-2">
                <OrganizationSwitcher
                    hidePersonal
                    afterCreateOrganizationUrl="/organization/:id"
                    afterLeaveOrganizationUrl="/select-org"
                    afterSelectOrganizationUrl="/organization/:id"
                    appearance={{
                        elements: {
                            rootBox: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            },
                            avatarBox: {
                                height: 33,
                                width: 33,
                            },
                        },
                        variables: {
                            fontSize: "17px",
                            fontFamily: "sans"
                        }
                    }}
                />
                <UserButton 
                    afterSignOutUrl="/"
                    appearance={{
                        elements: {
                            avatarBox: {
                                height: 33,
                                width: 33,
                            }
                        }
                    }}
                />
            </div>
        </nav>
    );
};