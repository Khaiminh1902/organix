import { OrganizationList } from "@clerk/nextjs";

export default function CreateOrganizationPage() {
    return (
        <div
            className="h-screen w-screen flex items-center justify-center bg-gradient-to-b from-white to-sky-300">
            <div className="">
            <OrganizationList 
                hidePersonal
                afterSelectOrganizationUrl="/organization/:id"
                afterCreateOrganizationUrl="/organization:id"
             />
            </div>
        </div>
    )
}