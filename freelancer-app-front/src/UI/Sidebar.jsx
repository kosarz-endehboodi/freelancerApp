import { Children } from "react";
import { HiCollection, HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export default function sidebar({children}) {

    return (
        
            <div className=" bg-secondary-0 row-start-2 border-l border-gray-200 p-2">
                <ul>
                    {children}
                </ul>
            </div>
      
    )
}


