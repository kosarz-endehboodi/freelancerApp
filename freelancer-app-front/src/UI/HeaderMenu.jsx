import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";
import Logout from "../features/Authentication/Logout";
export default function HeaderMenu() {
    return (
        <ul className="flex gap-x-4 items-center">
            <li to="dashboard" className="flex">
                <Link>
                    <HiOutlineUser className="w-5 h-5 text-primary-500" />
                </Link>
            </li>
            <li className="flex">
                <DarkMode />
            </li>
            <li className="flex">
                <Logout/>
            </li>
        </ul>
    )
}