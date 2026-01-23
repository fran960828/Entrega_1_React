

import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";

export default function RootLayout(){
    return (
        <>
            <div className="flex h-screen bg-[#0f172a] text-[#f8fafc] font-[Inter]">
                <Sidebar/>
                <Dashboard/>

            </div>
        </>
    )
}
