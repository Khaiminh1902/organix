import { OrganizationList } from "@clerk/nextjs";

export default function CreateOrganizationPage() {
    return (
        <div
            className="h-screen w-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-400">
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