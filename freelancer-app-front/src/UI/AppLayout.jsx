import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header"
export default function layout() {
    return (
        <div className="grid h-screen  grid-rows-[auto_1fr] grid-cols-[15rem_1fr]">
            <div className="bg-secondary-0 py-4 px-8">   <Header /> </div>
            <div className="bg-secondary-0 row-start-1 row-span-2"><Sidebar /></div>
            <div className="bg-secondary-100 p-8 overflow-y-auto">
                <div className="mx-auto max-w-screen-lg">
                    <Outlet />
                </div>
            </div>
            <div>app content</div>
        </div>
    )
}