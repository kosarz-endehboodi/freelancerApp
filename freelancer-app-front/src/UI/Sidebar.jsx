import { Children } from "react";
import { HiCollection, HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export default function sidebar() {

    return (
        
            <div className=" bg-secondary-0 row-start-2 border-l border-gray-200 p-2">
                <ul>
                    <li>
                        <CustomNavLink to={'/owner/dashboard'}>
                            <HiHome /> <span >داشبورد</span>
                        </CustomNavLink>
                    </li>
                    <li>
                        <CustomNavLink to={'/owner/projects'}>
                            <HiCollection /><span>پروژه ها</span>
                        </CustomNavLink>
                    </li>
                </ul>
            </div>
      
    )
}



function CustomNavLink({ children, to }) {
    const navLickClass =
        "flex items-center gap-x-2 hover:bg-primary-100/80 hover:text-primary-900 px-2 py-1.5 rounded-lg  transition-all duration-300";

    return (
        <NavLink to={to}
            className={({ isActive }) => isActive ?
                `${navLickClass} bg-primary-100/50  text-primary-900 ` :
                `${navLickClass} text-secondary-600`}>
            {children}
        </NavLink>
    )
}