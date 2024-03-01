import { useLocation } from "react-router-dom";
import useUser from "./useUser";

export default function useAuthrize() {

    const { data, isLoading } = useUser();
    const { user } = data || {};
    const { pathname } = useLocation();//?/owner/project

    let isVerified = false;
    if (user && Number(user.status) === 2) isVerified = true;

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

    return { isLoading, isAuthenticated, isAuthorized, data, isVerified }
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
