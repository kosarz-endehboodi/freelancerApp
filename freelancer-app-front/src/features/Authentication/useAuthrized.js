import { useLocation } from "react-router-dom";
import useUser from "./useUser";

export default function useAuthrize() {

    const {data ,isLoading} = useUser();
    const { user } = data || {};
    const { pathname } = useLocation();//?/owner/project

    const roles = {
        admin: "ADMIN",
        owner: "OWNER",
        freelancer: "FREELANCER",
    };

    let isAuthenticated = false;
    if (user) isAuthenticated = true;

    let isAuthorized = false;
    const desiredRole = pathname.split("/")[1];
    console.log(desiredRole)
 
    if (Object.keys(roles).includes(desiredRole)) {
        if (user && user.role == roles[desiredRole]) isAuthorized = true;
    }

    return { isLoading, isAuthenticated, isAuthorized, data }
}



 // if (pathname.includes("owner")) {
    //     if (user && user.role === "OWNER") isAuthrized = true;
    // }
    // if (pathname.includes("freelancer")) {
    //     if (user && user.role === "FREELANCER") isAuthrized = true;
    // }
    // if (pathname.includes("admin")) {
    //     if (user && user.role === "ADMIn") isAuthrized = true;
    // }
