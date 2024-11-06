import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const MarketingLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="bg-slate-100">
            <main className="bg-slate-100 bg-gradient-to-b from-blue-50 via-blue-200 to-blue-50">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default MarketingLayout